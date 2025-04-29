function kategoriUsia (usia)
{
    if (usia >= 0 && usia <= 12) {
        return `Anak-anak`;
    } else if (usia >= 13 && usia <= 17) {
        return `Remaja`;
    } else if (usia >=18 && usia <= 59) {
        return `Dewasa`;
    } else if (usia >=60) {
        return `Lansia`
    } else {
        return `Tidak Masuk Klasifikasi Usia`;
    }
}

const daftarUsia =
    [3, 4, 6, 12, 13, 15, 17, 18, 25, 28, 34, 38, 42, 47, 51, 56, 59, 65, 68];

let jumlahKategori = {
    'Anak-anak' : 0,
    'Remaja'    : 0,
    'Dewasa'    : 0,
    'Lansia'    : 0,
};

for (let i = 0; 
    i < daftarUsia.length; 
    i++) 
    { const kategori = kategoriUsia(daftarUsia[i]);
        if (jumlahKategori[kategori] !== undefined) {
            jumlahKategori[kategori]++;
    }

}

console.log("Jumlah orang per kategori usia");
for (let kategori in jumlahKategori) {
    console.log(`${kategori} : ${jumlahKategori[kategori]}`);
}