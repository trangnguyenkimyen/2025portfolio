const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");

hamburger.addEventListener("click", function () {
  this.classList.toggle("is-active"); // animation nút
  sidebar.classList.toggle("active"); // hiện/ẩn menu
});
