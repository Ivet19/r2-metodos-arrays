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
examGrades = [6, 5.5, 8, 7];
const examGradesOrdered = examGrades.toSorted(function (a, b) {
  return a - b;
});

const examGradesApproved = examGrades.filter((examGrade) => examGrade >= 5);
console.log(`Las notas aprobadas son ${examGradesApproved.join(", ")}.`);

const initialValue = 0;
const examsGradesAverage =
  examGrades.reduce((sum, examGrade) => sum + examGrade, initialValue) /
  examGrades.length;

console.log(`La nota media es ${examsGradesAverage}.`);

let highestExamGrade = 0;
for (let examGrade of examGrades) {
  if (highestExamGrade < examGrade) {
    highestExamGrade = examGrade;
  }
}
let lowestExamGrade = examGradesOrdered[0];
for (let examGrade of examGradesOrdered) {
  if (lowestExamGrade > examGrade) {
    lowestExamGrade = examGrade;
  }
}
console.log(
  `La nota más alta es ${highestExamGrade} y la nota más baja es ${lowestExamGrade}.`
);
