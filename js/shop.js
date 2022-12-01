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

// 메뉴 카테고리 영역
const category = document.querySelector('#category');
const a = category.querySelectorAll('#category > li > a');
const ul = category.querySelectorAll('ul');
// 판매 상품 영역
const productsItemsWrap = document.querySelector('.products-items-wrap');

// 폼 셀렉터 요소
const ShopSelector = document.querySelector("#array");



// shop page - category list section
function categoryListNum (num) {
  a[num].addEventListener('click', (e) => {
    e.preventDefault();
    ul[num].classList.toggle('on');
  })
}

categoryListNum(0);
categoryListNum(1);


// 상품 목록 배열
let products = [
  { id: 0, title: 'Angel Shower', price: 80 },
  { id: 1, title: 'Angel Shower Basket', price: 72 },
  { id: 2, title: 'Heaven And Earth', price: 88 },
  { id: 3, title: 'Juliet Garden Roses', price: 105 },
  { id: 4, title: 'Love & Happiness Kit', price: 80 },
  { id: 5, title: 'Celestial', price: 140 },
  { id: 6, title: 'From The Garden', price: 90 },
  { id: 7, title: 'Victoria Falls', price: 68 },
  { id: 8, title: 'Cream Deluxe', price: 70 },
  { id: 9, title: 'Cream & Neutral', price: 128 },
  { id: 10, title: 'Blue Dream', price: 150 },
  { id: 11, title: 'Darling Clementine', price: 115 },
]





// 초기 배열 (기본값)
function ProductNewest() {
  while (productsItemsWrap.hasChildNodes()) {
    productsItemsWrap.removeChild(productsItemsWrap.firstChild);
  }
  const NewProducts = [...products];
  for (i = 0; i < NewProducts.length; i++) {
    const product = `                
    <div class="item">
      <div class="img">
        <img src="img/product${NewProducts[i].id}.jpg" alt="">
      </div>
      <div class="txt">
        <p class="title">${NewProducts[i].title}</p>
        <p>Lorem ipsum dolor sit amet</p>
        <p class="price">${NewProducts[i].price}$</p>
      </div>
    </div>
    `;
    productsItemsWrap.insertAdjacentHTML("beforeend", product);
  }
}

ProductNewest()


// 오름차순
function ProductSortUp() {
  while (productsItemsWrap.hasChildNodes()) {
    productsItemsWrap.removeChild(productsItemsWrap.firstChild);
  }
  const NewProducts = [...products];
  NewProducts.sort(function (a, b) {
    return a.price - b.price;
  });
  for (i = 0; i < NewProducts.length; i++) {
    const product = `                
    <div class="item">
      <div class="img">
        <img src="img/product${NewProducts[i].id}.jpg" alt="">
      </div>
      <div class="txt">
        <p class="title">${NewProducts[i].title}</p>
        <p>Lorem ipsum dolor sit amet</p>
        <p class="price">${NewProducts[i].price}$</p>
      </div>
    </div>
    `;
    productsItemsWrap.insertAdjacentHTML("beforeend", product);
  }
}

// 내림차순
function ProductSortDown() {
  while (productsItemsWrap.hasChildNodes()) {
    productsItemsWrap.removeChild(productsItemsWrap.firstChild);
  }
  const NewProducts = [...products];
  NewProducts.sort(function (a, b) {
    return b.price - a.price;
  });
  for (i = 0; i < NewProducts.length; i++) {
    const product = `                
    <div class="item">
      <div class="img">
        <img src="img/product${NewProducts[i].id}.jpg" alt="">
      </div>
      <div class="txt">
        <p class="title">${NewProducts[i].title}</p>
        <p>Lorem ipsum dolor sit amet</p>
        <p class="price">${NewProducts[i].price}$</p>
      </div>
    </div>
    `;
    productsItemsWrap.insertAdjacentHTML("beforeend", product);
  }
}

// form 요소 셀렉트
ShopSelector.addEventListener("change", (e) => {
  if (e.target.value == "price-row-high") {
    ProductSortUp();
  } else if (e.target.value == "price-high-row") {
    ProductSortDown();
  } else if (e.target.value == "newest") {
    ProductNewest();
  } else {
    ProductNewest();
  }
});



// dummy 이미지 주소
{/* <img src="https://via.placeholder.com/300" alt=""></img> */}

// for(let i = 1; i <= 12; i++) {
//   const randomPrice = Math.floor((Math.random() * 100) + 20);

//   // 판매 상품 반복 
//   const product = `                
//   <div class="item">
//     <div class="img">
//       <img src="img/product${i}.jpg" alt="">
//     </div>
//     <div class="txt">
//       <p class="title">PRODUCT${i}</p>
//       <p>Lorem ipsum dolor sit amet</p>
//       <p class="price">${randomPrice}$</p>
//     </div>
//   </div>
//   `;
//   productsItemsWrap.insertAdjacentHTML('beforeend', product);

// }