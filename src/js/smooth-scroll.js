document.addEventListener('DOMContentLoaded', function () {
  // Получаем ссылки в меню
  const menuLinks = document.querySelectorAll('.menu__link');

  // Функция для плавного скроллинга
  function smoothScroll(target) {
    const scrollTarget = document.querySelector(target);
    const targetPosition = scrollTarget.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800; // Время анимации в миллисекундах
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Функция для плавности анимации (можно изменить алгоритм анимации)
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  // Добавляем обработчик клика для каждой ссылки
  menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      smoothScroll(href);
    });
  });
});
