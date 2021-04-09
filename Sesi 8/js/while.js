// Cetak 1 - 9
var flag = 1; // inisiasi
while (flag<10) { // kondisi
  console.log("Iterasi ke-" + flag); //proses
  flag++; //iterasi flag = flag + 1;
}

// Cetak 9 - 1
var flag = 9;
while (flag>0) { // kondisi
  console.log("Iterasi ke-" + flag); //proses
  flag--; //iterasi flag = flag - 1;
}

// Cetak 1, 3, 5, 7, 9
var flag = 1;
while (flag<10) { // kondisi
  console.log("Iterasi ke-" + flag); //proses
  flag+=2; //iterasi flag = flag + 2;
}

// Cetak 9, 7, 5, 3, 1
var flag = 9;
while (flag>0) { // kondisi
  console.log("Iterasi ke-" + flag); //proses
  flag-=2; //iterasi flag = flag - 2;
}

// Mengembalikan Angka Total
var deret = 5;
var jumlah = 0;

while(deret>0) {
  jumlah += deret;
  console.log("Jumlah saat ini: " + jumlah);
  deret--;
  console.log("Deret saat ini: " + deret);
}
console.log(jumlah)
