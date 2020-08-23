const previous = document.querySelector(".exhibition .btnbox .fa-chevron-left"),
  next = document.querySelector(".exhibition .btnbox .fa-chevron-right"),
  exhibition = document.querySelector(".exhibition"),
  photo = document.querySelector(".exhibition__photo"),
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
  imgSrcList = ["imgs/1.jpg", "imgs/2.jpg", "imgs/3.jpg", "imgs/4.jpg"];
let btn = document.querySelector(".exhibition__info__link"),
  counter = 0;

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

  btn.addEventListener("mouseenter", () => {
    btn.style.backgroundColor = btnColorList[counter];
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.backgroundColor = backgroundColorList[counter];
  });
  photo.src = imgSrcList[counter];
};

//초기화

set();

//클릭이벤트

const handlePrevious = (e) => {
  counter--;
  if (counter < 0) counter += backgroundColorList.length;
  set();
};

const handleNext = (e) => {
  counter++;
  if (counter >= backgroundColorList.length)
    counter -= backgroundColorList.length;
  set();
};

previous.addEventListener("click", handlePrevious);
next.addEventListener("click", handleNext);
