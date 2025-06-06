// js/faq.js
document.addEventListener('DOMContentLoaded', () => {
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;

      // Close all other answers
      document.querySelectorAll('.faq-answer').forEach(el => {
        if (el !== answer) {
          el.classList.remove('visible');
        }
      });

      // Toggle current one
      answer.classList.toggle('visible');
    });
  });
});
