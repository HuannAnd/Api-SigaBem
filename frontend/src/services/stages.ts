const now = Date.now()
const minutesInMs = 1000 * 60

export default [
  { stage: 1, to: "Barra de jangada", time: now + 20 * minutesInMs },
  { stage: 2, to: "CDU", time: now + 15 * minutesInMs },
  { stage: 3, to: "Cais de Santa Rita", time: now + -10 * minutesInMs },
];