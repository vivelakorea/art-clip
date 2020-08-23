const header = document.querySelector(".js-header"),
  searchForm = document.querySelector(".js-searchForm"),
  searchText = searchForm.querySelector(".js-searchText"),
  searchIcon = searchForm.querySelector(".fa-search");

const handleSearchClick = () => {
  searchText.classList.add("search-text-expand");
};

const handleSearchleave = () => {
  searchText.classList.remove("search-text-expand");
};

header.addEventListener("mouseleave", handleSearchleave);
searchIcon.addEventListener("click", handleSearchClick);
