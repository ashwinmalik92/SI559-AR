window.onload = function () {
    var dispCanvas = document.querySelector("#display");
    var imgNext = document.querySelector("#img-next");
    var scaleMinus = document.querySelector("#scale-minus");
    var scalePlus = document.querySelector("#scale-plus");
    var rotateMinus = document.querySelector("#rotate-minus");
    var rotatePlus = document.querySelector("#rotate-plus");
    
    imgNext.addEventListener("click", function () {
        var images = ["#viz1", "#viz2", "#viz3", "#viz4"];
        var current = dispCanvas.getAttribute("src");
        var index = images.indexOf(current) + 1;
        if (index >= images.length) {
            index = 0;
        }
        dispCanvas.setAttribute("src", images[index]);
    });

    scaleMinus.addEventListener("click", function () {
        var current = parseInt(dispCanvas.getAttribute("height"));
        if (current > 1) {
            var scaled = current - 1;
        } else if (current > 0) {
            var scaled = current - .1;
        } else {
            var scaled = 0;
        }
        dispCanvas.setAttribute("width", scaled);
        dispCanvas.setAttribute("height", scaled);
    });

    scalePlus.addEventListener("click", function () {
        var current = parseInt(dispCanvas.getAttribute("height"));
        if (current >= 1) {
            var scaled = current + 1;
        } else if (current >= 0) {
            var scaled = current + .1;
        } else {
            var scaled = 0;
        }
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

    /*
    var bodElement = document.querySelector("#bod");
    var mc = new Hammer.Manager(bodElement);
    var pinch = new Hammer.Pinch();
    var rotate = new Hammer.Rotate();

    pinch.recognizeWith(rotate);
    mc.add([pinch, rotate]);

    mc.on("pinch rotate", function(ev) {
        var current = dispElement.getAttribute("rotation");
        current = parseInt(current.split(" ")[1]);
        var rotated = current + ev.rotation;
        var combo = current.toString() + " to " + rotated.toString();
        document.querySelector("#helper").innerText = combo;
    });
    */
};