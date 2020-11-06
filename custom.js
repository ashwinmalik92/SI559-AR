window.onload = function () {
    document.querySelector(".img-switch").addEventListener("click", function () {
        let disp = document.querySelector("#display");
        var images = ["viz1", "viz2", "viz3"];
        var current = disp.getAttribute("src");
        var currentIndex = images.indexOf(current);
        var currentIndex = currentIndex + 1;
        if (newIndex >= images.length) {
            newIndex = 0;
        }
        console.log(current);
        console.log(currentIndex);
        console.log(newIndex);
        disp.setAttribute("src", newIndex);
    });
};