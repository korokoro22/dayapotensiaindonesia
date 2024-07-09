import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function KegiatanEdit({ auth, kegiatan }) {
    const { data, setData, errors, post, progress } = useForm({
        judul: kegiatan.judul,
        tanggal: kegiatan.tanggal,
        isi: kegiatan.isi,
        gambar: null,
    });

    useEffect(() => {
        setData({
            judul: kegiatan.judul,
            tanggal: kegiatan.tanggal,
            isi: kegiatan.isi,
            gambar: null,
        });
    }, [kegiatan]);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("judul", data.judul);
        formData.append("tanggal", data.tanggal);
        formData.append("isi", data.isi);
        if (data.gambar) {
            formData.append("gambar", data.gambar);
        }
        formData.append("_method", "PUT");

        router.post(`/manajemenkegiatan/${kegiatan.id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Kegiatan
                </h2>
            }
        >
            <Head title="Edit Kegiatan" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded px-8 py-5">
                        <form
                            className="flex flex-col gap-y-7"
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                        >
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="judul" className="font-semibold">
                                    Judul Kegiatan
                                </label>
                                <input
                                    type="text"
                                    placeholder="Masukkan Judul Kegiatan"
                                    id="judul"
                                    className="border-[#D1D1D1] rounded-md"
                                    value={data.judul}
                                    onChange={(e) =>
                                        setData("judul", e.target.value)
                                    }
                                />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="tanggal" className="font-semibold">
                                    Tanggal Kegiatan
                                </label>
                                <input
                                    type="date"
                                    placeholder="Masukkan Tanggal Kegiatan"
                                    id="tanggal"
                                    className="border-[#D1D1D1] rounded-md w-1/2"
                                    value={data.tanggal}
                                    onChange={(e) =>
                                        setData("tanggal", e.target.value)
                                    }
                                />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="isi" className="font-semibold">
                                    Isi Kegiatan
                                </label>
                                <textarea
                                    placeholder="Masukkan Isi Kegiatan"
                                    id="isi"
                                    className="border-[#D1D1D1] rounded-md resize-none"
                                    value={data.isi}
                                    onChange={(e) =>
                                        setData("isi", e.target.value)
                                    }
                                ></textarea>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="gambar" className="font-semibold">
                                    Gambar
                                </label>
                                <input
                                    type="file"
                                    id="gambar"
                                    className="border-[#D1D1D1] rounded-md w-1/2"
                                    onChange={(e) =>
                                        setData("gambar", e.target.files[0])
                                    }
                                />
                            </div>
                            <div className="flex gap-x-4 mt-8">
                                <Link
                                    href="/manajemenartikel"
                                    className="bg-gray-200 px-3 py-1 rounded-md"
                                >
                                    Kembali
                                </Link>
                                <button
                                    className="bg-green-400 px-3 py-1 rounded-md"
                                    type="submit"
                                >
                                    Simpan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
