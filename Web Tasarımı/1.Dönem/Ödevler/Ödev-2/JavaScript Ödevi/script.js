// alert("Bilgileri göndermek için tüm alanları doldurunuz!");

//tanımlama
var a = document.getElementById("kadi").value;
var b = document.getElementById("sifre").value;
var c = document.getElementById("sifre-tkr").value;
var d = document.getElementById("mail").value;
var e = document.getElementById("tik");
//error
// var f = document.getElementById("kadi-error").value;
// var g = document.getElementById("sifre-error").value;
// var h = document.getElementById("sifre-error-2").value;
// var i = document.getElementById("mail-error").value;
// var j = document.getElementById("tik-error").value;

var __a_a__ = document.getElementById("kadi").value.length;
var __b_b__ = document.getElementById("sifre").value.length;
var __c_c__ = document.getElementById("sifre-tkr").value.length;
var __d_d__ = document.getElementById("mail").value.length;

function control() {
  //?  Buttonuun gerekli alablar dolmadan aktifliğini false olma durumunu kontrol eden bir şart bloğudur...
  if (__a_a__ == 0 && __b_b__ == 0 && __c_c__ == 0 && __d_d__ == 0 && e.checked == true){
    document.getElementById("btn").disabled = false;
  } else {
    document.getElementById("btn").disabled = true;
  }
}

function clearfix() {
  document.getElementById("btn").disabled = true;
}