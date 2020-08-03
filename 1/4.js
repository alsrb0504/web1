const title = document.querySelector(".title");
const hiddenbtn = document.querySelector(".hidden");
const mobile_menu = document.querySelector(".mobile_menu");

const paper = document.querySelector(".paper");
// const paper_start = paper.getBoundingClientRect();
// console.log(paper_start.top);   // 550




// paper의 절대 위치.
const absolute_paper_top = paper.offsetTop;


// const current_y = window.pageYOffset;
// console.log(current_y);

// 혹시 나중에 필요할 지도??
// const position = window.innerHeight;
// console.log(position);

// 대략 250 쯤 되면 fade in  fade out 구현
// 현재 스크롤된 길이가 250보다 작았다가 커지면 fade out
// 250보다 컸다가 작아지면 fade in 만들기.

function titleFadeOut(current_y ){
  if(current_y >= 200){
    title.classList.remove("fadeIn");
    title.classList.add("remove");

    hiddenbtn.classList.remove("remove");
    hiddenbtn.classList.add("fadeIn");
  }
}

function titleFadeIn(current_y ){
  if(current_y < 200) {
    title.classList.add("fadeIn");
    title.classList.remove("remove");

    hiddenbtn.classList.remove("fadeIn");
    hiddenbtn.classList.add("remove");
  }
}

function handleScroll(){
  const current_y = window.pageYOffset;
  if (current_y > 200){       // 편하게 커지면 fadeout 실행
    titleFadeOut(current_y );
  } else {
    titleFadeIn(current_y );
  }

  // mobile_menu 변경,
  if( current_y > 550) {
    mobile_menu.classList.add("white_btn");
  } else {
    mobile_menu.classList.remove("white_btn");
  }
}

window.addEventListener('scroll', handleScroll);
