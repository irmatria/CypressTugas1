const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi-fungsi operasi matematika
function penjumlahan(a, b) {
  return a + b;
}

function pengurangan(a, b) {
  return a - b;
}

function perkalian(a, b) {
  return (a * b);
}

function pembagian(a, b) {
    return (a / b);
  }

// Tampilkan menu
console.log("=== Kalkulator Perkalian Interaktif ===");
console.log("Pilih Operasi:");
console.log("1. Penjumlahan (a + b)");
console.log("2. Pengurangan (a - b)");
console.log("3. Perkalian (a * b)");
console.log("4. Pembagian (a / b)");

// Pengguna memilih operasi
rl.question('Masukkan pilihan operasi (1-4): ', (inputPilihan) => {
  const pilihan = parseInt(inputPilihan);

  rl.question('Angka pertama: ', (inputAngka1) => {
    const angka1 = parseFloat(inputAngka1);

    rl.question('Angka kedua: ', (inputAngka2) => {
      const angka2 = parseFloat(inputAngka2);

      let hasil;
      let namaOperasi = "";

      switch (pilihan) {
        case 1:
          hasil = penjumlahan(angka1, angka2);
          namaOperasi = "Penjumlahan";
          break;
        case 2:
          hasil = pengurangan(angka1, angka2);
          namaOperasi = "Pengurangan";
          break;
        case 3:
          hasil = perkalian(angka1, angka2);
          namaOperasi = "Perkalian";
          break;
        case 4:
          hasil = pembagian(angka1, angka2);
          namaOperasi = "Pembagian";
          break;
        default:
          console.log("Pilihan tidak valid!");
      }

      if (hasil !== undefined) {
        console.log(`\nOperasi: ${namaOperasi}`);
        console.log(`Angka a: ${angka1}`);
        console.log(`Angka b: ${angka2}`);
        console.log(`Hasil: ${hasil}`);
      }

      rl.close();
    });
  })
})