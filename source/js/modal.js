const button = document.querySelector("#modal-button");
const modal = document.querySelector("#modal");
const body = document.querySelector(".page-body");
const closeButton = document.querySelector("#close-button");

button.addEventListener("click", (event) => {
  event.preventDefault();
  button.classList.toggle("button-modal__open");
  modal.classList.toggle("modal-window__open");
  body.classList.add("page-body__scroll");
})

document.addEventListener("keydown", (evt) => {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-window__open")) {
      evt.preventDefault();
      modal.classList.remove("modal-window__open");
      body.classList.remove("page-body__scroll");
    }
  }
});

closeButton.addEventListener("click", () => {
  if (modal.classList.contains("modal-window__open")) {
    modal.classList.remove("modal-window__open");
    body.classList.remove("page-body__scroll");
  }
})

document.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('modal-window__open');
    body.classList.remove("page-body__scroll");
  }
});
