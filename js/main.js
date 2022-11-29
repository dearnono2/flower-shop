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



/* section - banner 영역 */
const banner = document.querySelector('#banner');
const wrapitems = banner.querySelector('.wrap');
const item = banner.querySelectorAll('.item');


window.addEventListener('scroll', (e) => {
  // console.log(window.scrollY);
  if(window.scrollY > 1750) {
    item[0].classList.add('show');
  } else if (window.scrollY > 2450) {
    item[0].classList.remove('show');
  }

  if(window.scrollY > 2150) {
    item[1].classList.add('show');
  } else if (window.scrollY > 2850) {
    item[1].classList.remove('show');
  }

  if(window.scrollY > 2600) {
    item[2].classList.add('show');
  } else if (window.scrollY > 3300) {
    item[2].classList.remove('show');
  }
})

/* // section - banner 영역 */