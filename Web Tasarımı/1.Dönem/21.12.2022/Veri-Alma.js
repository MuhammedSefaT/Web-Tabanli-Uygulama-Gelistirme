function test() {
  var ad = document.forms["form1"]["name"].value;
  var sifre = document.forms["form1"]["password"].value.lenght;
  var sifre2 = document.forms["form1"]["password2"].value.lenght;
  var mail = document.forms["form1"]["email"].value;

  if (ad == null) {
    alert("ismini yaz");
  }

  if (sifre > 8 && sifre2 < 1) {
    alert("ismini yaz");
  }

  if (mail.i) {
    alert("ismini yaz");
  }
}
