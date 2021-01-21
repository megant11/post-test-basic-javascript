//Menghitung Luas Lingkaran
console.log("Hitung Luas Lingkaran");
alert("Ayo ngitung luas lingkaran!");
var r, luas;
r = parseFloat(prompt("Jari-jarinya berapa nih?"));
luas = 3.14 * r * r;
alert(`Luas lingkarannya adalah ${luas}!    `);

//Menghitung Luas Segitiga
console.log("Menghitung Luas Segitiga");
alert("Ayo ngitung luas segitiga!");
const alas = prompt("Alasnya berapa nih?");
const tinggi = prompt("Terus tingginya berapa?");
const hasil = alas * 0.5 * tinggi;
alert(`Luas segitiganya adalah ${hasil}!`);

//Tugas Object
console.log("Membuat object dengan min.5 key dan menampilkan value");
let aboutPhone = {
  deviceName: "Trombolll",
  miuiVersion: "12.0.1",
  androidVersion: "10",
  allSpecs: {
      ram: "4.00GB",
      cpi: "Octa-core MAX 2.00GHz",
      model: "M2004J19G",
      internalStorage: "64.00GB",
  },
  rilis: "10 Juni 2020",
  berat: "198 gram",
  material: "Gorilla Glass 3",
  jenisLayar: "IPS 6,53 inch",
};
console.log(aboutPhone);

//Array forEach
console.log("Membuat Array 5 item ditampilkan dengan forEach")
const hp = ["Xiaomi", "Samsung", "Realme", "iPhone", "Asus"]

hp.forEach(function(data) {
    console.log(data)
})

