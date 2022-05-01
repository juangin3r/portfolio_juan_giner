const d = document;
const $section = d.querySelectorAll(".accordion-content");
const $h2 = d.querySelectorAll("h2");

d.addEventListener("DOMContentLoaded", (e) => {
  $h2.forEach((el, i) => {
    $h2[i].addEventListener("click", () => {
      $section.forEach((el, i) => {
        $section[i].classList.remove("active");
      });
      $section[i].classList.add("active");
    });
  });
});

