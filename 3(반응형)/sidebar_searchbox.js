// search__box
const search__box__bg = aside.querySelector(".search__bg");
const search__box = aside.querySelector(".search__bg input");

// search__box click
function handleSearch(){
  search__box__bg.style.borderColor = "#e57373";
  search__box__bg.style.borderWidth = "2px";
}

search__box.addEventListener("click", handleSearch);
