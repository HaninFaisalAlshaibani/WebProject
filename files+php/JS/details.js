document.addEventListener("DOMContentLoaded", function() {

    const mainImage = document.getElementById("mainImage");
    const thumbs = document.querySelectorAll(".thumb");

    thumbs.forEach(function(thumb) {

        thumb.addEventListener("click", function() {

            mainImage.src = this.src;

            thumbs.forEach(function(img) {
                img.classList.remove("active-thumb");
            });

            this.classList.add("active-thumb");

        });

    });

});