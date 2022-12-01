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

// about member change 부분

const memberOne = document.querySelector('#member1');
const memberThree = document.querySelector('#member3');

function mouseover(member, num) {
  member.setAttribute('src', `img/about${num}.jpg`);
}

function mouseleave(member, num) {
  member.setAttribute('src', `img/about${num}.jpg`);
}


// youtube api 불러오기

const vidList = document.querySelector('.vidList');
const key = 'AIzaSyCtN1lqIIdi7ibHkYVCtVtP9vA4oz8j8n8';
const playList = 'PLlXUbM-Wv86VRX4kK09elGF4vtrv2Axce';
const num = 3; // 재생목록의 불러올 비디오 갯수

const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playList}&maxResults=${num}`;

fetch(url)
    .then(data => {
      return data.json();
    })
    .then(json => {
      let items = json.items;
      let result = '';


      items.map((item) => {

        let title = item.snippet.title;
        if(title.length >= 30) {
          title = title.substr(0, 30)
        }

        let con = item.snippet.description;
        if(con.length >= 100) {
          con = con.substr(0, 100) + '...';
        }
        
        // 유튜브 영상 재생목록 추가 날짜
        // let date = item.snippet.publishedAt;
        // date = date.split('T')[0];

        result += `
          <article>
            <a href="${item.snippet.resourceId.videoId}" class="pic">
              <img src="${item.snippet.thumbnails.medium.url}">
              <i class="fa-solid fa-play play"></i>
            </a>
            <div class="con">
              <h3>${title}</h3>
              <p>${con}</p>
            </div>
          </article>
        `
      })
      vidList.innerHTML = result;
    })

    vidList.addEventListener('click', (e) => {
      e.preventDefault();

      // if(!e.target.closest('a')) return;
      const vidId = e.target.closest('a').getAttribute('href');

      let pop = document.createElement('figure');
      pop.classList.add('pop');

      pop.innerHTML = `<iframe src="https://www.youtube.com/embed/${vidId}" frameborder="0" width="100%" height="100%" allowfullscreen>이 브라우저는 iframe을 지원하지 않습니다.</iframe>
      <span class="btnClose">close</span>
      `;

      vidList.append(pop);
    })

    vidList.addEventListener('click', (e) => {
      const pop = vidList.querySelector('.pop');
      if(pop) {
        const close = pop.querySelector('span');
        if(e.target == close) pop.remove();
      }
    })