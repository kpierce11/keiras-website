document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById("dog");
    const showButton = document.getElementById("showImage");
    let isImageHidden = false;

    image.addEventListener("click", function() {
        if (!isImageHidden) {
            image.classList.add("hidden");
            isImageHidden = true;
        }
    });


    showButton.addEventListener("click", function() {
        if (isImageHidden) {
            image.classList.remove("hidden");
            isImageHidden = false;
        }
    });
});