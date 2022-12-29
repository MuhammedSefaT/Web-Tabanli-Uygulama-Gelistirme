// alert("Muhammed Sefa");

// var a = "sa";

// document.write(a + "<br>");
// document.write("C#");
// console.log("Javascript");

buttonOzellik();

function buttonOzellik() {
  document.getElementById("link").style.color = "red";
  document.getElementById("paragraf").innerHTML = "Hakkımızda";
  document.getElementById("baslik").innerText = "Başlık";
  document.getElementById("button").style.backgroundColor = "blue";
  document.getElementById("button").style.color = "white";
}

function sepet() {
  alert("Sepete Eklendi");
}

function kutuGizle() {
  document.getElementById("kutu").style.visibility = "hidden";
}

function kutuGoster() {
  document.getElementById("kutu").style.visibility = "visible";
}

//##################################################################

function kutu1() {
  document.getElementById("kutu1").style.backgroundColor = "lightblue";
  document.getElementById("kutu1").style.color = "white";
}

function kutu2() {
  document.getElementById("kutu2").style.backgroundColor = "blue";
  document.getElementById("kutu2").style.color = "white";
}

function kutu3() {
  document.getElementById("kutu3").style.backgroundColor = "green";
  document.getElementById("kutu3").style.color = "white";
}

function kutu4() {
  document.getElementById("kutu4").style.backgroundColor = "gray";
  document.getElementById("kutu4").style.color = "white";
}

function kutu5() {
  document.getElementById("kutu5").style.backgroundColor = "orange";
  document.getElementById("kutu5").style.color = "white";
}

function kutu6() {
  document.getElementById("kutu6").style.backgroundColor = "purple";
  document.getElementById("kutu6").style.color = "white";
}
