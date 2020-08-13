const icons = document.querySelectorAll(".icons li i");
const home_page = document.querySelector(".main_page");
const file_page = document.querySelector(".work_part");
const envelop_page = document.querySelector(".contact_part");
const home_page_btn = home_page.querySelector(".profile i");

function removePage(page){
  page.classList.remove("active");
  page.classList.add("inactive");

  setTimeout( ()=> {
    const delete_Page = page.querySelector("section");
    delete_Page.style.display = "none";
  }, 100)
}

function loadPage(page){
  page.classList.remove("inactive");
  page.classList.add("active");

  setTimeout( ()=>{
    const loaded_Page = page.querySelector("section");
    loaded_Page.style.display = "flex";
  }, 100)
}

icons.forEach((icon) => {
  icon.addEventListener("click", (event)=>{
    console.log(event.target.id);
    const SELECT = event.target.id;

    switch (SELECT) {
      case "home": {
        loadPage(home_page);
        removePage(file_page);
        removePage(envelop_page);
        break;
      }
      case "folder": {
        loadPage(file_page);
        removePage(home_page);
        removePage(envelop_page);
        break;
      }
      case "envelop": {
        loadPage(envelop_page);
        removePage(home_page);
        removePage(file_page);
        break;
      }
    }
  })
});


home_page_btn.addEventListener("click", () => {
  loadPage(file_page);
  removePage(home_page);
  removePage(envelop_page);
})
