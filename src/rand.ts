export default function (min = 1, max = 21) {
  return Math.floor(Math.random() * (max - min)) + min;
}
