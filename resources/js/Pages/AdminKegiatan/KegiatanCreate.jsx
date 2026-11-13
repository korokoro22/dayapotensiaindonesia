import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function KegiatanCreate({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        judul: "",
        tanggal: "",
        isi: "",
        gambar: null,
    });

    function handleSubmit(e) {
        e.preventDefault();
        post("/manajemenkegiatan", {
            forceFormData: true,
        });
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl leading-tight">
                    Tambah Kegiatan
                </h2>
            }
        >
            <Head title="Tambah Kegiatan" />
            <div className="py-12 px-4 sm:px-0">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded px-6 sm:px-8 py-6 text-black">
                        <form
                            className="flex flex-col gap-y-6"
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
                                {errors.judul && (
                                    <p className="text-red-600 text-sm">{errors.judul}</p>
                                )}
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="tanggal" className="font-semibold">
                                    Tanggal Kegiatan
                                </label>
                                <input
                                    type="date"
                                    id="tanggal"
                                    className="border-[#D1D1D1] rounded-md w-full md:w-1/2"
                                    value={data.tanggal}
                                    onChange={(e) =>
                                        setData("tanggal", e.target.value)
                                    }
                                />
                                {errors.tanggal && (
                                    <p className="text-red-600 text-sm">{errors.tanggal}</p>
                                )}
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="isi" className="font-semibold">
                                    Isi Kegiatan
                                </label>
                                <textarea
                                    placeholder="Masukkan Isi Kegiatan"
                                    id="isi"
                                    rows={6}
                                    className="border-[#D1D1D1] rounded-md resize-y"
                                    value={data.isi}
                                    onChange={(e) =>
                                        setData("isi", e.target.value)
                                    }
                                ></textarea>
                                {errors.isi && (
                                    <p className="text-red-600 text-sm">{errors.isi}</p>
                                )}
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="gambar" className="font-semibold">
                                    Gambar
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    id="gambar"
                                    className="border-[#D1D1D1] rounded-md w-full md:w-1/2 p-1.5"
                                    onChange={(e) =>
                                        setData("gambar", e.target.files[0] || null)
                                    }
                                />
                                {errors.gambar && (
                                    <p className="text-red-600 text-sm">{errors.gambar}</p>
                                )}
                            </div>
                            <div className="flex gap-x-4 mt-4">
                                <Link
                                    href="/manajemenkegiatan"
                                    className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md font-medium"
                                >
                                    Kembali
                                </Link>
                                <button
                                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium disabled:opacity-50"
                                    type="submit"
                                    disabled={processing}
                                >
                                    {processing ? "Menyimpan..." : "Simpan"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
