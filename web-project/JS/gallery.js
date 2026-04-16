document.addEventListener("DOMContentLoaded", function () {

  const searchInput = document.getElementById("searchInput");
  const regionFilter = document.getElementById("regionFilter");
  const cards = document.querySelectorAll(".place-card");
  const resultsCount = document.getElementById("resultsCount");
  const emptyState = document.getElementById("emptyState");

  function updateGallery() {
    if (!cards.length || !resultsCount) return;

    const searchValue = searchInput ? searchInput.value.trim().toLowerCase() : "";
    const filterValue = regionFilter ? regionFilter.value : "all";
    let visibleCount = 0;

    cards.forEach(card => {
      const cardRegion = card.getAttribute("data-region");
      const cardSearch = (card.getAttribute("data-search") || "").toLowerCase();

      const matchesSearch = cardSearch.includes(searchValue);
      const matchesFilter = filterValue === "all" || cardRegion === filterValue;

      if (matchesSearch && matchesFilter) {
        card.classList.remove("is-hidden");
        visibleCount++;
      } else {
        card.classList.add("is-hidden");
      }
    });

    resultsCount.textContent = "عدد النتائج: " + visibleCount;

    if (emptyState) {
      emptyState.hidden = visibleCount !== 0;
    }
  }

  if (searchInput) searchInput.addEventListener("input", updateGallery);
  if (regionFilter) regionFilter.addEventListener("change", updateGallery);

  updateGallery();

});