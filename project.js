//슬라이드

setInterval(function () {
  let sl = document.querySelector(".silde");

  sl.style.left = "-100%";
  sl.style.transition = "1s";

  setTimeout(function () {
    console.log(sl.querySelectorAll("li").length);
    let first = sl.querySelectorAll("li")[0];
    console.log(first);
    sl.appendChild(first);
    sl.style.left = "0";
    sl.style.transition = "none";
  }, 1000);
}, 1000);
