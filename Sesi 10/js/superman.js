var supermanObj = {
  id: "1a2b3c",
  name: "Superman",
  age: 200,
  favorites: [
    "coding",
    "hiking",
    {
      sports: [
        "parkour",
        "hill climbing"
      ],
      arts: [
        "drawing",
        "dancing"
      ]
    }
  ],
  address: {
    street: "Planet Krypton",
    zipCode: "54321"
  }
};
console.log(supermanObj.id); // "1a2b3c"
console.log(supermanObj.name); //Superman
console.log(supermanObj.favorites[0]); //"Coding"
console.log(supermanObj.favorites[2].sports[1]); // "hill climbing"
console.log(supermanObj.favorites[2].arts[0]); // "drawing"
console.log(supermanObj.address.zipCode); // "54321"