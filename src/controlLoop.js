export default function (e, type = "") {
  if (type === "avant") {
    if (+e === 0) return 4;
    return +e - 1;
  }
  if (+e === 4) return 0;
  return +e + 1;
}
