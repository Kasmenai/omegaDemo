let list = document.querySelector('.header__list');
let toggler = document.querySelector('.header__toggle');
let body = document.body;

toggler.addEventListener('click', function() {
  toggler.classList.toggle('header__toggle--cross');
  toggler.classList.toggle('header__toggle--menu');
  list.classList.toggle('header__list--menuOpened');
  body.classList.toggle('page--menuOpened');
});

window.addEventListener('keydown', function(e) {
  if (e.keyCode === 27) {
    if (body.classList.contains('page--menuOpened')) {
      toggler.classList.add('header__toggle--menu');
      toggler.classList.remove('header__toggle--cross');
      list.classList.remove('header__list--menuOpened');
      body.classList.remove('page--menuOpened');
    }
  }
})

window.addEventListener('click', function(e) {
  if (e.target.classList.contains('page--menuOpened')) {
    toggler.classList.add('header__toggle--menu');
    toggler.classList.remove('header__toggle--cross');
    list.classList.remove('header__list--menuOpened');
    body.classList.remove('page--menuOpened');
  }
})
