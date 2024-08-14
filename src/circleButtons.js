import getToSlide from "./getToSlide";

const circleButtons = document.querySelectorAll(".circleButton");
circleButtons.forEach((e) => {
  e.addEventListener("click", () => getToSlide(e.id.slice(-1)));
});

export default function (e) {
  circleButtons[e].classList.toggle("full");
}
