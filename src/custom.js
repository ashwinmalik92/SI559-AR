window.onload = function () {
    var dispCanvas = document.querySelector("#display");
    var imgElem1 = document.querySelector("#gallery-viz1");
    var imgElem2 = document.querySelector("#gallery-viz2");
    var imgElem3 = document.querySelector("#gallery-viz3");
    var scaleMinus = document.querySelector("#scale-minus");
    var scalePlus = document.querySelector("#scale-plus");
    var rotateMinus = document.querySelector("#rotate-minus");
    var rotatePlus = document.querySelector("#rotate-plus");
    
    imgElem1.addEventListener("click", function () {
        dispCanvas.setAttribute("src", "#viz1");
        imgElem1.classList.add("selected");
        imgElem2.classList.remove("selected");
        imgElem3.classList.remove("selected");
    });
    imgElem2.addEventListener("click", function () {
        dispCanvas.setAttribute("src", "#viz2");
        imgElem1.classList.remove("selected");
        imgElem2.classList.add("selected");
        imgElem3.classList.remove("selected");
    });
    imgElem3.addEventListener("click", function () {
        dispCanvas.setAttribute("src", "#viz3");
        imgElem1.classList.remove("selected");
        imgElem2.classList.remove("selected");
        imgElem3.classList.add("selected");
    });

    scaleMinus.addEventListener("click", function () {
        var current = parseInt(dispCanvas.getAttribute("height"));
        var scaled = current - 1;
        if (scaled < 0) {
            scaled = 0;
        }
        dispCanvas.setAttribute("width", scaled);
        dispCanvas.setAttribute("height", scaled);
    });

    scalePlus.addEventListener("click", function () {
        var current = parseInt(dispCanvas.getAttribute("height"));
        var scaled = current + 1;
        dispCanvas.setAttribute("width", scaled);
        dispCanvas.setAttribute("height", scaled);
    });

    rotateMinus.addEventListener("click", function () {
        var current = dispCanvas.getAttribute("rotation");
        var rotated = current["y"] - 45;
        if (rotated < 0) {
            rotated += 360;
        }
        rotated = "-90 " + rotated.toString() + " 0";
        dispCanvas.setAttribute("rotation", rotated);
    });

    rotatePlus.addEventListener("click", function () {
        var current = dispCanvas.getAttribute("rotation");
        var rotated = current["y"] + 45;
        if (rotated >= 360) {
            rotated -= 360;
        }
        rotated = "-90 " + rotated.toString() + " 0";
        dispCanvas.setAttribute("rotation", rotated);
    });
};