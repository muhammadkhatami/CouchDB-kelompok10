const questionBank = [
  {
    question: "How did Spider-Man get his powers?",
    answers: [
      "Military experiment gone awry",
      "Born with them",
      "Woke up with them after a strange dream",
      "Bitten by a radioactive spider",
    ],
    correct: "Bitten by a radioactive spider",
    questionId: "099099",
  },
  {
    question: "How many rings are there in the Olympic symbol?",
    answers: ["5", "7", "4", "9"],
    correct: "5",
    questionId: "093909",
  },
  {
    question: "How many ribs are in the human body?",
    answers: ["16", "24", "19", "29"],
    correct: "24",
    questionId: "009039",
  },
  {
    question: "Which city is known as the City of Love?",
    answers: ["Rome", "Barcelona", "New York City", "Paris"],
    correct: "Paris",
    questionId: "090089",
  },
  {
    question:
      "In which decade does the Netflix series Stranger Things take place?",
    answers: ["70s", "80s", "90s", "Early 2000s"],
    correct: "80s",
    questionId: "090909",
  },
];

// n = 5 to export 5 Question
export default (n = questionBank.length) =>
  Promise.resolve(questionBank.sort(() => 0.5 - Math.random()).slice(0, n));
