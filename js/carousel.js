const previous = document.querySelector(".exhibition .btnbox .fa-chevron-left"),
  next = document.querySelector(".exhibition .btnbox .fa-chevron-right"),
  exhibition = document.querySelector(".exhibition"),
  btn = document.querySelector(".exhibition__info__link"),
  indicators = document.querySelector(".exhibition__indicators"),
  btnColorList = ["grey", "#87ceeb", "pink", "#8CE6B6"],
  backgroundColorList = ["black", "blue", "red", "green"],
  exhibitionNameList = ["DESIGN DOERS.", "THE GIFTED", "전시3", "전시4"],
  exhibitionDiscriptionList = [
    "'行動하는 디자이너'<br> 디자인의 전통은 '실제(praxis)'를 지향한다.",
    "대학은 어떤 것의 중요성과 업(業)에 대한 신념에 눈뜨는<br> 인식과 예비의 장으로서 스스로 찾는 지적 축적과 수양을 통해...",
    "설명3.......",
    "설명4.......",
  ],
  exhibitionDateList = [
    "2020.03.12~2020.04.23",
    "2020.01.12~2020.02.23",
    "2020.01.12~2020.05.23",
    "2020.05.12~2020.07.23",
  ],
  imgSrcList = [
    "imgs/exhibition/1.jpg",
    "imgs/exhibition/2.jpg",
    "imgs/exhibition/3.jpg",
    "imgs/exhibition/4.jpg",
  ];

let photo = document.querySelector(".exhibition__photo"),
  counter = 0;

//indicators

for (let i = 0; i < imgSrcList.length; i++) {
  const indicator = document.createElement("div");
  indicator.setAttribute("class", "exhibition__indicator");
  indicators.appendChild(indicator);
}

const indicate = (counter) => {
  //indicator들 중 counter에 해당하는 indicator 길게

  for (let i = 0; i < imgSrcList.length; i++) {
    indicators.children[i].classList.remove("exhibition__indicator-current");
  }
  indicators.children[counter].classList.add("exhibition__indicator-current");
};

//set
const set = () => {
  exhibition.style.backgroundColor = backgroundColorList[counter];
  btn.style.backgroundColor = backgroundColorList[counter];
  exhibition.querySelector(".exhibition__info__name").innerHTML =
    exhibitionNameList[counter];
  exhibition.querySelector(".exhibition__info__discription").innerHTML =
    exhibitionDiscriptionList[counter];
  exhibition.querySelector(".exhibition__info__date").innerHTML =
    exhibitionDateList[counter];
  indicate(counter);

  btn.addEventListener("mouseenter", () => {
    btn.style.backgroundColor = btnColorList[counter];
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.backgroundColor = backgroundColorList[counter];
  });
};

//초기화

set();
photo.src = imgSrcList[counter];

//클릭이벤트

const fadeout = (el) => {
  el.style.opacity -= 1 / 20;
};

const handlePrevious = (e) => {
  counter--;
  if (counter < 0) counter += backgroundColorList.length;

  photo = document.querySelector(".exhibition__photo");
  let photo_tmp = photo.cloneNode(true);
  photo_tmp.src = imgSrcList[counter];
  photo_tmp.onload = () => {
    set();
    exhibition.insertBefore(photo_tmp, photo);
    let fade = setInterval(fadeout(photo), 20);
    setTimeout(() => {
      clearInterval(fade);
    }, 400);
  };
};

const handleNext = (e) => {
  counter++;
  if (counter >= backgroundColorList.length)
    counter -= backgroundColorList.length;

  photo = document.querySelector(".exhibition__photo");
  let photo_tmp = photo.cloneNode(true);
  photo_tmp.src = imgSrcList[counter];
  photo_tmp.onload = () => {
    set();
    exhibition.insertBefore(photo_tmp, photo);
    let fade = setInterval(fadeout(photo), 400);
    setTimeout(() => {
      clearInterval(fade);
      const fadedImg = exhibition.querySelectorAll(".exhibition__photo")[1];
      fadedImg.parentNode.removeChild(fadedImg);
    }, 400);
  };
};

previous.addEventListener("click", handlePrevious);
next.addEventListener("click", handleNext);

let autoCarousel = setInterval(handleNext, 5000);

// 클릭하면 자동으로 넘어가는 기능 사라지게
// previous.addEventListener("click", () => clearInterval(autoCarousel));
// next.addEventListener("click", () => clearInterval(autoCarousel));
