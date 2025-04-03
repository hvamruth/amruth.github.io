const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let slideIndex = 0;

nextBtn.addEventListener('click', () => {
  slideIndex++;
  updateSlider();
});

prevBtn.addEventListener('click', () => {
  slideIndex--;
  updateSlider();
});

function updateSlider() {
  const slideWidth = document.querySelector('.slider img').clientWidth;
  slider.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}
