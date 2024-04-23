var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Data Entry Expert", "Digital Marketing"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const menubar = document.querySelector(".menubar");
const navbar = document.querySelector(".navbar");

menubar.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
