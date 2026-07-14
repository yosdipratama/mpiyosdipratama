/**
 * =====================================================================
 * DATA MATERI MPLS - MAPEL PENDIDIKAN AGAMA ISLAM (PAI)
 * SLB Negeri 1 Ampek Angkek
 * =====================================================================
 * Bapak/Ibu Guru bisa menambah, mengubah, atau menghapus materi cukup
 * dengan mengedit daftar di bawah ini. Tidak perlu mengubah file HTML.
 *
 * Langkah menambah materi baru:
 * 1. Taruh file materi (pdf/foto/video) di dalam folder:
 *      assets/materi/pdf/    -> untuk file PDF
 *      assets/materi/foto/   -> untuk foto kegiatan
 *      assets/materi/video/  -> untuk video (mp4)
 *      assets/materi/slide/  -> untuk gambar slide / cover slide
 * 2. Salin salah satu blok contoh "{ ... }" di bawah, tempel di dalam
 *    kurung siku [ ] kategori yang sesuai, lalu ganti isinya.
 * 3. Simpan file ini. Website otomatis menampilkan materi baru saat
 *    halaman dibuka ulang.
 *
 * Keterangan field:
 *  judul     : judul materi
 *  deskripsi : ringkasan singkat materi
 *  kelas     : contoh "Kelas 1-3" / "Kelas 4-6" / "Semua Kelas"
 *  tipe      : untuk slide -> "gdrive" (Google Slide/Canva) atau "gambar"
 *              untuk video -> "youtube" atau "file"
 *  url       : - slide (gdrive) : link embed Google Slides/Canva
 *              - slide (gambar) : satu path gambar ("assets/materi/slide/nama.jpg"),
 *                                 atau daftar beberapa gambar untuk satu set slide,
 *                                 mis. ["assets/materi/slide/1.jpg", "assets/materi/slide/2.jpg"]
 *              - pdf            : path file pdf, mis. "assets/materi/pdf/nama.pdf"
 *              - foto           : path gambar, mis. "assets/materi/foto/nama.jpg"
 *              - video (youtube): ID video YouTube saja, mis. "dQw4w9WgXcQ"
 *              - video (file)   : path file mp4, mis. "assets/materi/video/nama.mp4"
 *  contoh    : true jika ini data contoh (akan diberi label "CONTOH")
 * =====================================================================
 */

const MATERI_DATA = {
  slide: [
    {
      judul: "Budaya Senyum, Salam, Sapa, Sopan, dan Santun (5S)",
      deskripsi: "Slide pengenalan budaya 5S untuk menciptakan lingkungan sekolah yang ramah, nyaman, dan penuh rasa hormat.",
      kelas: "Semua Fase",
      tipe: "gambar",
      url: [
        "assets/materi/slide/budaya-5s-1.jpg",
        "assets/materi/slide/budaya-5s-2.jpg",
        "assets/materi/slide/budaya-5s-3.jpg",
        "assets/materi/slide/budaya-5s-4.jpg",
        "assets/materi/slide/budaya-5s-5.jpg"
      ],
      contoh: false
    },
    {
      judul: "Mengenal Rukun Islam",
      deskripsi: "Slide pengenalan lima Rukun Islam dengan gambar sederhana dan mudah dipahami untuk siswa SLB.",
      kelas: "Semua Fase",
      tipe: "gambar",
      url: "",
      contoh: true
    },
    {
      judul: "Adab Masuk Sekolah",
      deskripsi: "Materi slide tentang adab dan doa saat masuk lingkungan sekolah baru.",
      kelas: "Fase A-C",
      tipe: "gambar",
      url: "",
      contoh: true
    }
  ],
  pdf: [
    {
      judul: "Buku Saku MPLS PAI",
      deskripsi: "Ringkasan materi Pendidikan Agama Islam selama masa pengenalan lingkungan sekolah.",
      kelas: "Semua Fase",
      url: "",
      contoh: true
    }
  ],
  foto: [
    {
      judul: "Kegiatan Sholat Dhuha Bersama",
      deskripsi: "Dokumentasi kegiatan pembiasaan sholat Dhuha pada masa MPLS.",
      url: "",
      contoh: true
    },
    {
      judul: "Perkenalan Guru PAI",
      deskripsi: "Momen perkenalan Guru PAI dengan siswa baru.",
      url: "",
      contoh: true
    },
    {
      judul: "Praktik Wudhu Bersama",
      deskripsi: "Kegiatan praktik tata cara wudhu yang benar bagi siswa baru.",
      url: "",
      contoh: true
    }
  ],
  video: [
    {
      judul: "Budaya Senyum, Salam, Sapa, Sopan, dan Santun (5S)",
      deskripsi: "Video pengenalan budaya 5S di lingkungan sekolah agar tercipta suasana yang ramah dan penuh rasa hormat.",
      kelas: "Semua Fase",
      tipe: "youtube",
      url: "lH_vqcd5RPQ",
      contoh: false
    },
    {
      judul: "Video Perkenalan Guru PAI",
      deskripsi: "Sapaan dan perkenalan Guru Pendidikan Agama Islam untuk siswa baru.",
      kelas: "Semua Fase",
      tipe: "youtube",
      url: "",
      contoh: true
    },
    {
      judul: "Tata Cara Wudhu untuk Anak",
      deskripsi: "Video panduan wudhu yang disesuaikan untuk kebutuhan siswa SLB.",
      kelas: "Semua Fase",
      tipe: "youtube",
      url: "",
      contoh: true
    }
  ]
};
