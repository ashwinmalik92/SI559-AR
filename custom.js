window.onload = function () {
    document.querySelector(".img-switch").addEventListener("click", function () {
        let disp = document.querySelector("#display");
        var images = ["#viz1", "#viz2", "#viz3"];
        var current = disp.getAttribute("src");
        var index = images.indexOf(current) + 1;
        if (index >= images.length) {
            index = 0;
        }
        disp.setAttribute("src", images[index]);
    });
};