const qBank = [
  {
    question: "How build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "099099",
  },
  {
    question: "How build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "093909",
  },
  {
    question: "How build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "009039",
  },
  {
    question: "How build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "090089",
  },
];

// n = 5 to export 5 Question
export default (n = qBank.length) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
