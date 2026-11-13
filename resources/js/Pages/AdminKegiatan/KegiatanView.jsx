import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
{/* <img src={`http://127.0.0.1:8000/storage/${kegiatan.gambar}`} alt="" className="mx-auto w-3/4 drop-shadow-md" /> */}


export default function KegiatanView({auth, kegiatan}) {
    return(
        <AuthenticatedLayout
        user={auth.user}
        header={
            <h2 className="font-semibold text-xl leading-tight">
                Tampilan Kegiatan
            </h2>
        }>
        <Head title="Tampilan Kegiatan"/>
        <div className="py-12 px-4 sm:px-0">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-white py-6 px-6 rounded shadow-sm text-black">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-6">
                        <Link className="bg-slate-200 hover:bg-slate-300 py-2 px-4 rounded-lg inline-block font-medium" href="/manajemenkegiatan">
                            Kembali
                        </Link>
                    </div>
                    <div className="flex flex-col gap-y-8 pb-10 border-b-2 border-black">
                        <h1 className="text-center font-black text-2xl md:text-3xl">{kegiatan.judul}</h1>
                        <img src={`/storage/${kegiatan.gambar}`} alt={kegiatan.judul} className="mx-auto w-full max-w-2xl rounded-lg drop-shadow-md object-cover" />
                    </div>
                    <div className="pt-8">
                        <p className="whitespace-pre-line leading-relaxed text-justify">
                            <span className="font-bold">({kegiatan.tanggal}) </span>
                            {kegiatan.isi}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </AuthenticatedLayout>
    )
}