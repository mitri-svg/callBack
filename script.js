let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let cehd1 = document.getElementById("cehd1");
let cehd2 = document.getElementById("cehd2");
let cehd3 = document.getElementById("cehd3");
let cehd4 = document.getElementById("cehd4");
let netice1 = document.getElementById("netice1");
let netice2 = document.getElementById("netice2");
let netice3 = document.getElementById("netice3");
let netice4 = document.getElementById("netice4");
let cehd1sayi = 3;
let cehd2sayi = 3;
let cehd3sayi = 3;
let cehd4sayi = 3;

btn1.onclick = function () {
  if (cavab1.value == 144) {
    if (cehd1sayi > 0) {
        document.getElementById("netice1").innerHTML = `Misali duz tapdiz.Tebrikler`;
    }else{
        document.getElementById("netice1").innerHTML = `Cehdivizin sayi qurtardi`;

    }
  } else if (
    cavab1.value > 144 ||
    (cavab1.value < 144)
  ) {
    if (cehd1sayi > 0) {
        document.getElementById(
            "netice1"
          ).innerHTML = `Misali sehv tapdiz Cehd sayiviz azaldi`;
          cehd1sayi--;
          cehd1.innerHTML = `Cehd sayi : <b>${cehd1sayi}</b>`;
    }else{
        document.getElementById(
            "netice1"
          ).innerHTML = `Cehdivizin sayi qurtardi`;
    }

  } else {
    document.getElementById(
      "netice2"
    ).innerHTML = `Herflerden ve ya bosluq qoymayin!`;
  }
};
btn2.onclick = function () {
  if (cavab2.value == 135) {
    document.getElementById("netice2").innerHTML = `Misali duz tapdiz.Tebrikler!!!`;
  } else if (
    cavab2.value > 135 ||
    (cavab2.value < 135)
  ) {
    if (cehd2sayi > 0) {
        document.getElementById(
            "netice2"
          ).innerHTML = `Misali sehv tapdiz Cehd sayiviz azaldi`;
          cehd2sayi--;
          cehd2.innerHTML = `Cehd sayi : <b>${cehd2sayi}</b>`;
    }else{
        document.getElementById(
            "netice2"
          ).innerHTML = `Cehdivizin sayi qurtardi`;
    }

  } else {
    document.getElementById(
      "netice2"
    ).innerHTML = `Herflerden ve ya bosluq qoymayin!`;
  }
};
btn3.onclick = function () {
  if (cavab3.value == 4) {
    document.getElementById("netice3").innerHTML = `Misali duz tapdiz.Tebrikler!!!`;
  } else if (
    cavab3.value > 4 ||
    (cavab3.value < 4)
  ) {
    if (cehd3sayi > 0) {
        document.getElementById(
            "netice3"
          ).innerHTML = `Misali sehv tapdiz Cehd sayiviz azaldi`;
          cehd3sayi--;
          cehd3.innerHTML = `Cehd sayi : <b>${cehd3sayi}</b>`;
    }else{
        document.getElementById(
            "netice3"
          ).innerHTML = `Cehdivizin sayi qurtardi`;
    }

  } else {
    document.getElementById(
      "netice3"
    ).innerHTML = `Herflerden ve ya bosluq qoymayin!`;
  }
};
btn4.onclick = function () {
  if (cavab4.value == 81) {
    document.getElementById("netice4").innerHTML = `Misali duz tapdiz.Tebrikler!!!`;
  } else if (
    cavab4.value > 81 ||
    (cavab4.value < 81)
  ) {
    if (cehd4sayi > 0) {
        document.getElementById(
            "netice4"
          ).innerHTML = `Misali sehv tapdiz Cehd sayiviz azaldi`;
          cehd4sayi--;
          cehd4.innerHTML = `Cehd sayi : <b>${cehd4sayi}</b>`;
    }else{
        document.getElementById(
            "netice4"
          ).innerHTML = `Cehdivizin sayi qurtardi`;
    }

  } else {
    document.getElementById(
      "netice4"
    ).innerHTML = `Herflerden ve ya bosluq qoymayin!`;
  }
};
