const years = [];

for (let position = 2000; position <= 2025; position++) {
  years.push(position);
}
console.log(years);

const words = [
  "confín.",
  "otro",
  "al",
  "uno",
  "del",
  "conocido",
  "mar",
  "todo",
  "en",
  "Temido,",
  "el",
  "bravura",
  "su",
  "por",
  "llaman,",
  "le",
  "pirata",
  "Bajel",
  "bergantín.",
  "velero",
  "un",
  "vuela",
  "sino",
  "mar",
  "el",
  "corta",
  "no",
  "vela,",
  "toda",
  "a",
  "popa",
  "en",
  "viento",
  "banda,",
  "por",
  "cañones",
  "diez",
  "Con",
];
words.reverse();
const wordsList = words.join(" ");
console.log(wordsList);

let examGrades: number[] = [];
examGrades = [6, 5.5, 8, 7, 4];
const examGradesOrdered = examGrades.toSorted(function (gradeA, gradeB) {
  return gradeA - gradeB;
});

const approvedExamGrades = examGrades.filter((examGrade) => examGrade >= 5);
console.log(`Las notas aprobadas son ${approvedExamGrades.join(", ")}.`);

const initialValue = 0;
const examsGradesAverage =
  examGrades.reduce((sum, examGrade) => sum + examGrade, initialValue) /
  examGrades.length;

console.log(`La nota media es ${examsGradesAverage}.`);

const highestExamGrade = examGradesOrdered.at(0);

const lowestExamGrade = examGradesOrdered.at(-1);

console.log(
  `La nota más alta es ${highestExamGrade} y la nota más baja es ${lowestExamGrade}.`
);
