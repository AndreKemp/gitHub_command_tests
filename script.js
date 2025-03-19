let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let random = document.getElementById("random");

function setGradient() {
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
    css.textContent = body.style.background;
}

function createRandomNumber (){
    let x=Math.round(0xffffff * Math.random()).toString(16);
    let y=(6-x.length);
    let z= "000000";
    let z1 = z.substring(0,y);
    return  "#" + z1 + x;
}

random.addEventListener("click", function() {
    color1.value = createRandomNumber();
    color2.value = createRandomNumber();
    setGradient();
})

// color1.addEventListener("input", setGradient);
// color2.addEventListener("input", setGradient);