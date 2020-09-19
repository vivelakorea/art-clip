const header = document.querySelector(".js-header"),
  searchForm = document.querySelector(".js-searchForm"),
  searchText = searchForm.querySelector(".js-searchText"),
  searchIcon = searchForm.querySelector(".fa-search");

const handleSearchClick = () => {
  searchText.classList.add("search-text-expand");
};

const handleSearchleave = () => {
  setTimeout(() => searchText.classList.remove("search-text-expand"), 1000);
};

header.addEventListener("mouseleave", handleSearchleave);
searchIcon.addEventListener("click", handleSearchClick);
