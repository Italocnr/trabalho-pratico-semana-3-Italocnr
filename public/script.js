const manaButtons = document.querySelectorAll('.mana');

manaButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('checked');
  });
});