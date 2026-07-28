window.GAMES.push({
  id: 'grammar',
  icon: '✍️',
  title: 'Grammar Practice',
  description: 'Fix sentences and pick the right words',
  render(container) {
    runQuiz(container, {
      title: 'Grammar Practice',
      questions: window.GRAMMAR_QUESTIONS,
      getQuestionText: (q) => q.question,
    });
  },
});
