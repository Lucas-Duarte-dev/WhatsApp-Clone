const input = document.querySelector("#message");
const button = document.querySelector("#send");
const imgMicro = document.querySelector("#micro");

input.addEventListener("keydown", (e) => {
  const value = e.target.value;
  if (value !== "") {
    imgMicro.style.display = "none";
    button.style.display = "block";
  } else {
    imgMicro.style.display = "block";
    button.style.display = "none";
  }
});
