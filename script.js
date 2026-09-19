// BilimTM - script.js

document.addEventListener("DOMContentLoaded", function () {

    // MOBİL MENÜ
    const menuButton = document.getElementById("menuButton");
    const navigation = document.getElementById("navigation");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", function () {
            navigation.classList.toggle("active");
        });
    }

    // ARAMA
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");

    function searchSite() {
        if (!searchInput) return;

        const text = searchInput.value.trim();

        if (text === "") {
            alert("Gözlemek üçin bir zat ýazyň.");
            searchInput.focus();
            return;
        }

        alert(
            '"' + text + '" üçin gözleg ulgamy indiki tapgyrda goşular.'
        );
    }

    if (searchButton) {
        searchButton.addEventListener("click", searchSite);
    }

    if (searchInput) {
        searchInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                searchSite();
            }
        });
    }

    // HAZIRLIK BÖLÜMLERİ
    const buttons = document.querySelectorAll("[data-coming-soon]");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {

            const section = button.getAttribute("data-coming-soon");

            alert(
                section + " bölümi häzirlikçe taýýarlanýar."
            );

        });
    });

    // NAVİGASYON
    const links = document.querySelectorAll("nav a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {

            if (navigation) {
                navigation.classList.remove("active");
            }

        });
    });

    console.log("BilimTM üstünlikli işledi.");

});
