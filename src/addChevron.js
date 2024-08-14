import Chevron from "./assets/right-thin-chevron.svg";
import next from "./next";

const arrowButtons = document.querySelectorAll(".arrowButton");

export default function () {
  arrowButtons.forEach((e) => {
    if (e.id === "leftChevron") {
      e.addEventListener("click", function () {
        next("avant"), console.log("avant");
      });
    } else {
      e.addEventListener("click", function () {
        next(), console.log("apres");
      });
    }
    const chevron = new Image();
    chevron.src = Chevron;
    if (e.id === "leftChevron")
      chevron.style.setProperty("transform", "rotate(180deg)");
    e.appendChild(chevron);
  });
}
