window.GAMES.push({
  id: 'vocabulary',
  icon: '📖',
  title: 'Vocabulary Quiz',
  description: 'Learn new words and their meanings',
  render(container) {
    runQuiz(container, {
      title: 'Vocabulary Quiz',
      questions: window.VOCABULARY_QUESTIONS,
      getQuestionText: (q) => q.question,
    });
  },
});
