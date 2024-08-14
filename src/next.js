import getToSlide from "./getToSlide";
import { activeSlide } from "./activeSlide";
import controlLoop from "./controlLoop";

export default function (type = "") {
  console.log(activeSlide.getActive(), "debut de n ext");
  getToSlide(controlLoop(activeSlide.getActive(), type)); // Atteint 4 => la faire passer à 0
  console.log(activeSlide.getActive(), "fin de next");
}
