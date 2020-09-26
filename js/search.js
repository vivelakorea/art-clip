const header = document.querySelector(".js-header"),
  searchForm = document.querySelector(".js-searchForm"),
  searchText = searchForm.querySelector(".js-searchText"),
  searchIcon = searchForm.querySelector(".fa-search");

const handleSearchClick = () => {
  searchText.classList.add("search-text-expand");
};

//To Do: active이면 마우스 벗어나도 expand 안지워지게, 아니면 지워지게
const handleSearchleave = () => {};

header.addEventListener("mouseleave", handleSearchleave);
searchIcon.addEventListener("click", handleSearchClick);
