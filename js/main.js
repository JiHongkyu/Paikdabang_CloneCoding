const carouselContainer = document.querySelector('.carousel_container');
const prevBtn = document.querySelector('.prev_btn');
const nextBtn = document.querySelector('.next_btn');
const familySite = document.querySelector('.family_site');
const familyMenu = document.querySelector('.family_menu');
const toTop = document.querySelector('.to_top');
const carouselLength = 3;
let currentLength = 0;
let debounceCheck;

prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);

// 브라우저 창의 크기
function getBrowserWidth() {
  return document.body.clientWidth;
}

// 이전 함수
function prev() {
  const browserWidth = getBrowserWidth();

  if (currentLength === 0) return;

  --currentLength;
  carouselContainer.style.transform = `translateX(${-(browserWidth * currentLength)}px)`;
  carouselContainer.style.transition = 'all 1s ease-in-out';
}

// 다음 함수
function next() {
  const browserWidth = getBrowserWidth();

  if (currentLength >= carouselLength) return;

  ++currentLength;
  carouselContainer.style.transform = `translateX(${-(browserWidth * currentLength)}px)`;
  carouselContainer.style.transition = 'all 1s ease-in-out';
}

// Debounce 함수
function browserDebounce() {
  clearTimeout(debounceCheck);

  debounceCheck = setTimeout(() => {
    const browserWidth = getBrowserWidth();

    carouselContainer.style.transform = `translateX(${-(browserWidth * currentLength)}px)`;
    carouselContainer.style.transition = 'none';
  }, 100);
}

// 브라우저 창의 크기가 변할 때 캐러셀 크기 반응
window.addEventListener('resize', browserDebounce);

// 하단 family사이트 toggle
familySite.addEventListener('click', function () {
  familyMenu.classList.toggle('active');
});

// to-top 기능
toTop.addEventListener('click', function () {
  document.body.scrollIntoView({ behavior: 'smooth' });
});
