"use strict";

/* ================================================
   FoodConnect NGO Portal — script.js
   ================================================ */

/* ---- State ---- */
var generatedCaptcha = "";
var generatedOtp = "";
var deliveryEmail = "";
var pendingData = null;

/* ---- Demo community data ---- */
var communityData = [
  { id:"FC-2025-0041", org:"Asha Jyothi Trust",   ben:200, addr:"Velachery, Chennai",  pref:"Veg",  pri:"urgent", type:"Children",         status:"urgent",  time:"2h ago" },
  { id:"FC-2025-0038", org:"Green Hands NGO",      ben:75,  addr:"T.Nagar, Chennai",    pref:"Any",  pri:"normal", type:"Elderly",           status:"pending", time:"5h ago" },
  { id:"FC-2025-0033", org:"Seva Foundation",      ben:120, addr:"Tambaram, Chennai",   pref:"Veg",  pri:"normal", type:"Homeless",          status:"done",    time:"1d ago" },
  { id:"FC-2025-0029", org:"Rainbow Welfare",      ben:50,  addr:"Porur, Chennai",      pref:"Any",  pri:"urgent", type:"Disaster Victims",  status:"transit", time:"3h ago" },
  { id:"FC-2025-0025", org:"Helping Hands India",  ben:300, addr:"Anna Nagar, Chennai", pref:"Veg",  pri:"normal", type:"Mixed / General",   status:"done",    time:"2d ago" },
  { id:"FC-2025-0021", org:"Nalam Foundation",     ben:90,  addr:"Chromepet, Chennai",  pref:"Any",  pri:"urgent", type:"Children",          status:"transit", time:"1h ago" }
];

/* ================================================
   PAGE SWITCHING
   ================================================ */
function showPage(name) {
  document.getElementById("page-request").style.display   = name === "request"   ? "block" : "none";
  document.getElementById("page-dashboard").style.display = name === "dashboard" ? "block" : "none";
  document.getElementById("navRequest").classList.toggle("active",   name === "request");
  document.getElementById("navDashboard").classList.toggle("active", name === "dashboard");
  if (name === "dashboard") loadDashboard();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ================================================
   RADIO CARD SELECTION
   ================================================ */
document.querySelectorAll(".choice-card").forEach(function(card) {
  card.addEventListener("click", function() {
    var name = card.querySelector("input").name;
    document.querySelectorAll('input[name="' + name + '"]').forEach(function(inp) {
      inp.closest(".choice-card").classList.remove("selected");
    });
    card.classList.add("selected");
    card.querySelector("input").checked = true;
    // Hide error
    var errEl = document.getElementById("err-" + name);
    if (errEl) errEl.classList.remove("visible");
  });
});

/* ================================================
   VALIDATION
   ================================================ */
function clearErr(id) {
  var el = document.getElementById(id);
  if (el) { el.classList.remove("err-input"); }
  var err = document.getElementById("err-" + id);
  if (err) err.classList.remove("visible");
}

function showErr(id, show) {
  var el = document.getElementById(id);
  if (el && show) el.classList.add("err-input");
  if (el && !show) el.classList.remove("err-input");
  var err = document.getElementById("err-" + id);
  if (err && show) err.classList.add("visible");
  if (err && !show) err.classList.remove("visible");
}

function val(id) {
  var el = document.getElementById(id);
  return el ? el.value.trim() : "";
}

function validateForm() {
  var ok = true;

  // orgName
  if (!val("orgName")) { showErr("orgName", true); ok = false; }
  else showErr("orgName", false);

  // orgEmail
  var emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!val("orgEmail") || !emailRx.test(val("orgEmail"))) { showErr("orgEmail", true); ok = false; }
  else showErr("orgEmail", false);

  // managerPhone
  var phoneClean = val("managerPhone").replace(/\s+/g, "");
  if (!phoneClean || !/^\+?\d{10,13}$/.test(phoneClean)) { showErr("managerPhone", true); ok = false; }
  else showErr("managerPhone", false);

  // benCount
  var bc = parseInt(val("benCount"));
  if (!bc || bc < 1) { showErr("benCount", true); ok = false; }
  else showErr("benCount", false);

  // address
  if (!val("address")) { showErr("address", true); ok = false; }
  else showErr("address", false);

  // pincode
  if (!/^\d{6}$/.test(val("pincode"))) { showErr("pincode", true); ok = false; }
  else showErr("pincode", false);

  // food pref
  if (!document.querySelector('input[name="foodPref"]:checked')) {
    document.getElementById("err-foodPref").classList.add("visible"); ok = false;
  } else {
    document.getElementById("err-foodPref").classList.remove("visible");
  }

  // priority
  if (!document.querySelector('input[name="priority"]:checked')) {
    document.getElementById("err-priority").classList.add("visible"); ok = false;
  } else {
    document.getElementById("err-priority").classList.remove("visible");
  }

  if (!ok) toast("Please fill all required fields correctly.", "t-error");
  return ok;
}

/* ================================================
   COLLECT FORM DATA
   ================================================ */
function collectData() {
  return {
    id:   "FC-" + new Date().getFullYear() + "-" + (1000 + Math.floor(Math.random() * 9000)),
    org:  val("orgName"),
    email:val("orgEmail"),
    phone:val("managerPhone"),
    ben:  parseInt(val("benCount")),
    type: val("benType") || "General",
    addr: val("address") + (val("landmark") ? ", " + val("landmark") : "") + " – " + val("pincode"),
    pref: document.querySelector('input[name="foodPref"]:checked')?.value === "veg" ? "Veg" : "Any",
    pri:  document.querySelector('input[name="priority"]:checked')?.value || "normal",
    notes:val("specialNotes"),
    time: "Just now",
    status: "pending",
    mine: true
  };
}

/* ================================================
   STEP 1 — OPEN DELIVERY MODAL
   ================================================ */
function openDeliveryModal() {
  if (!validateForm()) return;
  pendingData = collectData();
  document.getElementById("deliveryEmail").value = "";
  clearErr("deliveryEmail");
  openOverlay("ov-delivery");
}

/* ================================================
   STEP 2 — SUBMIT DELIVERY EMAIL → CAPTCHA
   ================================================ */
function submitDeliveryEmail() {
  var emailEl = document.getElementById("deliveryEmail");
  var v = emailEl.value.trim();
  var rx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!v || !rx.test(v)) {
    emailEl.classList.add("err-input");
    document.getElementById("err-deliveryEmail").classList.add("visible");
    return;
  }
  emailEl.classList.remove("err-input");
  document.getElementById("err-deliveryEmail").classList.remove("visible");
  deliveryEmail = v;

  generatedCaptcha = makeCaptcha();
  document.getElementById("captchaDisplay").textContent = generatedCaptcha;
  document.getElementById("captchaInput").value = "";
  document.getElementById("err-captcha").classList.remove("visible");
  document.getElementById("captchaInput").classList.remove("err-input");

  closeOverlay("ov-delivery");
  openOverlay("ov-captcha");
  toast("Captcha sent to " + v, "t-success");
}

/* ================================================
   STEP 3 — VERIFY CAPTCHA → OTP
   ================================================ */
function verifyCaptcha() {
  var inp = document.getElementById("captchaInput");
  var entered = inp.value.trim().toUpperCase();
  if (!entered) {
    inp.classList.add("err-input");
    document.getElementById("err-captcha").classList.add("visible");
    return;
  }
  if (entered !== generatedCaptcha) {
    inp.classList.add("err-input");
    document.getElementById("err-captcha").classList.add("visible");
    toast("Wrong code — try again!", "t-error");
    // Refresh captcha
    generatedCaptcha = makeCaptcha();
    document.getElementById("captchaDisplay").textContent = generatedCaptcha;
    inp.value = "";
    return;
  }
  inp.classList.remove("err-input");
  document.getElementById("err-captcha").classList.remove("visible");

  generatedOtp = String(100000 + Math.floor(Math.random() * 900000));
  closeOverlay("ov-captcha");
  openOverlay("ov-otp");
  clearOtpBoxes();
  toast("OTP sent to " + deliveryEmail + "  [Demo OTP: " + generatedOtp + "]", "t-success");
  // Log for demo testing
  console.log("%c[DEMO] OTP: " + generatedOtp, "color:#27ae60;font-size:18px;font-weight:bold");
}

/* ================================================
   STEP 4 — VERIFY OTP → SUCCESS
   ================================================ */
function verifyOtp() {
  var boxes = document.querySelectorAll(".otp-box");
  var entered = Array.from(boxes).map(function(b) { return b.value.trim(); }).join("");
  if (entered.length < 6) {
    toast("Enter all 6 OTP digits.", "t-error");
    return;
  }
  if (entered !== generatedOtp) {
    toast("Incorrect OTP. Try again.", "t-error");
    clearOtpBoxes();
    return;
  }
  closeOverlay("ov-otp");

  // Save to localStorage
  var existing = JSON.parse(localStorage.getItem("fc_requests") || "[]");
  existing.unshift(pendingData);
  localStorage.setItem("fc_requests", JSON.stringify(existing));

  // Show success
  document.getElementById("refBox").innerHTML =
    "<strong>Ref:</strong> " + pendingData.id + "<br>" +
    "<strong>Org:</strong> " + esc(pendingData.org) + "<br>" +
    "<strong>Beneficiaries:</strong> " + pendingData.ben;
  openOverlay("ov-success");
  resetForm();
}

function resendOtp() {
  generatedOtp = String(100000 + Math.floor(Math.random() * 900000));
  clearOtpBoxes();
  toast("New OTP sent!  [Demo OTP: " + generatedOtp + "]", "t-success");
  console.log("%c[DEMO] New OTP: " + generatedOtp, "color:#27ae60;font-size:18px;font-weight:bold");
}

/* ================================================
   GO TO DASHBOARD
   ================================================ */
function goToDashboard() {
  closeOverlay("ov-success");
  showPage("dashboard");
}

/* ================================================
   DASHBOARD
   ================================================ */
function loadDashboard() {
  var mine = JSON.parse(localStorage.getItem("fc_requests") || "[]");

  var pending = mine.filter(function(r){ return r.status === "pending"; }).length;
  document.getElementById("stat-pending").textContent = pending;
  document.getElementById("stat-transit").textContent = 2;
  document.getElementById("stat-done").textContent    = 5 + mine.filter(function(r){ return r.status === "done"; }).length;
  var totalFed = mine.reduce(function(s,r){ return s + (r.ben||0); }, 0);
  document.getElementById("stat-fed").textContent = 340 + totalFed;

  var myGrid = document.getElementById("my-req-grid");
  if (mine.length === 0) {
    myGrid.innerHTML = '<div class="empty-state"><i class="fas fa-inbox"></i><p>No requests yet. Submit your first one!</p></div>';
  } else {
    myGrid.innerHTML = mine.map(function(r){ return buildCard(r, true); }).join("");
  }

  document.getElementById("comm-req-grid").innerHTML =
    communityData.map(function(r){ return buildCard(r, false); }).join("");
}

function buildCard(r, mine) {
  var statusMap = {
    pending: ["b-pending", "Pending"],
    transit: ["b-transit", "In Transit"],
    done:    ["b-done",    "Fulfilled"],
    urgent:  ["b-urgent",  "Urgent"]
  };
  var s = statusMap[r.status] || ["b-pending", "Pending"];
  var cardCls = r.status === "urgent" ? "rc-urgent" : r.status === "transit" ? "rc-transit" : r.status === "done" ? "rc-done" : "";
  return '<div class="req-card ' + cardCls + '">' +
    (mine ? '<span class="mine-tag">YOURS</span>' : '') +
    '<div class="rc-top">' +
      '<div><div class="rc-org">' + esc(r.org) + '</div><div class="rc-id">' + esc(r.id) + '</div></div>' +
      '<span class="badge ' + s[0] + '">' + s[1] + '</span>' +
    '</div>' +
    '<div class="rc-chips">' +
      '<span class="chip"><i class="fas fa-users"></i>' + r.ben + ' people</span>' +
      '<span class="chip"><i class="fas fa-map-marker-alt"></i>' + esc(r.addr.split(",")[0]) + '</span>' +
      '<span class="chip"><i class="fas fa-leaf"></i>' + esc(r.pref) + '</span>' +
      '<span class="chip"><i class="fas fa-clock"></i>' + esc(r.time) + '</span>' +
    '</div>' +
  '</div>';
}

/* ================================================
   OTP BOX KEYBOARD NAV
   ================================================ */
document.addEventListener("DOMContentLoaded", function() {
  var boxes = document.querySelectorAll(".otp-box");
  boxes.forEach(function(box, i) {
    box.addEventListener("input", function() {
      box.value = box.value.replace(/\D/g, "").slice(0, 1);
      box.classList.toggle("filled", !!box.value);
      if (box.value && i < boxes.length - 1) boxes[i + 1].focus();
    });
    box.addEventListener("keydown", function(e) {
      if (e.key === "Backspace" && !box.value && i > 0) boxes[i - 1].focus();
    });
  });

  // Default datetime
  var dt = new Date(Date.now() + 2 * 3600 * 1000);
  var local = new Date(dt.getTime() - dt.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
  var nb = document.getElementById("neededBy");
  if (nb) nb.value = local;
});

/* ================================================
   OVERLAY HELPERS
   ================================================ */
function openOverlay(id) {
  var el = document.getElementById(id);
  if (el) el.classList.add("open");
}
function closeOverlay(id) {
  var el = document.getElementById(id);
  if (el) el.classList.remove("open");
}
function backTo(from, to) {
  closeOverlay(from);
  openOverlay(to);
}

// Close on backdrop click
document.querySelectorAll(".overlay").forEach(function(ov) {
  ov.addEventListener("click", function(e) {
    if (e.target === ov && ov.id !== "ov-success") closeOverlay(ov.id);
  });
});

/* ================================================
   MISC HELPERS
   ================================================ */
function makeCaptcha() {
  var c = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  var r = "";
  for (var i = 0; i < 6; i++) r += c[Math.floor(Math.random() * c.length)];
  return r;
}

function clearOtpBoxes() {
  document.querySelectorAll(".otp-box").forEach(function(b) {
    b.value = "";
    b.classList.remove("filled");
  });
  var first = document.querySelector(".otp-box");
  if (first) setTimeout(function(){ first.focus(); }, 100);
}

function resetForm() {
  ["orgName","orgEmail","managerPhone","benCount","address","landmark","pincode","specialNotes"].forEach(function(id){
    var el = document.getElementById(id);
    if (el) el.value = "";
  });
  var bt = document.getElementById("benType");
  if (bt) bt.selectedIndex = 0;
  document.querySelectorAll('input[name="foodPref"], input[name="priority"]').forEach(function(r){ r.checked = false; });
  document.querySelectorAll(".choice-card").forEach(function(c){ c.classList.remove("selected"); });
}

var _toastTimer;
function toast(msg, type) {
  clearTimeout(_toastTimer);
  var el = document.getElementById("toast");
  el.textContent = msg;
  el.className = "toast show " + (type || "");
  _toastTimer = setTimeout(function(){ el.className = "toast"; }, 3500);
}

function esc(s) {
  return String(s || "").replace(/[&<>"']/g, function(m){
    return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m];
  });
}
