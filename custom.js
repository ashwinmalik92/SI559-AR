window.onload = function () {
    document.querySelector(".img-switch").addEventListener("click", function () {
        let disp = document.querySelector("#display");
        var images = ["#viz1", "#viz2", "#viz3"];
        var current = disp.getAttribute("src");
        var index = images.indexOf(current) + 1;
        if (index >= images.length) {
            index = 0;
        }
        console.log(current);
        console.log(index);
        console.log(images[index])
        disp.setAttribute("src", index);
    });
};