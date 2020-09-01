import Scroll from "./scroll.js";

const SCROLL = new Scroll();

const second_textBox = SCROLL.second.querySelector(".second__text__box");
const third_textBox = SCROLL.third.querySelector(".third__text__box");

const second_part_start = SCROLL.second.offsetTop + second_textBox.offsetTop;
const second_part_height = SCROLL.second.getBoundingClientRect().height;
const third_part_start = SCROLL.third.offsetTop + third_textBox.offsetTop;
const third_part_height = SCROLL.third.getBoundingClientRect().height;
const forth_part = SCROLL.forth.offsetTop;
const forth_part_height = SCROLL.forth.getBoundingClientRect().height;

const container = document.querySelector(".container");
const left_img = container.querySelectorAll(".left");
const right_img = container.querySelectorAll(".right");

const fifth_part = SCROLL.fifth.offsetTop - forth_part_height * 0.3;
const contact__box = document.querySelector(".contact");

window.addEventListener("scroll", emerge);

function emerge() {
  second_emerge();

  third_emerge();

  forth_emerge();

  fifth_emerge();
}

function second_emerge() {
  //second part
  if (
    window.scrollY >= second_part_start / 2 &&
    window.scrollY < second_part_start + second_part_height / 4
  ) {
    second_textBox.style.right = "0";
  } else {
    second_textBox.style.right = "-40%";
  }
}

function third_emerge() {
  // third_part
  if (
    window.scrollY >= third_part_start - second_part_height &&
    window.scrollY < third_part_start + third_part_height / 4
  ) {
    third_textBox.style.left = "0";
  } else {
    third_textBox.style.left = "-40%";
  }
}

function forth_emerge() {
  // forth_part
  if (
    window.scrollY >= forth_part - third_part_height * (2 / 5) &&
    window.scrollY <= forth_part + forth_part_height * (3 / 5)
  ) {
    left_img.forEach((item) => {
      item.style.transform = "translateX(+0%)";
    });
    right_img.forEach((item) => {
      item.style.transform = "translateX(+0%)";
    });

    container.style.opacity = "1";
  } else {
    left_img.forEach((item) => {
      item.style.transform = "translateX(-50%)";
    });
    right_img.forEach((item) => {
      item.style.transform = "translateX(+50%)";
    });
    container.style.opacity = "0";
  }
}

function fifth_emerge() {
  // fifth part
  if (scrollY > fifth_part) {
    contact__box.style.bottom = "0";
  } else {
    contact__box.style.bottom = "-50%";
  }
}
