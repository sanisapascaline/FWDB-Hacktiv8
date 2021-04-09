var rumah = {
  ruangTamu: ["kursi", "meja"],
  dapur: [
    "kompor",
    {
      rakPiring : ["piring", "gelas"]
    }
  ],
  kamar: [
    "kasur",
    {
      lemari: ["baju", "celana"]
    }
  ]
}
console.log(rumah.ruangTamu[0]); //kursi
console.log(rumah.dapur[0]); //kompor
console.log(rumah.dapur[1].rakPiring[0]) // piring
console.log(rumah.kamar[0]); //kasur
console.log(rumah.kamar[1].lemari[1]); //celana

rumah.kamar[1].lemari[1] = "sepatu";
console.log(rumah.kamar[1].lemari[1]); //sepatu