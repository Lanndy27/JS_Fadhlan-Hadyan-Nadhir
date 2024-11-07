//Tipe Data
// stirng
let judulWeb = "Panduan Fashion Style";
let rekomendasiHariIni = "Casual Modern";

// numbers
let jumlahOutfit = 3;
let ratingStyle = 5;

//boolean
let cocokUntukKuliah = true;
let cocokUntukPesta = false;

// array
let daftarPakaian = ["Kemeja Putih", "Celana Jeans", "Sneakers"];

// object
let outfitRekomendasi = {
  tema: "Casual Modern",
  pakaianAtas: "Kemeja Putih",
  pakaianBawah: "Celana Jeans",
  sepatu: "Sneakers",
  aksesoris: ["Jam Tangan", "Topi"],
  cocokUntuk: ["Kuliah", "Jalan-jalan", "Hangout"],
};

// LogOperator
// AND (&&)
let cocokUntukKampus = cocokUntukKuliah && !cocokUntukPesta;

// OR (||)
let rekomendasiCuaca = "Hujan" || "Cerah";

// NOT (!)
let tidakCocokUntukPesta = !cocokUntukPesta;

// console log
console.log("Judul Website:", judulWeb);
console.log("Daftar Pakaian:", daftarPakaian);
console.log("Detail Outfit:", outfitRekomendasi);

// tampilan diwebnya
let hasil = document.getElementById("hasil");
hasil.innerHTML = `
    <h2>${judulWeb}</h2>
    <h3>Rekomendasi: ${rekomendasiHariIni}</h3>
    <p>Kombinasi Pakaian:</p>
    <ul>
        ${daftarPakaian.map((item) => `<li>${item}</li>`).join("")}
    </ul>
    <p>Cocok untuk kampus? ${cocokUntukKampus ? "Ya" : "Tidak"}</p>
    <h3>Detail Lengkap:</h3>
    <p>Tema: ${outfitRekomendasi.tema}</p>
    <p>Cocok untuk: ${outfitRekomendasi.cocokUntuk.join(", ")}</p>
`;
