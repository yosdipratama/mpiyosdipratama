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
      deskripsi: "Slide pengenalan budaya 5S, simulasi role-play etika makan, hingga penutup materi oleh Guru PAI SLBN 1 Ampek Angkek.",
      kelas: "Semua Fase",
      tipe: "gambar",
      url: [
        "assets/materi/slide/budaya-5s-1.jpg",
        "assets/materi/slide/budaya-5s-2.jpg",
        "assets/materi/slide/budaya-5s-3.jpg",
        "assets/materi/slide/budaya-5s-4.jpg",
        "assets/materi/slide/budaya-5s-5.jpg",
        "assets/materi/slide/budaya-5s-6.jpg",
        "assets/materi/slide/budaya-5s-7.jpg"
      ],
      contoh: false
    },
    {
      judul: "Mengenal Rukun Islam",
      deskripsi: "Slide pengenalan lima Rukun Islam dengan gambar sederhana dan mudah dipahami untuk siswa SLB.",
      kelas: "Semua Fase",
      tipe: "gambar",
      url: "assets/materi/slide/rukun-islam.jpg",
      contoh: false
    },
    {
      judul: "Adab Masuk Sekolah",
      deskripsi: "Materi slide tentang adab dan doa saat masuk lingkungan sekolah baru.",
      kelas: "Fase A-C",
      tipe: "gambar",
      url: "assets/materi/slide/adab-masuk-sekolah.jpg",
      contoh: false
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
      judul: "Pengarahan Hari Pertama MPLS",
      deskripsi: "Kepala sekolah dan guru memberikan pengarahan kepada siswa baru pada hari pertama MPLS, Senin 13 Juli 2026.",
      url: "assets/materi/foto/pengarahan-hari-pertama.jpg",
      contoh: false
    },
    {
      judul: "Siswa Menunggu Kegiatan MPLS",
      deskripsi: "Siswa baru berkumpul di selasar sekolah menunggu rangkaian kegiatan MPLS hari pertama.",
      url: "assets/materi/foto/siswa-menunggu-mpls.jpg",
      contoh: false
    },
    {
      judul: "Kegiatan Pagi Ceria",
      deskripsi: "Keceriaan siswa saat kegiatan Pagi Ceria di selasar sekolah, Selasa 14 Juli 2026.",
      url: "assets/materi/foto/kegiatan-pagi-ceria.jpg",
      contoh: false
    },
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
      judul: "Muhasabah Diri 1",
      deskripsi: "Video muhasabah diri untuk mengajak siswa merenungi dan mengevaluasi diri dalam bingkai nilai-nilai keislaman.",
      kelas: "Semua Fase",
      tipe: "youtube",
      url: "n2UQ0xGZq7U",
      contoh: false
    },
    {
      judul: "Muhasabah Diri 2",
      deskripsi: "Video muhasabah diri tambahan untuk mengajak siswa merenungi dan mengevaluasi diri dalam bingkai nilai-nilai keislaman.",
      kelas: "Semua Fase",
      tipe: "youtube",
      url: "kuRjeu2n7YI",
      contoh: false
    },
    {
      judul: "Muhasabah Diri 3",
      deskripsi: "Video muhasabah diri tambahan untuk mengajak siswa merenungi dan mengevaluasi diri dalam bingkai nilai-nilai keislaman.",
      kelas: "Semua Fase",
      tipe: "youtube",
      url: "V7zgrjlMtRU",
      contoh: false
    },
    {
      judul: "Ice Breaking 1",
      deskripsi: "Video ice breaking untuk mencairkan suasana dan menyemangati siswa baru selama kegiatan MPLS.",
      kelas: "Semua Fase",
      tipe: "youtube",
      url: "5gckoJP9HZ4",
      contoh: false
    },
    {
      judul: "Ice Breaking 2",
      deskripsi: "Video ice breaking tambahan untuk mencairkan suasana dan menyemangati siswa baru selama kegiatan MPLS.",
      kelas: "Semua Fase",
      tipe: "youtube",
      url: "fy_54KOS0UI",
      contoh: false
    },
    {
      judul: "Mengenal Rukun Islam",
      deskripsi: "Video pengenalan lima Rukun Islam untuk siswa baru, melengkapi materi slide Mengenal Rukun Islam.",
      kelas: "Semua Fase",
      tipe: "youtube",
      url: "JYRgjENNkw8",
      contoh: false
    },
    {
      judul: "Tata Cara Berwudhu",
      deskripsi: "Video panduan tata cara berwudhu yang benar untuk siswa baru.",
      kelas: "Semua Fase",
      tipe: "youtube",
      url: "GKzTsjOF0qk",
      contoh: false
    },
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
      deskripsi: "Sapaan dan perkenalan Guru Pendidikan Agama Islam, Yosdi Pratama, S.Pd, untuk siswa baru.",
      kelas: "Semua Fase",
      tipe: "file",
      url: "assets/materi/video/perkenalan-guru-pai.mp4",
      contoh: false
    }
  ]
};
