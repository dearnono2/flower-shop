/* section - header - menubar 영역 */

const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo");

// 이벤트 바인딩

// btnCall을 클릭할 때
btnCall.onclick = function(e) {
  // 링크 이동 금지
  e.preventDefault();

  // btnCall에 on이 있으면 제거하고, 없으면 추가
  btnCall.classList.toggle("on");
  // menuMo에 on이 있으면 제거하고, 없으면 추가
  menuMo.classList.toggle("on");
}

/* // section - header - menubar 영역 */



/* section - new arrival 영역 */

const wrap = document.querySelector('.slider-wrapper');
const wrapImgs = wrap.querySelector('.wrap-imgs');
const articles = wrap.querySelectorAll('article');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


let len = articles.length;

let enableClick = true;

init();

prev.addEventListener('click', (e) => {
  e.preventDefault();

  if(enableClick) {
    enableClick = false;

    prevSlide();
  }
})

next.addEventListener('click', (e) => {
  e.preventDefault();

  if(enableClick) {
    enableClick = false;

    nextSlide();
  }
})

// 초기화 함수
function init() {
  wrapImgs.style.left = '-300px';

  wrapImgs.prepend(wrapImgs.lastElementChild);

  wrapImgs.style.width = `${300 * len}px`;
  articles.forEach((el) => {
    el.style.width = `${1900 / len}px`;
  })
}

function prevSlide() {
  new Anim(wrapImgs, {
    prop : 'left',
    value: 0,
    duration : 500,
    callback : () => {
      wrapImgs.style.left = '-300px';
      wrapImgs.prepend(wrapImgs.lastElementChild);
      enableClick = true;
    }
  })
}

function nextSlide() {
  new Anim(wrapImgs, {
    prop : 'left',
    value: -600,
    duration : 500,
    callback : () => {
      wrapImgs.style.left = '-300px';
      wrapImgs.append(wrapImgs.firstElementChild);
      enableClick = true;
    }
  })
}

/* // section - new arrival 영역 */



/* section - banner 영역 */
const banner = document.querySelector('#banner');
const wrapitems = banner.querySelector('.wrap');
const item = banner.querySelectorAll('.item');


window.addEventListener('scroll', (e) => {
  // console.log(window.scrollY);
  if(window.scrollY > 2600) {
    item[0].classList.add('show');
  } else if (window.scrollY > 2500) {
    item[0].classList.remove('show');
  }

  if(window.scrollY > 3100) {
    item[1].classList.add('show');
  } else if (window.scrollY > 2800) {
    item[1].classList.remove('show');
  }

  if(window.scrollY > 3700) {
    item[2].classList.add('show');
  } else if (window.scrollY > 3400) {
    item[2].classList.remove('show');
  }
})

/* // section - banner 영역 */
