import Chevron from "./assets/right-thin-chevron.svg";

const arrowButtons = document.querySelectorAll(".arrowButton");

export default function () {
  arrowButtons.forEach((e) => {
    const chevron = new Image();
    chevron.src = Chevron;
    if (e.id === "leftChevron")
      chevron.style.setProperty("transform", "rotate(180deg)");
    e.appendChild(chevron);
  });
}
