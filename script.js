function setUrgency(btn) {
  let buttons = document.querySelectorAll(".toggle button");
  buttons.forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}

function toggleChat() {
  let box = document.getElementById("chatBox");
  box.style.display = box.style.display === "block" ? "none" : "block";
}

function sendMessage() {
  let input = document.getElementById("userInput");
  let chat = document.getElementById("chatBody");

  if (input.value.trim() === "") return;

  chat.innerHTML += `<p><b>You:</b> ${input.value}</p>`;

  // Simple AI reply
  setTimeout(() => {
    chat.innerHTML += `<p><b>AI:</b> We will help you find food donors soon.</p>`;
    chat.scrollTop = chat.scrollHeight;
  }, 500);

  input.value = "";
}
