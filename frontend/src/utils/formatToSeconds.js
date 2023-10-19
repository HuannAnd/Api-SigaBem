export default function formatToSeconds(time) {
  let newTime = time / 1000;
  newTime = newTime % 60;

  return newTime;
}
