let result;
let sumProcent;
function RaschetProcenta() {
  procent = document.getElementById('procentIn').value;
  num = document.getElementById('numberIn').value;
  sumProcent = num / 100 * procent;
  result = num - sumProcent;
  document.getElementById('otvet').innerHTML = result;

}
document.getElementById('button').innerHTML = "RaschetProcenta()"
