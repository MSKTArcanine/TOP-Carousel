import { slidesImages } from "./assetsGroup";

export const slides = document.querySelectorAll(".slide");
export default function () {
  let count = 0;
  slides.forEach((e) => {
    const img = new Image();
    img.src = slidesImages[count];
    count += 1;
    e.appendChild(img);
  });
}
