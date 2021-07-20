const moreInfoButton = document.querySelector(".more-info > button");
const dropdown = document.querySelector(".dropdown-info");

function showDropdown() {
    dropdown.classList.toggle('open');
}

moreInfoButton.addEventListener("click", showDropdown)