const cards = document.querySelectorAll(".daily__mosaic__card"),
  cardImgList = [
    "imgs/cards/1.png",
    "imgs/cards/2.png",
    "imgs/cards/3.png",
    "imgs/cards/4.png",
    "imgs/cards/5.png",
    "imgs/cards/6.png",
    "imgs/cards/7.png",
    "imgs/cards/8.png",
    "imgs/cards/9.png",
    "imgs/cards/10.png",
    "imgs/cards/11.png",
    "imgs/cards/12.png",
    "imgs/cards/13.png",
    "imgs/cards/14.png",
    "imgs/cards/15.png",
    "imgs/cards/16.png",
  ];
function handleMouseover(e) {
  const card = e.target;
  const buttons = card.querySelector(".daily__mosaic__card__buttons");
  const info = card.querySelector(".daily__mosaic__card__info");
  if (buttons && info) {
    buttons.classList.remove("hidden");
    info.classList.remove("hidden");
  }
}

function handleMouseout(e) {
  const card = e.target;
  const buttons = card.querySelector(".daily__mosaic__card__buttons");
  const info = card.querySelector(".daily__mosaic__card__info");
  if (buttons && info) {
    buttons.classList.add("hidden");
    info.classList.add("hidden");
  }
}

function init() {
  let i = 0;
  cards.forEach((card) => {
    cardImg = card.querySelector(".daily__mosaic__card__img");
    cardImg.src = cardImgList[i];
    i++;
    card.addEventListener("mouseenter", handleMouseover);
    card.addEventListener("mouseleave", handleMouseout);
  });
}

init();
