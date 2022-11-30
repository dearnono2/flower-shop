// 메뉴 카테고리 영역
const category = document.querySelector('#category');
const a = category.querySelectorAll('#category > li > a');
const ul = category.querySelectorAll('ul');



// shop page - category list section
function categoryListNum (num) {
  a[num].addEventListener('click', (e) => {
    e.preventDefault();
    ul[num].classList.toggle('on');
  })
}

categoryListNum(0);
categoryListNum(1);



// 판매 상품 영역

const productsItemsWrap = document.querySelector('.products-items-wrap');



// dummy 이미지 주소
{/* <img src="https://via.placeholder.com/300" alt=""></img> */}

for(let i = 1; i <= 12; i++) {
  const randomPrice = Math.floor((Math.random() * 100) + 20);

  // 판매 상품 반복 
  const products = `                
  <div class="item">
    <div class="img">
      
      <img src="img/product${i}.jpg" alt="">
    </div>
    <div class="txt">
      <p><b>PRODUCT${i}</b></p>
      <p>Lorem ipsum dolor sit amet</p>
      <p class="price">${randomPrice}$</p>
    </div>
  </div>
  `;
  productsItemsWrap.insertAdjacentHTML('beforeend', products);
}