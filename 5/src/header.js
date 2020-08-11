const header = document.querySelector("header");
const header_left = document.querySelector(".header_left");
const left_white_block = header_left.querySelector(".white_block");
const left_header_text = header_left.querySelector(".header_text");

const header_right = document.querySelector(".header_right");
const right_header_text = header_right.querySelector(".header_text");
const right_icon = header_right.querySelector("i");

// header block hover
// header_left
header_left.addEventListener("mouseover", () =>{
  left_white_block.style.backgroundColor = "powderblue";
  left_header_text.style.color = "powderblue";
})

header_left.addEventListener("mouseout", () =>{
  left_white_block.style.backgroundColor = "white";
  left_header_text.style.color = "white";
})

// header_right
header_right.addEventListener("mouseover", () =>{
  right_header_text.style.color = "powderblue";
  right_icon.style.color = "powderblue";
})

header_right.addEventListener("mouseout", () =>{
  right_header_text.style.color = "white";
  right_icon.style.color = "white";
})

// load page
header_left.addEventListener("click", () => {
  location.href = location.href;
})


// header_fixed
const header_height = header.offsetHeight;
const main = document.querySelector("main");
const main_height = main.offsetHeight;


window.addEventListener("scroll", ()=>{
  const scroll_height = window.pageYOffset;

  if(scroll_height > (main_height - header_height)){
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
})


// menu_page
const menu_page = document.querySelector(".menu_page");
const close_btn = menu_page.querySelector("i");

header_right.addEventListener("click", ()=>{
  menu_page.classList.add("reveal");
})

close_btn.addEventListener("click", ()=>{
  menu_page.classList.remove("reveal");
})


// close menu_page
menu_page.addEventListener("click", (event)=>{
  menu_page.classList.remove("reveal");
})
