const btn = document.getElementById("menu_btn");
const nav = document.getElementById("menu");
const purpleBox = document.querySelectorAll(".flex_boxes .box");
const over = document.querySelectorAll("#box");

btn.addEventListener("click", () => {
  nav.classList.toggle("open");
  btn.classList.toggle("open_btn");
});

purpleBox.forEach((box) =>
  box.addEventListener("click", () => {
    box.classList.toggle("colorActive");
  })
);

over.forEach((arrow) =>
  arrow.addEventListener("click", () => {
    arrow.classList.toggle("overstyle");
  })
);
