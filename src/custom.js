var dispElement = document.querySelector("#display");
var bodElement = document.querySelector("#bod");

window.onload = function () {
    document.querySelector(".img-switch").addEventListener("click", function () {
        var images = ["#viz1", "#viz2", "#viz3"];
        var current = dispElement.getAttribute("src");
        var index = images.indexOf(current) + 1;
        if (index >= images.length) {
            index = 0;
        }
        dispElement.setAttribute("src", images[index]);
    });
};

var mc = new Hammer.Manager(bodElement);
var pinch = new Hammer.Pinch();
var rotate = new Hammer.Rotate();

pinch.recognizeWith(rotate);
mc.add([pinch, rotate]);

mc.on("pinch rotate", function(ev) {
    var current = dispElement.getAttribute("rotation");
    current = parseInt(current.split(" ")[1]);
    console.log(current);
    var rotated = current + ev.rotation;
    console.log(rotated);
});