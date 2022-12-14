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


const form = document.querySelector('#member');
const btnSubmit = form.querySelector('input[type=submit]'); // 보통은 속성을 잡기 보단 id명을 부여한다.

btnSubmit.addEventListener('click', (e) => {

  // isTxt 함수의 반환값이 false라면 전송중지. true면 통과.
  if(!isTxt('userid', 5)) e.preventDefault();

  if(!isTxt('comments', 20)) e.preventDefault();

  if(!isEmail('email')) e.preventDefault();

  if(!isCheck('gender')) e.preventDefault();

  if(!isCheck('interests')) e.preventDefault();

  if(!isSelect('age')) e.preventDefault();

  if(!isPwd('pwd1', 'pwd2', 5)) e.preventDefault();

})

// type이 text인 form요소 인증 함수
// 첫번째 인수로는 name에 적은 값을 받아주고, 두번째 인수는 글자수를 전달.
function isTxt(id, len) {

  // 만약 입력받은 글자수가 있는지 물어보고, 없으면 디폴트값을 지정. = 예외처리
  if(len === undefined) len = 5;

  
  let input = form.querySelector(`[name=${id}]`);

  let txt = input.value;

  if(txt.length >= len) {

    const errMsgs = input.closest('td').querySelectorAll('p');

    if(errMsgs.length > 0) input.closest('td').querySelector('p').remove();
    return true;

  } else {

    const errMsgs = input.closest('td').querySelectorAll('p');
    
    if(errMsgs.length > 0) input.closest('td').querySelector('p').remove();

    // p태그로 에러메세지를 생성하여 해당 input요소의 부모 td의 뒤쪽에 삽입.
    const errMsg = document.createElement('p');
    errMsg.append(`please fill in box at least ${len} character`);
    input.closest('td').append(errMsg);
    return false;
  }
}


function isEmail(el) {

  let input = form.querySelector(`[name=${el}]`);

  let txt = input.value;

  // 정규식 표현으로 @의 유무를 판단.
  if(/@/.test(txt)) {

    const errMsgs = input.closest('td').querySelectorAll('p');
    if(errMsgs.length > 0) input.closest('td').querySelector('p').remove();
    return true;
  } else {
    const errMsgs = input.closest('td').querySelectorAll('p');
    if(errMsgs.length > 0) input.closest('td').querySelector('p').remove();

    const errMsg = document.createElement('p');
    errMsg.append('The email address must include @');
    input.closest('td').append(errMsg);
    return false;
  }
}

function isCheck(el) {
  let inputs = form.querySelectorAll(`[name=${el}]`);

  let isCheck = false;

  for(let el of inputs) {
    if(el.checked) isCheck = true;
  }

  if(isCheck) {
    const errMsgs = inputs[0].closest('td').querySelectorAll('p');
    if(errMsgs.length > 0) inputs[0].closest('td').querySelector('p').remove();
    return true;
  } else {
    const errMsgs = inputs[0].closest('td').querySelectorAll('p');
    if(errMsgs.length > 0) inputs[0].closest('td').querySelector('p').remove();

    // p태그로 에러메세지를 생성하여 해당 input요소의 부모 td의 뒤쪽에 삽입.
    const errMsg = document.createElement('p');
    errMsg.append("Please select something");
    inputs[0].closest('td').append(errMsg);
    return false;
  }
}


function isSelect(el) {
  let sel = form.querySelector(`[name=${el}]`);
  let sel_index = sel.options.selectedIndex;
  let value = sel[sel_index].value;

  if(value !== '') {
    const errMsgs = sel.closest('td').querySelectorAll('p');
    if(errMsgs.length > 0) sel.closest('td').querySelector('p').remove();
    return true;
  } else {
    const errMsgs = sel.closest('td').querySelectorAll('p');
    if(errMsgs.length > 0) sel.closest('td').querySelector('p').remove();

    const errMsg = document.createElement('p');
    errMsg.append('Please select something');
    sel.closest('td').append(errMsg);
    return false;
  }

}





function isPwd(name1,name2,len) {
  let pwd1 = form.querySelector(`[name=${name1}]`);
  let pwd2 = form.querySelector(`[name=${name2}]`);
  let pwd1_value = pwd1.value;
  let pwd2_value = pwd2.value;

  // 숫자, 영문, 특수문자 조건을 정규식 표현으로 변수에 저장.
  const num = /[0-9]/;
  const eng = /[a-zA-Z]/;
  const spc = /[~!@#$%^&*()_+?<>]/; 

  // 두개의 비밀 번호가 같고
  // 비밀번호의 글자 수가 len개 이상이고
  // 비밀번호에 숫자, 영문, 특수문자가 포함되어 있다면?

  if(pwd1_value === pwd2_value && pwd1_value.length >= len && num.test(pwd1_value) && eng.test(pwd1_value) && spc.test(pwd1_value)) {
    const errMsgs = input.closest('td').querySelectorAll('p');
    if(errMsgs.length > 0) input.closest('td').querySelector('p').remove();
    return true;

  } else {
    const errMsgs = pwd1.closest('td').querySelectorAll('p');
    if(errMsgs.length > 0) pwd1.closest('td').querySelector('p').remove();

    const errMsg = document.createElement('p');
    errMsg.append(`Password must has at least ${len} characters that include at least 1 number, and 1 special character in (!@#$%^&*)`);
    pwd1.closest('td').append(errMsg);
    return false;
  
  }

}