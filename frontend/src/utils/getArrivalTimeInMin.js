import formatToMinutes from "./formatToMinutes"

export default function getArrivalTimeInMin(time) {
  const differenceBetween = formatToMinutes(time) - formatToMinutes(Date.now())
  .toFixed(0)
  return parseInt(differenceBetween)
}