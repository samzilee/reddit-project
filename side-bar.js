//
const leftMenu = document.getElementById("leftMenu");
let i = 1;
function sideBarMenu() {
  let n = i++;
  if (n <= 1) {
    // imported from general.css line: 68
    leftMenu.classList.add("leftMenu");
  } else if (n >= 2) {
    leftMenu.classList.remove("leftMenu");

    return (i = 1);
  }
}

const names = ["home", "Popular", "all"];

const content = document.querySelector(".content");
const main = document.getElementById("main");

const btns = {
  btn1: document.getElementById("btn1"),
  btn2: document.getElementById("btn2"),
  btn3: document.getElementById("btn3"),
};
const pages = {
  homePage: document.getElementById("homePage"),
  statusPage:
    '<div style="color: white; fonst-size: 13px; display:flex; justify-content: center;  height: 100%; align-items: center;" >COMING SOON</div>',
  allPage:
    '<div style="color: red; fonst-size: 13px; display:flex; justify-content: center;  height: 100%; align-items: center;" >COMING SOON</div>',
};

function fafaClick(btn) {
  if (btn === names[0]) {
    btns.btn1.classList.add("direct-t");
    btns.btn2.classList.remove("direct-t");
    btns.btn3.classList.remove("direct-t");

    main.innerHTML = pages.homePage.innerHTML;
  } else if (btn === names[1]) {
    btns.btn2.classList.add("direct-t");
    btns.btn1.classList.remove("direct-t");
    btns.btn3.classList.remove("direct-t");

    main.innerHTML = pages.statusPage;
  } else if (btn === names[2]) {
    btns.btn3.classList.add("direct-t");
    btns.btn1.classList.remove("direct-t");
    btns.btn2.classList.remove("direct-t");

    main.innerHTML = pages.allPage;
  }
}
