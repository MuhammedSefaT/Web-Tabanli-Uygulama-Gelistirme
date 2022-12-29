var a = document.getElementById("exampleInputText1").value.length;
var b = document.getElementById("exampleInputPassword1").value.length;
var c = document.getElementById("exampleInputPassword2").value.length;
var d = document.getElementById("exampleInputEmail1").value.length;
var e = document.getElementById("flexCheckDefault").value.length;

function test() {
  if (a == 0) {
    document.getElementById("buton").disabled = false;
  } else if (b == 0) {
    document.getElementById("buton").disabled = false;
  } else if (c == 0) {
    document.getElementById("buton").disabled = false;
  } else if (d == 0) {
    document.getElementById("buton").disabled = false;
  } else if (e == 0) {
    document.getElementById("buton").disabled = false;
  } else if (a == 0 && b == 0 && c == 0 && d == 0 && e == 0) {
    document.getElementById("buton").disabled = false;
  } else {
    document.getElementById("buton").disabled = true;
  }
}
