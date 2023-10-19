const now = Date.now()
const minutesInMs = 1000 * 60

export default [
  { stage: 1, to: "Barra de jangada", time: now + 2 * minutesInMs, roadway: "BR-101", busNumber: 200, from: "Cajueiro Seco" },
  { stage: 2, to: "Barra de jangada", time: now + 2 * minutesInMs, roadway: "BR-101", busNumber: 200, from: "Cajueiro Seco" },
  { stage: 3, to: "Barra de jangada", time: now + 2 * minutesInMs, roadway: "BR-101", busNumber: 200, from: "Cajueiro Seco" },
  { stage: 4, to: "Barra de jangada", time: now + 2 * minutesInMs, roadway: "BR-101", busNumber: 200, from: "Cajueiro Seco" },
  // { stage: 2, to: "CDU", time: now + 15 * minutesInMs },
  // { stage: 3, to: "Cais de Santa Rita", time: now + -10 * minutesInMs },
];