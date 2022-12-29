var kod = Math.floor(Math.random() * (9999-1000)+1000);
var char = String.fromCharCode(Math.random() * (100-10)+10);
var char2 = String.fromCharCode(Math.random() * (100-10)+10);
var rand = Math.floor(Math.random() * (5-1)+1);

function control() {
    console.log("Kod : " + kod); //TODO: 4 haneli kod
    console.log("Karakter 1 : " + char); //? karakter 1
    console.log("Karakter 2 : " + char2); //* karakter 2
    console.log("Yazı No : " + rand); //? 1 ile 5 arasında bir sayı üretir ve bu sayıda yazıda ki kodu ve karakterlerin yerlerini belirler

    if (rand == 1) {
        let alan = document.getElementById("yazi").innerHTML = char2 + kod + char;
    }
    else if (rand == 2) {
        let alan = document.getElementById("yazi").innerHTML = char + kod + char2;
    }
    else if (rand == 3) {
        let alan = document.getElementById("yazi").innerHTML = kod + char + char2;
    }
    else if (rand == 4) {
        let alan = document.getElementById("yazi").innerHTML = char + char2 + kod;
    }
    else if (rand == 2) {
        let alan = document.getElementById("yazi").innerHTML = char2 + char + kod;
    }
}