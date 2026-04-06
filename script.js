function submitForm() {
    const org = document.getElementById("orgName").value;
    const count = document.getElementById("count").value;
    const area = document.getElementById("area").value;
    const food = document.getElementById("foodPref").value;
    const urgency = document.getElementById("urgency").value;

    if (!org || !count || !area) {
        alert("Please fill all required fields!");
        return;
    }

    alert(
        "✅ Request Submitted!\n\n" +
        "Organisation: " + org + "\n" +
        "People: " + count + "\n" +
        "Location: " + area + "\n" +
        "Food: " + food + "\n" +
        "Urgency: " + urgency
    );
}
