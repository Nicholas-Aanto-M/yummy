let showstatus = 0;
const hamber = document.querySelector("#hamber-id");
hamber.addEventListener("click", function () {
  console.log("hamber working");
  showMenu();
});

const hamberClose = document.querySelector("#hamberClose-icon-id");
hamberClose.classList.add("d-none");
const Movform = document.querySelector("#Nav-InnerContainer-Menu-id");
const hambericon = document.querySelector("#hamber-icon-id");

function showMenu() {
  if (showstatus == 0) {
    Movform.classList.add("d-block");
    hambericon.classList.add("d-none");
    hamberClose.classList.remove("d-none");

    showstatus = 1;
  } else if (showstatus == 1) {
    Movform.classList.remove("d-block");
    hambericon.classList.remove("d-none");
    hamberClose.classList.add("d-none");

    showstatus = 0;
  }
}
