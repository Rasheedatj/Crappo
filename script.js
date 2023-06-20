const btn = document.getElementById('menu_btn');
const nav = document.getElementById('menu');
const parent = document.querySelector('.flex_boxes');
const purpleBox = document.querySelectorAll('.flex_boxes .box');

btn.addEventListener('click', () => {
  nav.classList.toggle('open');
  btn.classList.toggle('open_btn');
});

function onClickBox(e) {
  purpleBox.forEach((box) => {
    box.classList.remove('colorActive');
    box.classList.remove('overstyle');
  });

  e.target.classList.toggle('colorActive');
  e.target.classList.toggle('overstyle');
}

parent.addEventListener('click', onClickBox);
