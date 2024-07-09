import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
{/* <img src={`http://127.0.0.1:8000/storage/${kegiatan.gambar}`} alt="" className="mx-auto w-3/4 drop-shadow-md" /> */}


export default function KegiatanView({auth, kegiatan}) {
    return(
        <AuthenticatedLayout
        user={auth.user}
        header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Tampilan Kegiatan
            </h2>
        }>
        <Head title="Tampilan Kegiatan"/>
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-white py-6">
                <div className="max-w-5xl mx-auto">
                    <div className=" mb-4"><Link className=" bg-slate-200 py-2 px-4 rounded-lg" href="/manajemenkegiatan">Kembali</Link></div>
                    <div className="flex flex-col gap-y-8 pb-10 border-b-2 border-s-black">
                        <h1 className=" text-center font-black text-3xl">{kegiatan.judul}</h1>
                        <img src={`http://127.0.0.1:8000/storage/${kegiatan.gambar}`} alt="" className="mx-auto w-3/4 drop-shadow-md" />
                    </div>
                    <div className="pt-8">
                        <p><span className=" font-bold">({kegiatan.tanggal}) </span>{kegiatan.isi}</p>
                    </div>
                </div>
                
            </div>
        </div>
        </AuthenticatedLayout>
    )
}