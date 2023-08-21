function removeOpacityClass() {
    const realizationsList = document.getElementById("realizationsList");
    const gridItems = realizationsList.querySelectorAll(".grid-item");
    const expandButton = document.getElementById("expand-button");

    gridItems.forEach(item => {
        item.classList.remove("grid-item-opacity");
        item.classList.remove("d-none");
    });

    expandButton.style.display = "none";
    window.onload();
}

function scrollToRealizations() {
    var realizationsSection = document.getElementById("realizations");
    realizationsSection.scrollIntoView({ behavior: "smooth" });
}

function scrollToContactUs() {
    var contactUsSection = document.getElementById("contactUs");
    contactUsSection.scrollIntoView({ behavior: "smooth" });
}

function redirectToInstagram() {
    window.open("https://www.instagram.com/", "_blank");
}
