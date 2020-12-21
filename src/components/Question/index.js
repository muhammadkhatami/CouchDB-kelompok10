const qBank = [
  {
    question: "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "099099",
  },
  {
    question: "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "093909",
  },
  {
    question: "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "009039",
  },
  {
    question: "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "090089",
  },
];

// n = 5 to export 5 Question
export default (n = qBank.length) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
