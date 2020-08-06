// side bar open and close
const aside = document.querySelector("aside");
const sidebar__btn = document.querySelector(".fas");

function openNav() {
  aside.style.width = '300px';
}

function closeNav() {
  aside.style.width = '0';
}

function handleSidebar(){
  const open = sidebar__btn.classList.contains('open');
  if(open){
    sidebar__btn.classList.remove("open");
    sidebar__btn.style.left = "10px";
    closeNav();
  } else {
    sidebar__btn.classList.add("open");
    sidebar__btn.style.left = "310px";
    openNav();
  }
}

sidebar__btn.addEventListener("click", handleSidebar);
