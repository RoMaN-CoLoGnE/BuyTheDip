const refs = {
  header: document.querySelector('.header'),
  footer: document.querySelector('.footer'),
  scrollTop: document.querySelector('#scrollTop'),
  scrollDown: document.querySelector('#scrollDown'),
};

window.addEventListener('scroll', showArrows);

refs.scrollTop.addEventListener('click', function () {
  scrollTo(refs.header);
});

refs.scrollDown.addEventListener('click', function () {
  scrollTo(refs.footer);
});

function scrollTo(element) {
  if (element) {
    window.scroll({
      left: 0,
      top: element.offsetTop,
      behavior: 'smooth',
    });
  } else {
    console.log('Element to scroll to was not found');
  }
}

function showArrows() {
  let viewportHeight = document.documentElement.clientHeight;
  let htmlHeight = document.documentElement.scrollHeight;
  let heightLimiter = htmlHeight - viewportHeight; // уменьшим значение для лучшей работы

  if (window.scrollY >= heightLimiter) {
    refs.scrollDown.classList.remove('scroll--show');
  } else {
    refs.scrollDown.classList.add('scroll--show');
  }

  if (window.scrollY <= viewportHeight / 2) {
    refs.scrollTop.classList.remove('scroll--show');
  } else {
    refs.scrollTop.classList.add('scroll--show');
  }

  if (window.scrollY >= heightLimiter - 10) {
    // добавим буфер к нижнему порогу
    refs.scrollDown.style.display = 'none'; // скрываем кнопку scrollDown
  } else {
    refs.scrollDown.style.display = 'block'; // показываем кнопку scrollDown
  }
}

showArrows(); // Initial call to the function to show or hide buttons based on the initial page position
