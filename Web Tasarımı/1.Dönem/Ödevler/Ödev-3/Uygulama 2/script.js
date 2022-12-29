var kod = Math.floor(Math.random() * (999999-100000)+100000);
var rnd = Math.floor(Math.random() * 5);

function yaziYazdir() {
    document.getElementById("res").innerHTML = kod;
    console.log(rnd);

    if (rnd == 0) {
        document.getElementById("res").style.backgroundImage = 'url("./images/1.jpg")';
        document.getElementById("res").style.backgroundSize = 'cover';
        document.getElementById("res").style.backgroundRepeat = 'no-repeat';
        document.getElementById("res").style.color = "white";
    }
    else if (rnd == 1) {
        document.getElementById("res").style.backgroundImage = 'url("./images/2.jpg")';
        document.getElementById("res").style.backgroundSize = 'cover';
        document.getElementById("res").style.backgroundRepeat = 'no-repeat';
        document.getElementById("res").style.color = "white";
    }
    else if (rnd == 2) {
        document.getElementById("res").style.backgroundImage = 'url("./images/3.jpg")';
        document.getElementById("res").style.backgroundSize = 'cover';
        document.getElementById("res").style.backgroundRepeat = 'no-repeat';
        document.getElementById("res").style.color = "white";
    }
    else if (rnd == 3) {
        document.getElementById("res").style.backgroundImage = 'url("./images/4.jpg")';
        document.getElementById("res").style.backgroundSize = 'cover';
        document.getElementById("res").style.backgroundRepeat = 'no-repeat';
        document.getElementById("res").style.color = "white";
    }
    else if (rnd == 4) {
        document.getElementById("res").style.backgroundImage = 'url("./images/5.jpg")';
        document.getElementById("res").style.backgroundSize = 'cover';
        document.getElementById("res").style.backgroundRepeat = 'no-repeat';
        document.getElementById("res").style.color = "white";
    }
    else if (rnd == 5) {
        document.getElementById("res").style.backgroundImage = 'url("./images/6.jpg")';
        document.getElementById("res").style.backgroundSize = 'cover';
        document.getElementById("res").style.backgroundRepeat = 'no-repeat';
        document.getElementById("res").style.color = "white";
    }
}