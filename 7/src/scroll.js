export default class Scroll {
  constructor() {
    this.header = document.querySelector(".header");
    this.header__menu = this.header.querySelector(".header__menu");
    this.header__menu.addEventListener("click", (event) => {
      this.moveSection(event);
    });

    this.intro = document.querySelector(".intro");
    this.second = document.querySelector(".second");
    this.third = document.querySelector(".third");
    this.forth = document.querySelector(".forth");
    this.fifth = document.querySelector(".fifth");

    this.sections = [
      this.intro,
      this.second,
      this.third,
      this.forth,
      this.fifth,
    ];

    this.intro__btn = document.querySelector("#intro__btn");
    this.intro__btn.addEventListener("click", () => {
      this.second.scrollIntoView({ behavior: "smooth", block: "end" });
    });

    this.second__btn = document.querySelector("#second__btn");
    this.second__btn.addEventListener("click", () => {
      this.third.scrollIntoView({ behavior: "smooth", block: "end" });
    });

    this.third_btn = document.querySelector("#third_btn");
    this.third_btn.addEventListener("click", () => {
      this.forth.scrollIntoView({ behavior: "smooth" });
    });
  }

  moveSection(event) {
    if (event.target.tagName !== "SPAN") {
      return;
    }
    this.SectionNumber = event.target.id;
    this.destiny = this.sections[this.SectionNumber];

    if (this.SectionNumber !== "3") {
      this.destiny.scrollIntoView({ behavior: "smooth", block: "end" });
    } else {
      this.destiny.scrollIntoView({ behavior: "smooth", blcok: "start" });
    }
  }
}
