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
