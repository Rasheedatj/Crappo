const btn = document.getElementById("menu_btn");
const nav = document.getElementById("menu");
const purpleBox = document.querySelectorAll(".flex_boxes .box");

btn.addEventListener("click", () => {
  nav.classList.toggle("open");
  btn.classList.toggle("open_btn");
});

purpleBox.forEach((box) =>
  box.addEventListener("click", () => {
    box.classList.toggle("colorActive");
    box.classList.toggle("overstyle");

    if (box.previousElementSibling) {
      box.previousElementSibling.classList.remove("colorActive");
      box.previousElementSibling.classList.remove("overstyle");
    }
    if (box.nextElementSibling) {
      box.nextElementSibling.classList.remove("colorActive");
      box.nextElementSibling.classList.remove("overstyle");
    }
  })
);
