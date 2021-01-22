// Opdracht JavaScript

//     Maak gebruik van https://github.com/verhulstd/syntra-fe-scss-js
//     Maak een class Rectangle(w, h, x, y)
//     Getters en setters voor width, height, x, y
//     Geef deze een random-bgcolor (npmjs.org/random-color)
//     Oppervlakte van die rectangle?
//     Afstand van rect tot rect => A²=B²+C² (van midden tot midden)
//     Als je klikt op 1 rechthoek dan krijgt die een nieuwe BGC
//     HitTest/collision detection

// in te dienen: surgelink + githublink

var randomColor = require("randomcolor");
// import randomColor from "randomcolor";

class Rectangle {
  constructor(w, h, x, y) {
    this._w = w;
    this._h = h;
    this._x = x;
    this._y = y;
    this._ref = this.generateHTML();
    this.setUpStyling();
    this.setUpEvents();
  }
  generateHTML() {
    document.body.insertAdjacentHTML(
      "afterbegin",
      `<div 
          class="rectangle">
       </div>`
    );
    return document.querySelector("div:first-child");
  }
  setUpStyling = () => {
    const styles = {
      width: this._w + "px",
      height: this._h + "px",
      top: this._x + "px",
      left: this._y + "px",
      backgroundColor: randomColor.randomColor(),
    };
    Object.assign(this._ref.style, styles);
  };
  setUpEvents() {
    // this._ref.onclick = this.setUpStyling;
    // this._ref.addEventListener("click", () => {
    //   this.style();
    // });
    this._ref.onclick = this.setUpStyling;
  }
  get width() {
    return this._width + "px";
  }
  set width(value) {
    this._width = value;
    this.setUpStyling();
  }
  get height() {
    return this._height + "px";
  }
  set height(value) {
    this._height = value;
    this.setUpStyling();
  }
  get x() {
    return this._x + "px";
  }
  set x(value) {
    this._x = value;
    this.setUpStyling();
  }
  get y() {
    return this._y + "px";
  }
  set y(value) {
    this._y = value;
    this.setUpStyling();
  }
  getOppervlakte() {
    return "De oppervlakte is " + this._w * this._h;
  }
}

const rectangleOne = new Rectangle(200, 100, 50, 100);
const rectangleTwo = new Rectangle(600, 300, 200, 200);

console.log(
  rectangleOne.width,
  rectangleOne.height,
  rectangleOne.x,
  rectangleOne.y
);

console.log(
  rectangleTwo.width,
  rectangleTwo.height,
  rectangleTwo.x,
  rectangleTwo.y
);

console.log(rectangleOne.getOppervlakte());
console.log(rectangleTwo.getOppervlakte());
