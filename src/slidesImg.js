import slide1 from "./assets/slide1.png";
import slide2 from "./assets/slide2.png";
import slide3 from "./assets/slide3.png";
import slide4 from "./assets/slide4.png";
import slide5 from "./assets/slide5.png";

const slides = document.querySelectorAll(".slide");
export default function () {
  let count = 0;
  slides.forEach((e) => {
    const slideImg = `slide${(count += 1)}`;
    console.log(slideImg);
  });
}
