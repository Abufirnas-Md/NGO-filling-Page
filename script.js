const email = document.getElementById("email");
const captchaBox = document.getElementById("captchaBox");
const submitBtn = document.getElementById("submitBtn");

let captcha = generateCaptcha();

// EMAIL triggers CAPTCHA
email.addEventListener("blur", () => {
    if (email.value.includes("@")) {
        captchaBox.classList.remove("hidden");
        document.getElementById("captchaText").innerText = captcha;
    }
});

// CAPTCHA validation unlocks submit
document.getElementById("captchaInput").addEventListener("input", (e) => {
    if (e.target.value === captcha) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
});

// FORM SUBMIT
document.getElementById("requestForm").addEventListener("submit", (e) => {
    e.preventDefault();

    document.getElementById("otpBox").classList.remove("hidden");

    window.otp = Math.floor(100000 + Math.random() * 900000);
    alert("OTP: " + window.otp); // simulate
});

// OTP VERIFY
function verifyOTP() {
    const val = document.getElementById("otpInput").value;

    if (val == window.otp) {
        document.getElementById("otpBox").classList.add("hidden");
        document.getElementById("success").classList.remove("hidden");

        setTimeout(() => location.reload(), 2000);
    } else {
        alert("Invalid OTP");
    }
}

// CAPTCHA generator
function generateCaptcha() {
    return Math.random().toString(36).substring(2, 7);
}
