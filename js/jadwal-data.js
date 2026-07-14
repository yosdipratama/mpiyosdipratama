/**
 * =====================================================================
 * DATA JADWAL KEGIATAN MPLS
 * SLB Negeri 1 Ampek Angkek
 * =====================================================================
 * Setiap hari berisi daftar kegiatan dengan kolom: waktu, kegiatan,
 * materi/uraian, penanggung jawab (bisa lebih dari satu nama), dan
 * metode. Tambahkan atau ubah hari cukup dengan mengedit data ini,
 * tidak perlu mengubah index.html.
 * =====================================================================
 */

const JADWAL_DATA = [
  {
    hari: 1,
    label: "Hari Pertama - Senin",
    sudahAda: true,
    kegiatan: [
      {
        waktu: "08.00 - 09.30",
        kegiatan: "Pengenalan Diri & Sekolah",
        materi: "Perkenalan guru, tenaga kependidikan, tata tertib sekolah",
        penanggungJawab: ["Wali Kelas"],
        metode: "Ceramah & Tanya Jawab"
      },
      {
        waktu: "09.30 - 10.00",
        kegiatan: "Istirahat",
        materi: "",
        penanggungJawab: [],
        metode: "-"
      },
      {
        waktu: "10.00 - 11.00",
        kegiatan: "Didalam Kelas",
        materi: "Kebijakan dari guru kelas",
        penanggungJawab: ["Wali Kelas"],
        metode: "-"
      },
      {
        waktu: "11.00",
        kegiatan: "Pulang",
        materi: "",
        penanggungJawab: [],
        metode: "-"
      }
    ]
  },
  {
    hari: 2,
    label: "Hari Kedua - Selasa",
    sudahAda: true,
    kegiatan: [
      {
        waktu: "08.00 - 08.30",
        kegiatan: "Pagi Ceria",
        materi: "Senam irama adaptif, tepuk semangat",
        penanggungJawab: ["Siska Permata Sari, S.Pd", "Herlin Lusiana, S.Pd", "Salnita, S.Pd", "Gusti Lusita, S.Pd", "Rian Ananda Putra, S.Pd"],
        metode: "Gerak & Lagu"
      },
      {
        waktu: "08.30 - 09.30",
        kegiatan: "7 Kebiasaan Anak Indonesia Hebat",
        materi: "Bangun pagi, beribadah, berolahraga, makan sehat dan bergizi, gemar belajar, bermasyarakat",
        penanggungJawab: ["Siska Permata Sari, S.Pd", "Herlin Lusiana, S.Pd", "Salnita, S.Pd", "Gusti Lusita, S.Pd", "Rian Ananda Putra, S.Pd"],
        metode: "Demonstrasi, Video, Diskusi"
      },
      {
        waktu: "09.30 - 10.00",
        kegiatan: "Istirahat",
        materi: "",
        penanggungJawab: [],
        metode: "-"
      },
      {
        waktu: "10.00 - 11.00",
        kegiatan: "Didalam Kelas",
        materi: "Kebijakan dari guru kelas",
        penanggungJawab: ["Wali Kelas"],
        metode: "-"
      },
      {
        waktu: "11.00",
        kegiatan: "Pulang",
        materi: "",
        penanggungJawab: [],
        metode: "-"
      }
    ]
  },
  {
    hari: 3,
    label: "Hari Ketiga - Rabu",
    sudahAda: true,
    kegiatan: [
      {
        waktu: "07.30 - 08.00",
        kegiatan: "Pagi Ceria",
        materi: "Gerak lagu 'Anak Indonesia Hebat', senam irama",
        penanggungJawab: ["Yoga Saputra, S.Pd", "Ernalinda, S.Pd", "Wirna Eryenti Aries, S.Pd", "Leni Nelvia, S.Pd"],
        metode: "Gerak & Lagu"
      },
      {
        waktu: "08.30 - 09.30",
        kegiatan: "Pengenalan Diri dan Tata Tertib Sekolah",
        materi: "Pengenalan tata tertib sekolah",
        penanggungJawab: ["Yoga Saputra, S.Pd", "Ernalinda, S.Pd", "Wirna Eryenti Aries, S.Pd", "Leni Nelvia, S.Pd"],
        metode: "Studi Kasus & Diskusi Kelompok"
      },
      {
        waktu: "09.30 - 10.00",
        kegiatan: "Istirahat",
        materi: "",
        penanggungJawab: [],
        metode: "-"
      },
      {
        waktu: "10.00 - 11.00",
        kegiatan: "Didalam Kelas",
        materi: "Kebijakan dari guru kelas",
        penanggungJawab: ["Wali Kelas"],
        metode: "-"
      },
      {
        waktu: "11.00",
        kegiatan: "Pulang",
        materi: "",
        penanggungJawab: [],
        metode: "-"
      }
    ]
  },
  {
    hari: 4,
    label: "Hari Keempat - Kamis",
    sudahAda: true,
    kegiatan: [
      {
        waktu: "08.00 - 08.30",
        kegiatan: "Pagi Ceria",
        materi: "Jalan sehat keliling lingkungan sekolah, doa bersama",
        penanggungJawab: ["Elza Dianora, S.Pd", "Leni Fariani, S.Pd", "Misneli, S.Pd", "Yulia Rahmi, S.Pd"],
        metode: "Gerak Fisik Adaptif"
      },
      {
        waktu: "08.30 - 09.30",
        kegiatan: "Sopan Santun Bermedia Sosial",
        materi: "Apa itu media sosial, dampak positif & negatif media sosial",
        penanggungJawab: ["Elza Dianora, S.Pd", "Leni Fariani, S.Pd", "Misneli, S.Pd", "Yulia Rahmi, S.Pd"],
        metode: "Video Edukatif & Diskusi"
      },
      {
        waktu: "",
        kegiatan: "",
        materi: "Etika komunikasi daring: cara mengirim pesan sopan, bijak berbagi foto/video, peduli perasaan orang lain",
        penanggungJawab: ["Elza Dianora, S.Pd", "Leni Fariani, S.Pd", "Misneli, S.Pd", "Yulia Rahmi, S.Pd"],
        metode: "Praktik Langsung"
      },
      {
        waktu: "",
        kegiatan: "",
        materi: "Praktik baik: konten positif, bahaya hoaks, cyberbullying, privasi digital; studi kasus sederhana",
        penanggungJawab: ["Elza Dianora, S.Pd", "Leni Fariani, S.Pd", "Misneli, S.Pd", "Yulia Rahmi, S.Pd"],
        metode: "Studi Kasus & Diskusi Kelompok"
      },
      {
        waktu: "09.30 - 10.00",
        kegiatan: "Istirahat",
        materi: "",
        penanggungJawab: [],
        metode: "-"
      },
      {
        waktu: "10.00 - 11.00",
        kegiatan: "Didalam Kelas",
        materi: "Kebijakan dari guru kelas",
        penanggungJawab: ["Wali Kelas"],
        metode: "-"
      },
      {
        waktu: "11.00",
        kegiatan: "Pulang",
        materi: "",
        penanggungJawab: [],
        metode: "-"
      }
    ]
  },
  {
    hari: 5,
    label: "Hari Kelima - Jumat",
    sudahAda: true,
    kegiatan: [
      {
        waktu: "07.45 - 08.20",
        kegiatan: "Kultum",
        materi: "Kultum dan bacaan doa harian",
        penanggungJawab: ["Fauziah Rahmi, S.Pd", "Yosdi Pratama, S.Pd", "Husni Watul Hasanah, S.Pd", "Devi Susilawati, S.Pd"],
        metode: "Ceramah dan tanya jawab"
      },
      {
        waktu: "08.20 - 09.30",
        kegiatan: "Budaya 5S",
        materi: "Pengenalan nilai 5S, simulasi salam, senyum, sapa, sopan dan santun",
        penanggungJawab: ["Fauziah Rahmi, S.Pd", "Yosdi Pratama, S.Pd", "Husni Watul Hasanah, S.Pd", "Devi Susilawati, S.Pd"],
        metode: "Kegiatan Keagamaan"
      },
      {
        waktu: "09.30 - 10.00",
        kegiatan: "Istirahat",
        materi: "",
        penanggungJawab: [],
        metode: "-"
      },
      {
        waktu: "10.15 - 10.30",
        kegiatan: "Penutupan MPLS",
        materi: "Sambutan penutup Kepala Sekolah",
        penanggungJawab: ["Kepala Sekolah & Panitia"],
        metode: "Seremonial & Perayaan"
      },
      {
        waktu: "11.00",
        kegiatan: "Pulang",
        materi: "Penjemputan tertib & perpisahan hangat",
        penanggungJawab: ["Seluruh Guru"],
        metode: "-"
      }
    ]
  }
];
