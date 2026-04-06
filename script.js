// CAPTCHA
let captcha = Math.random().toString(36).substring(2, 7);
document.getElementById("captchaText").innerText = captcha;

// Location
function getLocation() {
    navigator.geolocation.getCurrentPosition(pos => {
        document.getElementById("location").value =
            pos.coords.latitude + ", " + pos.coords.longitude;
    });
}

// Form Submit
document.getElementById("requestForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const captchaInput = document.getElementById("captchaInput").value;

    if (captchaInput !== captcha) {
        alert("Invalid CAPTCHA");
        return;
    }

    // Show OTP section
    document.getElementById("otpSection").classList.remove("hidden");

    // Generate OTP
    window.generatedOTP = Math.floor(100000 + Math.random() * 900000);
    alert("OTP sent: " + window.generatedOTP); // simulate email
});

// Verify OTP
function verifyOTP() {
    const userOTP = document.getElementById("otpInput").value;

    if (userOTP == window.generatedOTP) {
        document.getElementById("otpSection").classList.add("hidden");
        document.getElementById("success").classList.remove("hidden");

        setTimeout(() => {
            location.reload();
        }, 2000);

    } else {
        alert("Invalid OTP");
    }
}
