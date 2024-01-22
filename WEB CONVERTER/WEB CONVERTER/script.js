function showPresentation() {
  var i, tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById("presentation").style.display = "block";
}

// Function for Tabs

function allTabs(evt, Tabname) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(Tabname).style.display = "block";
  evt.currentTarget.className += " active";

  document.getElementById("presentation").style.display = "none";
}
//Swap button for elements
document
  .getElementsByClassName("swapButton1")[0]
  .addEventListener("click", function () {
    var unitChoice = document.getElementById("unitchoicelongueur");
    var objectChoice = document.getElementById("objectchoicelongueur");

    var unitChoiceValue = unitChoice.value;
    var objectChoiceValue = objectChoice.value;

    unitChoice.value = objectChoiceValue;
    objectChoice.value = unitChoiceValue;
  });

document
  .getElementsByClassName("swapButton2")[0]
  .addEventListener("click", function () {
    var unitChoice = document.getElementById("unitchoicecapacités");
    var objectChoice = document.getElementById("objectchoicecapacités");

    var unitChoiceValue = unitChoice.value;
    var objectChoiceValue = objectChoice.value;

    unitChoice.value = objectChoiceValue;
    objectChoice.value = unitChoiceValue;
  });

document
  .getElementsByClassName("swapButton3")[0]
  .addEventListener("click", function () {
    var unitChoice = document.getElementById("unitchoicemasses");
    var objectChoice = document.getElementById("objectchoicemasses");

    var unitChoiceValue = unitChoice.value;
    var objectChoiceValue = objectChoice.value;

    unitChoice.value = objectChoiceValue;
    objectChoice.value = unitChoiceValue;
  });

document
  .getElementsByClassName("swapButton4")[0]
  .addEventListener("click", function () {
    var unitChoice = document.getElementById("moneychoice1");
    var objectChoice = document.getElementById("moneychoice2");

    var unitChoiceValue = unitChoice.value;
    var objectChoiceValue = objectChoice.value;

    unitChoice.value = objectChoiceValue;
    objectChoice.value = unitChoiceValue;
  });

// First Converter

function unitchoice() {
  var choice = document.getElementsByName("unitchoice")[0].value;
  if (choice == 1) {
    return 1;
  }
  if (choice == 2) {
    return 100;
  }
  if (choice == 3) {
    return 100000;
  }
}

function objectchoice() {
  var choice = document.getElementsByName("objectchoice")[0].value;
  var value = document.getElementById("value").value;
  var cm = 1;
  var m = 100;
  var km = 100000;
  if (choice == 1) {
    return (value * unitchoice()) / cm;
  }
  if (choice == 2) {
    return (value * unitchoice()) / m;
  }
  if (choice == 3) {
    return (value * unitchoice()) / km;
  }
}

document.getElementById("convert").addEventListener("click", function () {
  document.getElementById("result").innerText =
    document.getElementById("value").value +
    document.querySelector('select[name="unitchoice"] option:checked').text +
    " équivaut à " +
    objectchoice() +
    document.querySelector('select[name="objectchoice"] option:checked').text;
});

// Second Converter

function unitchoice1() {
  var choice = document.getElementsByName("unitchoicecapacités")[0].value;
  if (choice == 1) {
    return 1;
  }
  if (choice == 2) {
    return 10;
  }
  if (choice == 3) {
    return 1000;
  }
}

function objectchoice1() {
  var choice = document.getElementsByName("objectchoicecapacités")[0].value;
  var value1 = document.getElementById("value1").value;
  var ml = 1;
  var cl = 10;
  var l = 1000;
  if (choice == 1) {
    return (value1 * unitchoice1()) / ml;
  }
  if (choice == 2) {
    return (value1 * unitchoice1()) / cl;
  }
  if (choice == 3) {
    return (value1 * unitchoice1()) / l;
  }
}

document.getElementById("convert1").addEventListener("click", function () {
  document.getElementById("result1").innerText =
    document.getElementById("value1").value +
    document.querySelector('select[id="unitchoicecapacités"] option:checked')
      .text +
    " équivaut à " +
    objectchoice1() +
    document.querySelector('select[id="objectchoicecapacités"] option:checked')
      .text;
});

// Third Converter

function unitchoice2() {
  var choice = document.getElementsByName("unitchoicemasses")[0].value;
  if (choice == 1) {
    return 1;
  }
  if (choice == 2) {
    return 1000;
  }
  if (choice == 3) {
    return 1000000;
  }
}

function objectchoice2() {
  var choice = document.getElementsByName("objectchoicemasses")[0].value;
  var value2 = document.getElementById("value2").value;
  var mg = 1;
  var g = 1000;
  var kg = 1000000;
  if (choice == 1) {
    return (value2 * unitchoice2()) / mg;
  }
  if (choice == 2) {
    return (value2 * unitchoice2()) / g;
  }
  if (choice == 3) {
    return (value2 * unitchoice2()) / kg;
  }
}

document.getElementById("convert2").addEventListener("click", function () {
  document.getElementById("result2").innerText =
    document.getElementById("value2").value +
    document.querySelector('select[id="unitchoicemasses"] option:checked')
      .text +
    " équivaut à " +
    objectchoice2() +
    document.querySelector('select[id="objectchoicemasses"] option:checked')
      .text;
});

//API part

let usdRate, euroRate, yenRate;

const apiKey = "a89048668917e7ab04cd4556";
const apiUrl =
  "https://v6.exchangerate-api.com/v6/a89048668917e7ab04cd4556/latest/USD";

fetch(apiUrl + "?access_key=" + apiKey)
  .then((response) => response.json())
  .then((data) => {
    const conversionRates = data.conversion_rates;
    usdRate = conversionRates.USD;
    euroRate = conversionRates.EUR;
    yenRate = conversionRates.JPY;
  })
  .catch((error) => {
    console.error("Erreur de requête API :", error);
  });

// Last Converter

function moneychoice() {
  var choice = document.getElementsByName("moneychoice")[0].value;
  if (choice == 1) {
    return usdRate;
  }
  if (choice == 2) {
    return euroRate;
  }
  if (choice == 3) {
    return yenRate;
  }
}

function exchangechoice() {
  var choice = document.getElementsByName("exchangechoice")[0].value;
  var value = document.getElementById("money").value;

  var valueInUSD = value / moneychoice();
  if (choice == 1) {
    return valueInUSD * usdRate;
  }
  if (choice == 2) {
    return valueInUSD * euroRate;
  }
  if (choice == 3) {
    return valueInUSD * yenRate;
  }
}

document.getElementById("moneyconvert").addEventListener("click", function () {
  document.getElementById("resultconvert").innerText =
    document.getElementById("money").value +
    document.querySelector('select[name="moneychoice"] option:checked').text +
    " équivaut à " +
    exchangechoice() +
    document.querySelector('select[name="exchangechoice"] option:checked').text;
});
