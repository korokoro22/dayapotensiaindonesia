import Industri from "../assets/Layanan/industri.jpg";
import Klinis from "../assets/Layanan/klinis.jpg";
import Forensik from "../assets/Layanan/forensik.jpg";
import Pendidikan from "../assets/Layanan/pendidikan.jpg";
import Sosial from "../assets/Layanan/sosial.jpg";
import Lainnya from "../assets/Layanan/lainnya.jpg";

const layananDetailMap = {
    industri: {
        id: 1,
        key: "industri",
        category: "SDM & Organisasi",
        title: "Psikologi Industri & Organisasi",
        shortTitle: "Industri & Organisasi",
        link: "/industri",
        image: Industri,
        summary:
            "Pemetaan kompetensi, rekrutmen & seleksi, analisis jabatan, skrining psikologis karyawan, hingga Employee Assistance Program (EAP).",
        heroLead:
            "Mitra strategis perusahaan, instansi pemerintah, dan organisasi dalam memilih, mengembangkan, dan menjaga ketangguhan psikologis sumber daya manusia.",
        audience: [
            "Perusahaan swasta, BUMN, dan industri F&B / pertambangan",
            "Instansi pemerintah, kementerian, dan lembaga publik",
            "Tim HRD, pimpinan divisi, hingga seluruh karyawan",
        ],
        highlights: [
            "Laporan asesmen terukur & berstandar psikometri",
            "Pendekatan adaptif sesuai budaya dan kebutuhan organisasi",
            "Kerahasiaan konseling EAP dijamin Kode Etik HIMPSI",
        ],
        items: [
            {
                title: "Pemetaan Kompetensi & Potensi",
                desc: "Asesmen mendalam untuk memetakan kekuatan, potensi kepemimpinan, dan kesesuaian peran karyawan maupun pegawai instansi.",
            },
            {
                title: "Rekrutmen & Penempatan SDM",
                desc: "Proses psikotes, wawancara kompetensi, dan seleksi terstruktur agar kandidat yang ditempatkan sesuai tuntutan jabatan.",
            },
            {
                title: "Training Development & Outdoor Activity",
                desc: "Program pelatihan pengembangan kompetensi dan kebersamaan tim melalui lokakarya interaktif serta kegiatan luar ruang.",
            },
            {
                title: "Peningkatan Produktivitas Organisasi",
                desc: "Intervensi psikologis kerja untuk memperkuat motivasi, komunikasi tim, dan budaya kerja yang sehat serta produktif.",
            },
            {
                title: "Analisis Jabatan & Analisis Beban Kerja",
                desc: "Kajian sistematis uraian tugas, persyaratan kompetensi jabatan, dan distribusi beban kerja unit organisasi.",
            },
            {
                title: "Individual Development Plan (IDP)",
                desc: "Penyusunan rencana pengembangan karier dan kompetensi personal karyawan yang terukur langsung dari hasil asesmen.",
            },
            {
                title: "Skrining Kondisi Psikologis Karyawan",
                desc: "Pemeriksaan berkala untuk mendeteksi tingkat stres, risiko burnout, dan kesehatan mental pekerja sebelum mengganggu kinerja.",
            },
            {
                title: "Employee Assistance Program (EAP)",
                desc: "Layanan konseling rahasia bagi karyawan, tersedia secara tatap muka maupun daring, untuk isu pekerjaan maupun pribadi.",
            },
        ],
    },
    klinis: {
        id: 2,
        key: "klinis",
        category: "Kesehatan Mental & Keluarga",
        title: "Psikologi Klinis",
        shortTitle: "Psikologi Klinis",
        link: "/klinis",
        image: Klinis,
        summary:
            "Deteksi dini tumbuh kembang anak, konseling individu/keluarga, Enrich Marriage Assessment, dan terapi Anak Berkebutuhan Khusus.",
        heroLead:
            "Ruang aman, empatik, dan berbasis bukti ilmiah untuk mendampingi individu, pasangan, anak, dan keluarga pulih serta bertumbuh optimal.",
        audience: [
            "Anak, remaja, dan orang tua dalam pendampingan tumbuh kembang",
            "Pasangan pra-nikah maupun suami-istri",
            "Individu dewasa yang menghadapi kecemasan, stres, trauma, atau dinamika relasi",
        ],
        highlights: [
            "Ruang konseling privat & ruang khusus ramah anak",
            "Ditangani Psikolog Klinis berizin praktik aktif",
            "Menggunakan Enrich Marriage Assessment terstandar",
        ],
        items: [
            {
                title: "Deteksi Dini Tumbuh Kembang Anak",
                desc: "Pemeriksaan komprehensif aspek kognitif, bahasa, motorik, sosial, dan emosi anak untuk langkah stimulasi lebih dini.",
            },
            {
                title: "Konseling & Terapi Anak, Pasangan, dan Keluarga",
                desc: "Pendampingan psikologis bagi keluarga terkait pola asuh, konflik relasi, komunikasi pasangan, dan dinamika rumah tangga.",
            },
            {
                title: "Penanganan Isu Psikologis Individu",
                desc: "Konseling dan psikoterapi bagi individu yang mengalami kecemasan, gangguan suasana hati, depresi, trauma, maupun tekanan hidup sehari-hari.",
            },
            {
                title: "Konseling Kelompok",
                desc: "Sesi pemulihan dan penguatan bersama dalam kelompok kecil bagi peserta yang menghadapi tantangan serupa.",
            },
            {
                title: "Enrich Marriage Assessment",
                desc: "Asesmen relasi pasangan untuk memetakan kekuatan dan area pertumbuhan pernikahan—mulai komunikasi, penyelesaian konflik, keuangan, hingga pengasuhan—dilanjutkan sesi umpan balik bersama psikolog.",
            },
            {
                title: "Terapi Anak Berkebutuhan Khusus",
                desc: "Program terapi psikologis terstruktur guna mendukung perkembangan perilaku, regulasi emosi, keterampilan sosial, dan kemandirian anak disertai pendampingan orang tua.",
            },
        ],
    },
    pendidikan: {
        id: 3,
        key: "pendidikan",
        category: "Siswa, Guru & Sekolah",
        title: "Psikologi Pendidikan",
        shortTitle: "Psikologi Pendidikan",
        link: "/pendidikan",
        image: Pendidikan,
        summary:
            "Tes minat bakat & penjurusan, asesmen kesiapan sekolah SD, identifikasi kesulitan belajar, serta pendampingan pendidikan inklusif.",
        heroLead:
            "Membantu peserta didik, orang tua, dan institusi pendidikan memahami potensi belajar serta menciptakan ekosistem sekolah yang suportif dan inklusif.",
        audience: [
            "Anak usia prasekolah hingga siswa SMA/calon mahasiswa",
            "Sekolah reguler maupun penyelenggara pendidikan inklusif",
            "Orang tua dan tenaga pendidik/guru pendamping",
        ],
        highlights: [
            "Alat tes minat bakat & kesiapan sekolah tervalidasi",
            "Laporan hasil pemeriksaan disertai rekomendasi praktis bagi guru & orang tua",
            "Pendampingan sistem layanan pendidikan inklusif",
        ],
        items: [
            {
                title: "Tes Minat Bakat & Penjurusan",
                desc: "Pemetaan potensi kecerdasan, minat akademik, dan kecenderungan karier guna menentukan pilihan jurusan maupun rencana studi secara tepat.",
            },
            {
                title: "Asesmen Kesiapan Sekolah",
                desc: "Evaluasi kematangan kognitif, kemandirian sosial-emosional, dan kesiapan motorik anak menjelang memasuki jenjang Sekolah Dasar (SD).",
            },
            {
                title: "Identifikasi Kesulitan Belajar",
                desc: "Pemeriksaan menyeluruh untuk menemukan akar hambatan belajar pada siswa beserta strategi intervensi belajar yang sesuai.",
            },
            {
                title: "Pendampingan ABK & Pendidikan Inklusif",
                desc: "Dukungan psikologis menyeluruh bagi anak berkebutuhan khusus, guru kelas, dan orang tua dalam membangun sistem belajar yang inklusif.",
            },
        ],
    },
    forensik: {
        id: 4,
        key: "forensik",
        category: "Pemeriksaan & Pendampingan Hukum",
        title: "Psikologi Forensik",
        shortTitle: "Psikologi Forensik",
        link: "/forensik",
        image: Forensik,
        summary:
            "Pemeriksaan psikologis pasca kasus hukum, pendampingan korban tindak pidana, kolaborasi aparat hukum, dan pelatihan kompetensi.",
        heroLead:
            "Memberikan layanan pemeriksaan, keterangan psikologis objektif, serta pendampingan yang manusiawi dalam proses penegakan hukum bersama tenaga bersertifikasi.",
        audience: [
            "Individu, saksi, dan korban pasca tindak pidana",
            "Aparat penegak hukum, lembaga perlindungan saksi/korban, dan LBH",
            "Praktisi maupun instansi yang membutuhkan pelatihan forensik",
        ],
        highlights: [
            "Didukung Psikolog Forensik bersertifikasi BNSP",
            "Berpengalaman mendampingi lembaga negara & aparat hukum",
            "Pendekatan ramah korban & berbasis standar etika profesi",
        ],
        items: [
            {
                title: "Pemeriksaan Psikologis Kasus Hukum",
                desc: "Asesmen psikologis mendalam dan objektif untuk mengetahui kondisi psikologis individu terkait proses atau kasus hukum yang dialami.",
            },
            {
                title: "Pendampingan Individu Pasca Tindak Pidana",
                desc: "Pendampingan psikologis berkelanjutan untuk menjaga stabilitas emosi, pemulihan trauma, dan keamanan psikis korban maupun saksi.",
            },
            {
                title: "Kolaborasi & Komunikasi dengan Aparat Hukum",
                desc: "Pemberian bantuan profesional bersama kepolisian, jaksa, dan lembaga terkait guna menemukan kejelasan serta kronologis psikologis suatu kasus.",
            },
            {
                title: "Pelatihan Kompetensi Psikologi Forensik",
                desc: "Pembekalan teknis dan konseptual bidang psikologi forensik bagi psikolog, asisten, mahasiswa, maupun aparat pendamping.",
            },
        ],
    },
    sosial: {
        id: 5,
        key: "sosial",
        category: "Komunitas, CSR & Kedaruratan",
        title: "Psikologi Sosial & Pengabdian",
        shortTitle: "Psikologi Sosial",
        link: "/sosial",
        image: Sosial,
        summary:
            "Pendampingan pascabencana & krisis, edukasi kesehatan mental, pelatihan relawan, program CSR, hingga layanan inklusif disabilitas.",
        heroLead:
            "Menghadirkan psikologi di tengah masyarakat melalui intervensi krisis kemanusiaan, edukasi ruang publik, kolaborasi CSR perusahaan, dan layanan inklusif.",
        audience: [
            "Komunitas masyarakat terdampak bencana dan situasi krisis",
            "Perusahaan penyelenggara program CSR Kesehatan Mental",
            "Relawan kemanusiaan, kampus, lembaga publik, dan komunitas disabilitas",
        ],
        highlights: [
            "Berbasis panduan IASC MHPSS dan UU No. 23 Tahun 2022",
            "Terintegrasi dengan unit krisis MOKSA DPI sejak 2023",
            "Berpengalaman dalam respon bencana sejak 2018",
        ],
        items: [
            {
                title: "Pendampingan Pasca Bencana & Krisis",
                desc: "Asesmen kebutuhan cepat, dukungan psikologis awal (PFA), konseling krisis, serta pembentukan kelompok dukungan masyarakat.",
            },
            {
                title: "Edukasi Kesehatan Mental",
                desc: "Penyelenggaraan seminar, talkshow, webinar, dan psikoedukasi praktis bagi masyarakat luas maupun instansi.",
            },
            {
                title: "Pelatihan Relawan & Kader Komunitas",
                desc: "Pembekalan keterampilan dukungan psikologis awal bagi relawan, kader desa/komunitas, dan pendamping sosial.",
            },
            {
                title: "Program CSR Kesehatan Mental",
                desc: "Perancangan dan pelaksanaan program pemberdayaan kesehatan mental berkelanjutan bagi masyarakat di sekitar wilayah operasional perusahaan.",
            },
            {
                title: "Psikologi di Ruang Publik",
                desc: "Layanan edukasi, kampanye kesadaran mental, dan konseling singkat yang mudah dijangkau di festival maupun acara publik.",
            },
            {
                title: "Layanan Inklusif Disabilitas",
                desc: "Dukungan kesehatan mental dan psikoedukasi yang aksesibel bagi teman-teman disabilitas bersama mitra inklusi.",
            },
        ],
    },
    lainnya: {
        id: 6,
        key: "lainnya",
        category: "Pelatihan & Pengembangan Diri",
        title: "Pelatihan & Pengembangan Kompetensi",
        shortTitle: "Pelatihan & Lainnya",
        link: "/lainnya",
        image: Lainnya,
        summary:
            "Training berstandar HIMPSI, program persiapan karier, peningkatan kompetensi lulusan psikologi, dan workshop khusus organisasi.",
        heroLead:
            "Program pelatihan dan peningkatan kapasitas diri terstandar untuk mahasiswa, lulusan psikologi, pencari kerja, maupun tim profesional perusahaan.",
        audience: [
            "Perusahaan dan instansi yang membutuhkan in-house training tematik",
            "Mahasiswa & lulusan sarjana psikologi (pengembangan tester/observer)",
            "Peserta persiapan karier dan pengembangan diri individu",
        ],
        highlights: [
            "Terdaftar resmi sebagai penyelenggara training berstandar HIMPSI",
            "Kurikulum aplikatif berbasis praktik lapangan psikologi",
            "Materi dapat disesuaikan (tailor-made) dengan kebutuhan mitra",
        ],
        items: [
            {
                title: "Pelatihan & Seminar Berstandar HIMPSI",
                desc: "Program pelatihan pengembangan kapasitas diri, kepemimpinan, komunikasi, dan kesejahteraan kerja sesuai standar Himpunan Psikologi Indonesia.",
            },
            {
                title: "Persiapan Karier & Pemetaan Arah Kerja",
                desc: "Pembekalan bagi pelajar, mahasiswa tingkat akhir, dan pencari kerja dalam memahami potensi diri serta merancang langkah karier.",
            },
            {
                title: "Peningkatan Kompetensi Lulusan Psikologi",
                desc: "Pelatihan keterampilan praktis administrasi pemeriksaan psikologi, observasi, skoring, wawancara, dan etika profesi.",
            },
            {
                title: "Workshop & In-House Training Khusus",
                desc: "Lokakarya yang disesuaikan dengan tantangan spesifik organisasi, seperti manajemen stres kerja, pencegahan burnout, dan kerja sama tim.",
            },
        ],
    },
};

const layananOrder = [
    "industri",
    "klinis",
    "pendidikan",
    "forensik",
    "sosial",
    "lainnya",
];

const layananData = () =>
    layananOrder.map((key) => {
        const item = layananDetailMap[key];
        return {
            id: item.id,
            key: item.key,
            category: item.category,
            title: item.title,
            shortTitle: item.shortTitle,
            body: item.summary,
            image: item.image,
            link: item.link,
            itemCount: item.items.length,
            previewItems: item.items.slice(0, 3).map((entry) => entry.title),
        };
    });

export { layananData, layananDetailMap, layananOrder };
