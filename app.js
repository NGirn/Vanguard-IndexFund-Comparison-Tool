function calculate() {
  //VGSLX Calculation
  p = document.getElementById("p").value;
  n = "1"; // no. of compoundings per year
  t = document.getElementById("t").value; // no. of years
  r = "10.53";
  result = document.getElementById("result-VGSLX");

  // The equation is A = p * [[1 + (r/n)] ^ nt]
  A = p * Math.pow(1 + r / (n * 100), n * t);

  // toFixed is used for rounding the amount with two decimal places.
  result.innerHTML = "Total amount you will have after the investment period £" + A.toFixed(2);

  result.innerHTML += "<br>Total profit over the investment period £" + (A.toFixed(2) - p).toFixed(2);

  //VFIAX Calculation
  p = document.getElementById("p").value;
  n = "1"; // no. of compoundings per year
  t = document.getElementById("t").value; // no. of years
  r = "6.17";
  result = document.getElementById("result-VFIAX");

  // The equation is A = p * [[1 + (r/n)] ^ nt]
  A = p * Math.pow(1 + r / (n * 100), n * t);

  // toFixed is used for rounding the amount with two decimal places.
  result.innerHTML = "Total amount you will have after the investment period £" + A.toFixed(2);

  result.innerHTML += "<br>Total profit over the investment period £" + (A.toFixed(2) - p).toFixed(2);

  //VBTLX Calculation
  p = document.getElementById("p").value;
  n = "1"; // no. of compoundings per year
  t = document.getElementById("t").value; // no. of years
  r = "4.07";
  result = document.getElementById("result-VBTLX");

  // The equation is A = p * [[1 + (r/n)] ^ nt]
  A = p * Math.pow(1 + r / (n * 100), n * t);

  // toFixed is used for rounding the amount with two decimal places.
  result.innerHTML = "Total amount you will have after the investment period £" + A.toFixed(2);

  result.innerHTML += "<br>Total profit over the investment period £" + (A.toFixed(2) - p).toFixed(2);


}
