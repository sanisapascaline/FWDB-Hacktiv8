// Tugas 1
var orang = 1;
while(orang<21) {
  console.log("Halo, saya orang ke-" + orang);
  orang++;
}

// Tugas 2
for(var orang = 1; orang<21; orang++) {
  console.log("Halo, saya orang ke-" + orang);
}

// Tugas 3
var orang = 1;
while(orang<21) {
  if(orang%2==1){
    console.log("Halo, saya orang ke-" + orang);
  }
  orang++;
}

// Tugas 4
for(var orang = 1; orang<21; orang++) {
  if(orang%2==1) {
    console.log("Halo, saya orang ke-" + orang);
  }
}

// Tugas 5
var batas= 15;
for(var baris=1; baris<=batas; baris++) {
  for(var kolom=1; kolom<=batas; kolom++) {
    document.write("O");
  }
  document.write("<br/>");
}

