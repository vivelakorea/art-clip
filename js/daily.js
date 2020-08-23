const cards = document.querySelectorAll(".daily__mosaic__card");

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
  cards.forEach((card) => {
    card.addEventListener("mouseover", handleMouseover);
    card.addEventListener("mouseout", handleMouseout);
  });
}

init();
