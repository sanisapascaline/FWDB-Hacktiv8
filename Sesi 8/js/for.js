// Cetak 1 - 9
for(var flag = 1; flag<10; flag++) {
  console.log("Iterasi ke-" + flag);
}

// Cetak 9 - 1
for(var flag = 9; flag>0; flag--) {
  console.log("Iterasi ke-" + flag);
}

// Cetak 1, 3, 5, 7, 9
for(var flag = 1; flag<10; flag+=2) {
  console.log("Iterasi ke-" + flag);
}

// Cetak 9, 7, 5, 3, 1
for(var flag = 9; flag>0; flag-=2) {
  console.log("Iterasi ke-" + flag);
}

// Mengembalikan Angka Total
var jumlah = 0;
for(var deret=5; deret>0;deret--) {
  jumlah += deret;
  console.log("Jumlah Saat Ini: " + jumlah);
  console.log("Deret Saat Ini: " + deret);
}
console.log(jumlah);
