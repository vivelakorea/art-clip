const previous = document.querySelector(".exhibition .btnbox .fa-chevron-left"),
  next = document.querySelector(".exhibition .btnbox .fa-chevron-right"),
  exhibition = document.querySelector(".exhibition"),
  btn = document.querySelector(".exhibition__info__link"),
  link = document.querySelector(".exhibition__info__anchor"),
  indicators = document.querySelector(".exhibition__indicators"),
  exhibitions = [
    {
      btnColor: "grey",
      backgroundColor: "black",
      name: "DESIGN DORES.",
      description:
        "'行動하는 디자이너' 디자인의 전통은 '실제(praxis)'를 지향한다.",
      date: "2020.03.12~2020.04.23",
      img: "imgs/exhibition/1.jpg",
      link: "http://hongikid.ac.kr/exhibitions/2019",
    },
    {
      btnColor: "#87ceeb",
      backgroundColor: "blue",
      name: "THE GIFTED",
      description:
        "대학은 어떤 것의 중요성과 업(業)에 대한 신념에 눈뜨는<br> 인식과 예비의 장으로서 스스로 찾는 지적 축적과 수양을 통해...",
      date: "2020.01.12~2020.02.23",
      img: "imgs/exhibition/2.jpg",
      link: "http://hongikid.ac.kr/exhibitions/2018",
    },
    // {
    //   btnColor: "pink",
    //   backgroundColor: "red",
    //   name: "전시 3",
    //   description: "설명 3....................................................",
    //   date: "2020.01.12~2020.05.23",
    //   img: "imgs/exhibition/3.jpg",
    //   link: "#",
    // },
    // {
    //   btnColor: "#8CE6B6",
    //   backgroundColor: "green",
    //   name: "전시 4",
    //   description: "설명 4....................................................",
    //   date: "2020.05.12~2020.07.23",
    //   img: "imgs/exhibition/4.jpg",
    //   link: "#",
    // },
  ];

let photo = document.querySelector(".exhibition__photo"),
  counter = 0;

//indicators(carousel 아래 찍히는 점 + 초록색 현재 창)

for (let i = 0; i < exhibitions.length; i++) {
  const indicator = document.createElement("div");
  indicator.setAttribute("class", "exhibition__indicator");
  indicators.appendChild(indicator);
}

const indicate = (counter) => {
  //indicator들 중 counter에 해당하는 indicator 길게

  for (let i = 0; i < exhibitions.length; i++) {
    indicators.children[i].classList.remove("exhibition__indicator-current");
  }
  indicators.children[counter].classList.add("exhibition__indicator-current");
};

//set
const set = () => {
  exhibition.style.backgroundColor = exhibitions[counter].backgroundColor;
  btn.style.backgroundColor = exhibitions[counter].backgroundColor;
  exhibition.querySelector(".exhibition__info__name").innerHTML =
    exhibitions[counter].name;
  exhibition.querySelector(".exhibition__info__discription").innerHTML =
    exhibitions[counter].description;
  exhibition.querySelector(".exhibition__info__date").innerHTML =
    exhibitions[counter].date;
  indicate(counter);
  link.setAttribute("href", exhibitions[counter].link);

  btn.addEventListener("mouseenter", () => {
    btn.style.backgroundColor = exhibitions[counter].btnColor;
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.backgroundColor = exhibitions[counter].backgroundColor;
  });
};

//초기화

set();
photo.src = exhibitions[counter].img;

//클릭이벤트

const fadeout = (el) => {
  el.style.opacity -= 1 / 20;
};

const handlePrevious = (e) => {
  counter--;
  if (counter < 0) counter += exhibitions.length;

  photo = document.querySelector(".exhibition__photo");
  let photo_tmp = photo.cloneNode(true);
  photo_tmp.src = exhibitions[counter].img;
  photo_tmp.onload = () => {
    set();
    exhibition.insertBefore(photo_tmp, photo);
    let fade = setInterval(fadeout(photo), 20);
    setTimeout(() => {
      clearInterval(fade);
      const fadedImg = exhibition.querySelectorAll(".exhibition__photo")[1];
      fadedImg.parentNode.removeChild(fadedImg);
    }, 400);
  };
};

const handleNext = (e) => {
  counter++;
  if (counter >= exhibitions.length) counter -= exhibitions.length;

  photo = document.querySelector(".exhibition__photo");
  let photo_tmp = photo.cloneNode(true);
  photo_tmp.src = exhibitions[counter].img;
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

let autoCarousel = setInterval(handleNext, 10000);

// 클릭하면 자동으로 넘어가는 기능 사라지게
// previous.addEventListener("click", () => clearInterval(autoCarousel));
// next.addEventListener("click", () => clearInterval(autoCarousel));
