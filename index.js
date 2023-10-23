let text = "Let's meditate..";
let i = 0;
let speed = 120;

function type () {
    if (i< text.length) {
document.querySelector("h1").textContent += text.charAt(i);
i++;
setTimeout (type, speed);
    }
}

type();