import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";

export default function ArtikelCreate({ auth }) {
    const { data, setData } = useForm({
        judul: "",
        tanggal: "",
        isi: "",
        gambar: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        router.post("/manajemenartikel", data);
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tambah Artikel
                </h2>
            }
        >
            <Head title="Tambah Artikel" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded px-8 py-5">
                        <form
                            action=""
                            className="flex flex-col gap-y-7"
                            onSubmit={handleSubmit}
                        >
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="" className="font-semibold">
                                    Judul Artikel
                                </label>
                                <input
                                    type="text"
                                    placeholder="Masukkan Judul Artikel"
                                    id="judul"
                                    className="border-[#D1D1D1] rounded-md"
                                    value={data.judul}
                                    onChange={(e) =>
                                        setData("judul", e.target.value)
                                    }
                                />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="" className="font-semibold">
                                    Tanggal Artikel
                                </label>
                                <input
                                    type="date"
                                    placeholder="Masukkan Tanggal Artikel"
                                    id="tanggal"
                                    className="border-[#D1D1D1] rounded-md w-1/2"
                                    value={data.tanggal}
                                    onChange={(e) =>
                                        setData("tanggal", e.target.value)
                                    }
                                />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="" className="font-semibold">
                                    Isi Artikel
                                </label>
                                <textarea
                                    placeholder="Masukkan Isi Artikel"
                                    id="isi"
                                    className="border-[#D1D1D1] rounded-md resize-none"
                                    value={data.isi}
                                    onChange={(e) =>
                                        setData("isi", e.target.value)
                                    }
                                ></textarea>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="" className="font-semibold">
                                    Gambar
                                </label>
                                <input
                                    type="file"
                                    placeholder="Masukkan Tanggal Artikel"
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
