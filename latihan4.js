let suhu = 25;
let hasil;

// Celsius ke Fahrenheit
hasil = (suhu * 9 / 5) + 32;
console.log("Celsius ke Fahrenheit:", hasil);

// Celsius ke Kelvin
hasil = suhu + 273.15;
console.log("Celsius ke Kelvin:", hasil);

// Fahrenheit ke Celsius
hasil = (suhu - 32) * 5 / 9;
console.log("Fahrenheit ke Celsius:", hasil);

// Fahrenheit ke Kelvin
hasil = (suhu - 32) * 5 / 9 + 273.15;
console.log("Fahrenheit ke Kelvin:", hasil);

// Kelvin ke Celsius
hasil = suhu - 273.15;
console.log("Kelvin ke Celsius:", hasil);

// Kelvin ke Fahrenheit
hasil = (suhu - 273.15) * 9 / 5 + 32;
console.log("Kelvin ke Fahrenheit:", hasil);