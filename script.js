var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
    body.style.background =
        "linear-gradient(to right, " +
        color1.value +
        ", " +
        color2.value +
        ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


// 1. Write code so that the colour inputs match the background generated on the first page load. 

color1.setAttribute("value", "#ff0000");
color2.setAttribute("value", "#ffff00");

// 2. Display the initial CSS linear gradient property on page load.

setGradient()

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.
// var randomColour = document.querySelector("button");

function randCol() {
    var ran1 = Math.floor((Math.random() * 255) + 1)
    var ran2 = Math.floor((Math.random() * 255) + 1)
    var ran3 = Math.floor((Math.random() * 255) + 1)
    return "rgb(" + ran1 + "," + ran2 + "," + ran3 + ")"
}

function setRandomGradient() {
    var a = randCol()
    var b = randCol()
    body.style.background =
        "linear-gradient(to right, " +
        b +
        ", " +
        a +
        ")";

    css.textContent = body.style.background + ";";
}


// randomColour.addEventListener("click", randomBackground);


// body.style.background = 
// "linear-gradient(to right, " 
// + color1.randCol()
// + ", " 
// + color2.randCol()
// + ")";



// console.log(randCol)

// randomColour.addEventListener;