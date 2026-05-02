document.addEventListener("DOMContentLoaded", function() {

    const searchInput = document.getElementById("searchInput");
    const regionFilter = document.getElementById("regionFilter");
    const cards = document.querySelectorAll(".place-card");
    const resultsCount = document.getElementById("resultsCount");
    const emptyState = document.getElementById("emptyState");

    function updateGallery() {

        let searchValue = searchInput.value.trim().toLowerCase();
        let filterValue = regionFilter.value.trim();

        let visible = 0;

        cards.forEach(function(card) {

            let city =
                card.querySelector("h3").textContent.trim().toLowerCase();

            let region =
                card.dataset.region.trim();

            let matchSearch =
                searchValue === "" || city.startsWith(searchValue);

            let matchFilter =
                filterValue === "all" || filterValue === "" || region === filterValue;

            if (matchSearch && matchFilter) {
                card.style.display = "block";
                visible++;
            } else {
                card.style.display = "none";
            }

        });

        resultsCount.textContent = "عدد النتائج: " + visible;

        if (visible === 0) {
            emptyState.hidden = false;
        } else {
            emptyState.hidden = true;
        }

    }

    searchInput.addEventListener("input", updateGallery);
    regionFilter.addEventListener("change", updateGallery);

    updateGallery();

});