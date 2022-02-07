document.addEventListener('DOMContentLoaded', function(){
  const element = document.querySelector('.js-choice');
  const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  classNames: {
    flippedState: false,
  }
  });
});

