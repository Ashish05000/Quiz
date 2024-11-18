export const quizRules = [
    {
      title: "10-Second Timer",
      rules: [
        "Each question comes with a 10-second timer.",
        "If you don’t answer within the time limit, the app will automatically move to the next question.",
      ],
    },
    {
      title: "Manual Navigation",
      rules: [
        "You can navigate to the next question manually before the timer expires.",
        "Use the 'Next' button to move ahead if you’re ready before the timer runs out.",
      ],
    },
    {
      title: "Final Score and Performance Message",
      rules: [
        "After all questions are answered, your final score will be displayed.",
        "Based on your performance, you will recieve a personalised message:",
        [
          "Great job!: If you score above 80%.",
          "Well done!: If you score between 60% and 80%.",
          "Keep practicing!: If you score below 60%.",
        ],
      ],
    },
  ];