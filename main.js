function convert() {
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
  

    var result;
    if (fromUnit === "cm" && toUnit === "inch") {
      result = inputValue / 2.54;
    } else if (fromUnit === "inch" && toUnit === "cm") {
      result = inputValue * 2.54;
    } else if (fromUnit === "m" && toUnit === "km") {
      result = inputValue / 1000;
    } else if (fromUnit === "km" && toUnit === "m") {
      result = inputValue * 1000;
    } else if (fromUnit === "cm" && toUnit === "m") {
      result = inputValue / 100;
    } else if (fromUnit === "m" && toUnit === "cm") {
      result = inputValue * 100;
    } else if (fromUnit === "cm" && toUnit === "km") {
      result = inputValue / 100000;
    } else if (fromUnit === "km" && toUnit === "cm") {
      result = inputValue * 100000;
    } else {
      result = inputValue;
    }
  

    document.getElementById("result").innerHTML = result.toFixed(2) + " " + toUnit;
  }
  
