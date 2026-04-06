// Toggle buttons
const toggles = document.querySelectorAll(".toggle");

toggles.forEach(btn => {
    btn.addEventListener("click", () => {
        toggles.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});

// Form submit
document.getElementById("foodForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const org = document.getElementById("orgName").value;
    const count = document.getElementById("count").value;
    const area = document.getElementById("area").value;

    if (!org || !count || !area) {
        alert("Please fill all fields!");
        return;
    }

    alert("✅ Request Submitted!");

    // Clear form
    this.reset();
});
