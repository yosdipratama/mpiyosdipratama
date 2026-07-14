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
    label: "Hari Pertama",
    sudahAda: false
  },
  {
    hari: 2,
    label: "Hari Kedua",
    sudahAda: false
  },
  {
    hari: 3,
    label: "Hari Ketiga",
    sudahAda: false
  },
  {
    hari: 4,
    label: "Hari Keempat",
    sudahAda: false
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
