import { slides } from "./addSlidesImg";
import { activeSlide } from "./activeSlide";
import circleButtons from "./circleButtons";

export default function getToSlide(e = "") {
  if (slides[activeSlide.getActive()].classList.contains("visible")) {
    slides[activeSlide.getActive()].classList.toggle("visible");
    circleButtons(activeSlide.getActive());
  }
  activeSlide.setActive(e);
  slides[activeSlide.getActive()].classList.toggle("visible");
  circleButtons(activeSlide.getActive());
}
