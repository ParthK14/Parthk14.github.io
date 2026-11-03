(() => {
  const carousel = document.querySelector('.flute-carousel');
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll('.flute-slide'));
  const dots = Array.from(carousel.querySelectorAll('[data-slide-to]'));
  const counter = carousel.querySelector('.flute-counter');
  const previous = carousel.querySelector('.flute-prev');
  const next = carousel.querySelector('.flute-next');
  let current = 0;
  let pointerStart = null;

  const show = (index) => {
    current = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === current;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
    });

    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === current;
      dot.classList.toggle('is-active', active);
      if (active) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });

    counter.textContent = `${current + 1} / ${slides.length}`;
  };

  previous.addEventListener('click', () => show(current - 1));
  next.addEventListener('click', () => show(current + 1));
  dots.forEach((dot) => dot.addEventListener('click', () => show(Number(dot.dataset.slideTo))));

  carousel.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      show(current - 1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      show(current + 1);
    }
  });

  carousel.addEventListener('pointerdown', (event) => {
    pointerStart = event.clientX;
  });

  carousel.addEventListener('pointerup', (event) => {
    if (pointerStart === null) return;
    const distance = event.clientX - pointerStart;
    pointerStart = null;
    if (Math.abs(distance) < 45) return;
    show(distance > 0 ? current - 1 : current + 1);
  });

  carousel.addEventListener('pointercancel', () => {
    pointerStart = null;
  });
})();
