# Website MPLS PAI - SLB Negeri 1 Ampek Angkek

Website Masa Pengenalan Lingkungan Sekolah (MPLS) untuk mata pelajaran
Pendidikan Agama Islam di SLB Negeri 1 Ampek Angkek. Berisi profil guru,
jadwal kegiatan, serta materi belajar dalam bentuk slide, PDF, foto, dan
video.

## Struktur Folder

```
index.html            Halaman utama website
css/style.css         Seluruh gaya tampilan
js/content-data.js    Daftar materi (slide/pdf/foto/video) - edit di sini
js/main.js            Logika tab materi, modal, aksesibilitas
assets/materi/slide/  Taruh file gambar slide di sini
assets/materi/pdf/    Taruh file PDF di sini
assets/materi/foto/   Taruh file foto kegiatan di sini
assets/materi/video/  Taruh file video (mp4) di sini
arsip/                Materi H5P lama (arsip, tidak ditampilkan di web)
```

## Cara Menambah Materi Baru

1. Salin file materi (pdf/foto/video/gambar slide) ke folder yang sesuai
   di dalam `assets/materi/`.
2. Buka `js/content-data.js`, salin salah satu blok contoh pada kategori
   yang sesuai, lalu ganti `judul`, `deskripsi`, dan `url` dengan file
   yang baru saja ditambahkan.
3. Simpan file. Materi baru akan otomatis muncul di halaman **Materi**
   saat website dibuka kembali. Tidak perlu mengubah `index.html`.

Untuk video YouTube, isi `url` cukup dengan ID videonya saja (bagian
setelah `v=` pada link YouTube), bukan link lengkap.

## Personalisasi

- Nama, foto, dan kontak Guru PAI ada di bagian "Profil Guru" pada
  `index.html` (cari `id="guru"`).
- Alamat, email, dan nomor telepon sekolah ada di bagian "Kontak"
  (cari `id="kontak"`).
- Jadwal kegiatan MPLS ada di bagian `id="jadwal"`.

## Menjalankan Secara Lokal

Buka langsung file `index.html` di browser, atau jalankan server statis
sederhana, misalnya:

```
python3 -m http.server 8000
```

lalu buka `http://localhost:8000`.
