const pages = document.querySelectorAll(".page");
let current = 0;

function showPage(index) {
  pages.forEach((p, i) => p.classList.toggle("active", i === index));
}

document.getElementById("prev").addEventListener("click", () => {
  if (current > 0) current--;
  showPage(current);
});

document.getElementById("next").addEventListener("click", () => {
  if (current < pages.length - 1) current++;
  showPage(current);
});
showPage(current);