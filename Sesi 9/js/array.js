var animals = ["Lion", "Tiger", "Puma"];
console.log(animals);  // ["Lion", "Tiger", "Puma"]
console.log(animals[0]); // "Lion"

animals[3] = "Jaguar";
console.log(animals); // ["Lion", "Tiger", "Puma", "Jaguar"]

animals[8] = "Leopard";
console.log(animals);
// ["Lion", "Tiger", "Puma", "Jaguar", undefined, undefined, undefined, undefined, "Leopard"]

animals[1] = undefined;
console.log(animals);
// ["Lion", undefined, "Puma", "Jaguar", undefined, undefined, undefined, undefined, "Leopard"]

console.log(animals[5]); // undefined

animals[0] = 100;
console.log(animals);
// [100, undefined, "Puma", "Jaguar", undefined, undefined, undefined, undefined, "Leopard"]

animals[1] = true;
console.log(animals);
// [100, true, "Puma", "Jaguar", undefined, undefined, undefined, undefined, "Leopard"]

animals[3] = ["Zero", 1, "Two"];
console.log(animals);
// [100, true, "Puma", ["Zero", 1, "Two"], undefined, undefined, undefined, undefined, "Leopard"]
console.log(animals[3][1]); //1

animals[3][3] = "Three";
console.log(animals);
// [100, true, "Puma", ["Zero", 1, "Two", "Three"], undefined, undefined, undefined, undefined, "Leopard"]
