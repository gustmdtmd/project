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

//오늘의메뉴 및 카페이벤트 구현
function chgTab(i1, i2) {
  let tm = document.querySelectorAll(".tm>li");
  let tc = document.querySelectorAll(".tc>li");

  tm[i1].classList.add(`on`);
  tc[i1].classList.add(`on`);

  tm[i2].classList.remove(`on`);
  tc[i2].classList.remove(`on`);
}

/////////////////////////////////////////
//팝업창 닫기

function popup(sts) {
  let pop = document.querySelector(`.pop`);
  pop.style.display = sts;
}
