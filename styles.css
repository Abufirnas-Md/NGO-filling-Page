/* =============================================
   FoodConnect – NGO Portal  |  style.css
   Matches Donor Page aesthetic exactly
   ============================================= */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

/* ---------- CSS Variables (matching donor page palette) ---------- */
:root {
  --primary:       #e05a2b;
  --primary-dark:  #c0451a;
  --primary-light: #f7956d;
  --accent:        #f5a623;
  --bg:            #f4f6f9;
  --white:         #ffffff;
  --card-shadow:   0 4px 20px rgba(0,0,0,0.09);
  --card-radius:   16px;
  --text-dark:     #1e2a38;
  --text-mid:      #4a5568;
  --text-light:    #8898aa;
  --border:        #e2e8f0;
  --success:       #27ae60;
  --urgent-red:    #e74c3c;
  --normal-blue:   #2980b9;
  --badge-urgent:  #fdecea;
  --badge-pending: #fff3cd;
  --badge-done:    #d4edda;
  --badge-transit: #cce5ff;
  --header-h:      68px;
}

/* ---------- Reset ---------- */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: 'Poppins', sans-serif;
  background: var(--bg);
  color: var(--text-dark);
  min-height: 100vh;
}

/* =============================================
   HEADER  (matches donor page header exactly)
   ============================================= */
.site-header {
  position: sticky;
  top: 0;
  z-index: 200;
  background: linear-gradient(135deg, var(--primary) 0%, #c0451a 100%);
  height: var(--header-h);
  box-shadow: 0 3px 16px rgba(224,90,43,0.35);
}
.header-inner {
  max-width: 1100px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}
.logo-icon {
  color: var(--white);
  font-size: 1.55rem;
  background: rgba(255,255,255,0.18);
  width: 40px; height: 40px;
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
}
.logo-text {
  font-size: 1.45rem;
  font-weight: 700;
  color: var(--white);
  letter-spacing: -0.3px;
}
.header-nav {
  display: flex;
  gap: 8px;
}
.nav-link {
  display: flex;
  align-items: center;
  gap: 7px;
  color: rgba(255,255,255,0.82);
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 500;
  padding: 7px 16px;
  border-radius: 9px;
  transition: background 0.2s, color 0.2s;
}
.nav-link:hover,
.nav-link.active {
  background: rgba(255,255,255,0.22);
  color: var(--white);
}

/* =============================================
   PAGES
   ============================================= */
.page { display: none; }
.page.active { display: block; }

/* ---- Hero ---- */
.page-hero {
  background: linear-gradient(135deg, var(--primary) 0%, #c0451a 100%);
  color: var(--white);
  text-align: center;
  padding: 40px 24px 50px;
}
.page-hero h1 {
  font-size: 1.85rem;
  font-weight: 700;
  margin-bottom: 6px;
}
.page-hero p {
  font-size: 0.95rem;
  opacity: 0.88;
}

/* =============================================
   CARD CONTAINER
   ============================================= */
.card-container {
  max-width: 720px;
  margin: -24px auto 48px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* ---- Form Card (matches donor page box style) ---- */
.form-card {
  background: var(--white);
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
  overflow: hidden;
  transition: transform 0.2s;
}
.form-card:hover { transform: translateY(-2px); }

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 22px;
  background: linear-gradient(90deg, rgba(224,90,43,0.07) 0%, transparent 100%);
  border-bottom: 2px solid var(--border);
}
.step-badge {
  width: 32px; height: 32px;
  border-radius: 50%;
  background: var(--primary);
  color: var(--white);
  font-weight: 700;
  font-size: 0.9rem;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(224,90,43,0.35);
}
.card-header h2 {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-dark);
}

.card-body {
  padding: 22px 22px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* =============================================
   FIELD GROUPS  (matching donor page input style)
   ============================================= */
.field-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.field-group label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-mid);
  display: flex;
  align-items: center;
  gap: 6px;
}
.field-group label i { color: var(--primary); font-size: 0.82rem; }
.req { color: var(--urgent-red); margin-left: 1px; }

.field-group input[type="text"],
.field-group input[type="email"],
.field-group input[type="tel"],
.field-group input[type="number"],
.field-group input[type="datetime-local"],
.field-group select,
.field-group textarea {
  width: 100%;
  padding: 11px 14px;
  border: 1.8px solid var(--border);
  border-radius: 10px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  color: var(--text-dark);
  background: var(--white);
  transition: border-color 0.2s, box-shadow 0.2s;
  outline: none;
}
.field-group input:focus,
.field-group select:focus,
.field-group textarea:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(224,90,43,0.12);
}
.field-group input.error,
.field-group select.error {
  border-color: var(--urgent-red);
  box-shadow: 0 0 0 3px rgba(231,76,60,0.1);
}
.field-group textarea { resize: vertical; }
.field-group select { cursor: pointer; }

/* ---- Radio Cards (food pref) ---- */
.radio-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.radio-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 16px 12px;
  border: 2px solid var(--border);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--text-mid);
}
.radio-card input { display: none; }
.radio-icon { font-size: 1.6rem; }
.radio-card:hover { border-color: var(--primary-light); background: rgba(224,90,43,0.04); }
.radio-card.selected {
  border-color: var(--primary);
  background: rgba(224,90,43,0.07);
  color: var(--primary);
}

/* ---- Priority Cards ---- */
.priority-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.priority-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 18px 12px;
  border: 2px solid var(--border);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
}
.priority-card input { display: none; }
.priority-card i { font-size: 1.5rem; }
.priority-card strong { font-size: 0.95rem; }
.priority-card small { font-size: 0.75rem; color: var(--text-light); }
.priority-card.urgent i { color: var(--urgent-red); }
.priority-card.normal i { color: var(--normal-blue); }
.priority-card:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.09); }
.priority-card.selected.urgent {
  border-color: var(--urgent-red);
  background: rgba(231,76,60,0.07);
}
.priority-card.selected.normal {
  border-color: var(--normal-blue);
  background: rgba(41,128,185,0.07);
}

/* ---- Submit Area ---- */
.submit-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.btn-submit {
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: var(--white);
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0 4px 16px rgba(224,90,43,0.38);
  transition: transform 0.2s, box-shadow 0.2s;
}
.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 22px rgba(224,90,43,0.46);
}
.btn-submit:active { transform: translateY(0); }
.submit-hint {
  font-size: 0.78rem;
  color: var(--text-light);
}

/* =============================================
   DASHBOARD
   ============================================= */
.dashboard-container {
  max-width: 1100px;
  margin: -24px auto 48px;
  padding: 0 16px;
}

.stats-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-bottom: 28px;
}
.stat-box {
  background: var(--white);
  border-radius: 14px;
  box-shadow: var(--card-shadow);
  padding: 18px 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  transition: transform 0.2s;
}
.stat-box:hover { transform: translateY(-2px); }
.stat-box i {
  font-size: 1.6rem;
  color: var(--primary);
  background: rgba(224,90,43,0.1);
  width: 46px; height: 46px;
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.stat-box div { display: flex; flex-direction: column; }
.stat-box strong { font-size: 1.4rem; font-weight: 700; color: var(--text-dark); line-height: 1; }
.stat-box span { font-size: 0.78rem; color: var(--text-light); margin-top: 2px; }

.dash-section-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.dash-section-title i { color: var(--primary); }

.requests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  margin-bottom: 32px;
}

/* ---- Request Card ---- */
.req-card {
  background: var(--white);
  border-radius: 14px;
  box-shadow: var(--card-shadow);
  padding: 18px 18px;
  border-left: 4px solid var(--primary);
  transition: transform 0.2s;
  position: relative;
}
.req-card:hover { transform: translateY(-2px); }
.req-card.urgent-card { border-left-color: var(--urgent-red); }
.req-card.fulfilled-card { border-left-color: var(--success); opacity: 0.82; }
.req-card.transit-card { border-left-color: var(--normal-blue); }

.req-card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
}
.req-org-name {
  font-weight: 600;
  font-size: 0.97rem;
  color: var(--text-dark);
}
.req-ref {
  font-size: 0.72rem;
  color: var(--text-light);
  margin-top: 2px;
}
.status-badge {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  white-space: nowrap;
}
.status-pending  { background: var(--badge-pending); color: #856404; }
.status-transit  { background: var(--badge-transit); color: #004085; }
.status-fulfilled{ background: var(--badge-done);    color: #155724; }
.status-urgent   { background: var(--badge-urgent);  color: #721c24; }

.req-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}
.meta-chip {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.78rem;
  color: var(--text-mid);
  background: var(--bg);
  padding: 4px 10px;
  border-radius: 20px;
}
.meta-chip i { color: var(--primary); font-size: 0.72rem; }

.req-card-mine-tag {
  position: absolute;
  top: -1px; right: 14px;
  background: var(--primary);
  color: var(--white);
  font-size: 0.67rem;
  font-weight: 700;
  padding: 3px 9px;
  border-radius: 0 0 8px 8px;
  letter-spacing: 0.5px;
}

/* =============================================
   MODALS
   ============================================= */
.modal-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(15,20,30,0.55);
  backdrop-filter: blur(4px);
  z-index: 500;
  align-items: center;
  justify-content: center;
  padding: 16px;
}
.modal-overlay.open {
  display: flex;
  animation: fadeIn 0.2s ease;
}
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

.modal-box {
  background: var(--white);
  border-radius: 20px;
  box-shadow: 0 16px 60px rgba(0,0,0,0.22);
  padding: 32px 28px;
  width: 100%;
  max-width: 420px;
  animation: slideUp 0.25s ease;
  text-align: center;
}
@keyframes slideUp {
  from { transform: translateY(30px); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}

.modal-icon {
  width: 60px; height: 60px;
  border-radius: 50%;
  background: rgba(224,90,43,0.12);
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 14px;
  font-size: 1.6rem;
  color: var(--primary);
}
.captcha-icon { background: rgba(41,128,185,0.12); color: var(--normal-blue); }
.otp-icon { background: rgba(39,174,96,0.12); color: var(--success); }

.modal-box h3 {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 6px;
}
.modal-box p {
  font-size: 0.86rem;
  color: var(--text-mid);
  margin-bottom: 18px;
  line-height: 1.5;
}

.modal-box .field-group { text-align: left; margin-bottom: 4px; }

.modal-actions {
  display: flex;
  gap: 10px;
  margin-top: 18px;
}
.btn-cancel {
  flex: 1;
  padding: 11px;
  border: 1.8px solid var(--border);
  border-radius: 10px;
  background: transparent;
  font-family: 'Poppins', sans-serif;
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--text-mid);
  cursor: pointer;
  transition: all 0.2s;
}
.btn-cancel:hover { background: var(--bg); border-color: #c0c8d4; }
.btn-primary {
  flex: 2;
  padding: 11px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: var(--white);
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center; gap: 7px;
  box-shadow: 0 3px 12px rgba(224,90,43,0.32);
  transition: transform 0.2s, box-shadow 0.2s;
}
.btn-primary:hover { transform: translateY(-1px); box-shadow: 0 5px 18px rgba(224,90,43,0.42); }
.btn-primary.full-width { flex: 1; width: 100%; }

/* ---- CAPTCHA display ---- */
.captcha-display {
  font-family: 'Courier New', monospace;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 12px;
  color: var(--text-dark);
  background: var(--bg);
  border: 2px dashed var(--border);
  border-radius: 12px;
  padding: 14px 20px;
  text-align: center;
  margin-bottom: 14px;
  user-select: none;
  filter: blur(0);
  text-decoration: line-through wavy rgba(224,90,43,0.35);
}

/* ---- OTP Boxes ---- */
.otp-boxes {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-bottom: 12px;
}
.otp-digit {
  width: 48px; height: 56px;
  border: 2px solid var(--border);
  border-radius: 10px;
  font-size: 1.35rem;
  font-weight: 700;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  color: var(--text-dark);
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.otp-digit:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(224,90,43,0.14);
}
.otp-digit.filled { border-color: var(--primary); background: rgba(224,90,43,0.05); }

.resend-hint { font-size: 0.8rem; color: var(--text-light); margin-bottom: 4px; }
.resend-link { color: var(--primary); cursor: pointer; font-weight: 600; }
.resend-link:hover { text-decoration: underline; }

/* ---- Success Modal ---- */
.success-box { text-align: center; }
.success-circle {
  width: 72px; height: 72px;
  border-radius: 50%;
  background: rgba(39,174,96,0.12);
  color: var(--success);
  font-size: 2rem;
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 16px;
  animation: popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
@keyframes popIn {
  from { transform: scale(0); }
  to   { transform: scale(1); }
}
.success-ref {
  background: var(--bg);
  border-radius: 10px;
  padding: 10px 16px;
  font-size: 0.82rem;
  color: var(--text-mid);
  margin-bottom: 18px;
  font-family: 'Courier New', monospace;
}

/* =============================================
   TOAST
   ============================================= */
.toast {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%) translateY(80px);
  background: var(--text-dark);
  color: var(--white);
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 0.88rem;
  font-weight: 500;
  z-index: 999;
  transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s;
  opacity: 0;
  white-space: nowrap;
}
.toast.show {
  transform: translateX(-50%) translateY(0);
  opacity: 1;
}
.toast.success { background: var(--success); }
.toast.error   { background: var(--urgent-red); }

/* =============================================
   RESPONSIVE
   ============================================= */
@media (max-width: 680px) {
  .header-inner { padding: 0 14px; }
  .logo-text { font-size: 1.2rem; }
  .nav-link span { display: none; }
  .nav-link { padding: 7px 10px; }

  .stats-bar { grid-template-columns: repeat(2, 1fr); }
  .radio-group,
  .priority-group { grid-template-columns: 1fr; }
  .otp-digit { width: 40px; height: 50px; font-size: 1.15rem; }
  .captcha-display { font-size: 1.55rem; letter-spacing: 8px; }
  .card-body { padding: 16px; }
  .page-hero h1 { font-size: 1.45rem; }
}
@media (max-width: 400px) {
  .stats-bar { grid-template-columns: 1fr; }
}
