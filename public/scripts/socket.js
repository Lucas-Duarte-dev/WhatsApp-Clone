const form = document.querySelector("#form");
const chat = document.querySelector(".content");

const socket = io();

function renderMessage(mess) {
  chat.innerHTML += `<div class="message">${mess.message} </div>`;
}

socket.on("receivedMessage", (message) => {
  renderMessage(message);
});

socket.on("previousMessage", (messages) => {
  for (mesage of messages) {
    renderMessage(mesage);
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.querySelector("#message").value;

  let ObjectMessage = {
    message: input,
  };

  socket.emit("sendMessage", ObjectMessage);
  renderMessage(ObjectMessage);

  const id = socket.id;

  console.log(id);
  // Terminar de verificar o usuário que está mandando mensagem
});

chat.addEventListener("scroll", (e) => {
  const maxScrollY = e.target.offsetHeight;

  const ScreenHeight = e.target.scrollHeight;

  let finalScreen = ScreenHeight - maxScrollY;

  chat.scrollBy(0, finalScreen);
});
