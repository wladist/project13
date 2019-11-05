function raschetProcenta() {
  var procent = document.getElementById('procentZn').value;
  var nam = document.getElementById('chislo').value;
  var sumSale = nam / 100 * procent;
  var result = nam - sumSale;
  console.log(result);
}
raschetProcenta();
