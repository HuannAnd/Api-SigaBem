const now = Date.now()
const minutesInMs = 1000 * 60

export default [
  { stage: 1, to: "Barra de jangada", time: now + 2 * minutesInMs, roadway: "BR-101", busNumber: 200, from: "Cajueiro Seco" },
  { stage: 2, to: 'TI Rio Doce ', time: now + 15 * minutesInMs, roadway: "BR-101", busNumber: 200, from: "CDU" },
  { stage: 3, to: "TI tancredo neves", time: now + 7 * minutesInMs, roadway: "BR-101", busNumber: 200, from: "Macaxeira" },
  { stage: 4, to: "Casa Amarela", time: now + 12 * minutesInMs, roadway: "BR-101", busNumber: 200, from: "CDU " },
  // { stage: 2, to: "CDU", time: now + 15 * minutesInMs },
  // { stage: 3, to: "Cais de Santa Rita", time: now + -10 * minutesInMs },
];