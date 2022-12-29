function CodeYazdir() {
        //? random kod oluşturduk
    var r1 = Math.floor(Math.random() * (999-100)+100);

    var c1 = String.fromCharCode(Math.random() * (65-59)+59);
    var c2 = String.fromCharCode(Math.random() * (44-32)+32);
    var c3 = String.fromCharCode(Math.random() * (90-65)+65);

    var kod = c1 + c2 + r1 +c3; //* Oluşturulan karakterlieri ve sayıları string olarak birleştirdik

    var yazi = document.getElementById("kod1").innerHTML = kod; //! oluşturulan kodu yazdırdık
}

function controlSifre() { 
    //TODO şifre ve şifre tekrarın metinleri aynımı olduğunu kontrol ediyor.
    var s1 = document.getElementById("sifre1").value;
    var s2 = document.getElementById("sifre2").value;

    if (s1 != s2) {
        alert("Şifreler Uyuşmuyor");
    }
}

function controlKod() {
    var k2 = document.getElementById("kod2").value;

    if (k2 != kod) {
        alert("Kod Yanlış");
    }
}

function controlSifreUzunluk() {
    var s1 = document.getElementById("sifre1").value.length;

    if (s1 < 6) {
        alert("6 dan düşük şifre girilemez.");
    }
}

function controlActive() {
    var active = document.getElementById("sifre1").value;

    if (active != " ") {
        document.getElementById("sifre2").disabled = false;
    }
}

function controlMail() {
    var mail = document.getElementById("mail").value;

    if (mail.indexOf("@") == -1 && mail.indexOf(".com") == -1) {
        alert("@ işareti ve .com kullan.");
    }
}

function buttonActive() {
     kullanici = document.getElementById("kAdi").value.length;
     s1 = document.getElementById("sifre1").value.length;
     s2 = document.getElementById("sifre2").value.length;
     mail = document.getElementById("mail").value.length;
     kod2 = document.getElementById("kod2").value.length;
     check = document.getElementById("secim").checked == true;

    if (kullanici > 0 && s1 > 0 && s2 > 0 && mail > 0 && kod2 > 0 && check == true) {
        document.getElementById("test").disabled = false;
    }
    else {
        document.getElementById("test").disabled = true;
    }
}

function DegerYazdir() {
    var kullanici = document.getElementById("kAdi").value;
    var s1 = document.getElementById("sifre1").value;
    var s2 = document.getElementById("sifre2").value;
    var mail = document.getElementById("mail").value;
    var kod2 = document.getElementById("kod2").value;

    document.getElementById("kAdi-text").style.visibility = "visible";
    document.getElementById("kAdi-text").innerHTML = kullanici;

    document.getElementById("sifre-text").style.visibility = "visible";
    document.getElementById("sifre-text").innerHTML = s1;

    document.getElementById("mail-text").style.visibility = "visible";
    document.getElementById("mail-text").innerHTML = mail;

    document.getElementById("kod-text").style.visibility = "visible";
    document.getElementById("kod-text").innerHTML = kod2;
}

function ClearFix() {
    document.getElementById("kAdi").value = " ";
    document.getElementById("sifre1").value = null;
    document.getElementById("sifre2").value = null;
    document.getElementById("mail").value = " ";
    document.getElementById("kod2").value = " ";

    document.getElementById("secim").checked = true;
}