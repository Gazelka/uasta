// js/faq.js
document.addEventListener('DOMContentLoaded', () => {
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;

      // Close other answers if open
      questions.forEach(btn => {
        if (btn !== button) {
          btn.classList.remove('active');
          btn.nextElementSibling.style.maxHeight = null;
        }
      });

      // Toggle current answer
      button.classList.toggle('active');
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});
