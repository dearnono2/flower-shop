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


const main = document.querySelector('.faq-wrapper');

const faqLis = main.querySelectorAll('.faq-list');
const answers = main.querySelectorAll('.faq-list .answer');
const span = main.querySelectorAll('.faq-list span');



function faq () {
  faqLis.forEach((value, index) => {
    let faqList = faqLis[index];
    let answer = answers[index];
    faqList.addEventListener('click', (e) => {
      if(answer.classList.contains('on')) {
        answer.classList.remove('on');
        span[index].innerHTML = '+';
      } else {
        answer.classList.add('on');
        span[index].innerHTML = '-';
      }
    }) 
  })
}

faq();
