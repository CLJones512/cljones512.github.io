function convertFeet(a)
{
  var b = a / 3.281;
  document.getElementById("output").innerHTML = a + " feet = " + b + " meters";
}
function convertTemp(a)
{
  var b = (a - 32) * (5 / 9);
  document.getElementById("output").innerHTML = a + " degrees fahrenheit = " + b + " degrees Celsius";
}
function convertVolume(a)
{
  var b = a * 29.574;
  document.getElementById("output").innerHTML = a + " fl oz = " + b + " milliliters";
}
function convertWeight(a)
  var b = a / 2.205;
  document.getElementById("output").innerHTML = a + " pounds = " + b + " kilograms";