function tukarBesarKecil(kalimat) {
  var besar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var kecil = "abcdefghijklmnopqrstuvwxyz"
  var hasil = ""
  for (var i = 0; i < kalimat.length; i++) {
    for (var j = 0; j < kecil.length; j++) {
      if (kalimat[i] == kecil[j]) {
        hasil += besar[j];
        break;
      } else if (kalimat[i] == besar[j]) {
        hasil += kecil[j];
        break;
      } else if (j == kecil.length -1) {
        hasil += kalimat[i];
      }
    }
  }
  return hasil;
}
// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"