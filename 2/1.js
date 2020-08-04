const buttons = document.querySelectorAll(".buttons ul li");
const containers = document.querySelectorAll(".container");
const btn_pages = document.querySelector(".btn_pages");
const x_btn = document.querySelector(".x");


function handleClick(item) {
  switch (item.target.id) {
    case '0':
      containers[0].classList.remove("unshow");
      break;
    case '1':
      containers[1].classList.remove("unshow");
      break;
    case '2':
      containers[2].classList.remove("unshow");
      break;
    case '3':
      containers[3].classList.remove("unshow");
      break;
  }
  btn_pages.classList.remove("unshow");
}


function closepage() {
  btn_pages.classList.add("unshow");
  containers.forEach((container) => {
    container.classList.add("unshow");
  });

}


function init() {
  buttons.forEach((item) => {
    item.addEventListener("click", handleClick);
  })

  x_btn.addEventListener("click", closepage);
}

// Execution
init();
