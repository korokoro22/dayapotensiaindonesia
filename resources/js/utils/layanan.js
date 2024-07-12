import Industri from "../assets/Layanan/industri.jpg"
import Klinis from "../assets/Layanan/klinis.jpg"
import Forensik from "../assets/Layanan/forensik.jpg"
import Pendidikan from "../assets/Layanan/pendidikan.jpg"
import Sosial from "../assets/Layanan/sosial.jpg"
import Lainnya from "../assets/Layanan/lainnya.jpg"


const layananData = () =>([
    {
        id:1,
        title:"Psikologi Industri/Organisasi",
        body:"Melayani career planning, psikotes, potential review dan Organizational Development",
        image: Industri,
        link:"/industri"
    },
    {
        id:2,
        title:"Psikologi Klinis",
        body:"Konsultasi, Psychological Check Up, Asesmen Anak, Mental Health Checking, Konseling Kelompok, Tes untuk Anak Berkebutuhan Khusus",
        image: Klinis,
        link:"/klinis"
    },
    {
        id:3,
        title:"Psikologi Forensik",
        body:"melayani Pemeriksaan Psikologis dan Pendampingan Individu Pasca Tindak Pidana",
        image: Forensik,
        link:"/forensik"
    },
    {
        id:4,
        title:"Psikologi Pendidikan",
        body:"melayani Tes Minat Bakat, Tes Kesiapan Sekolah, dan Identifikasi Kesulitan Belajar",
        image: Pendidikan,
        link:"/pendidikan"
    },
    {
        id:5,
        title:"Jasa Bidang Psikologi Sosial",
        body:"melayani Dukungan Psikososial Pasca Bencana Dan Konflik Sosial dan Psikoedukasi Melalui Talkshow Dan Diskusi",
        image: Sosial,
        link:"/sosial"
    },
    {
        id:6,
        title:"Layanan Lainnya ",
        body:"Pelatihan & Seminar yang bertujuan untuk mengembangkan danmeningkatkan kompetensi individu",
        image: Lainnya,
        link:"/lainnya"
    }
]);

export {layananData};