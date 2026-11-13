// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
// import { Head, Link, router, useForm } from "@inertiajs/react";
// import { useEffect, useState } from "react";

// export default function ArtikelEdit({ auth, artikel }) {
//     const { data, setData, errors } = useForm({
//         judul: artikel.judul,
//         tanggal: artikel.tanggal,
//         isi: artikel.isi,
//         gambar: artikel.gambar,
//     });

//     useEffect(() => {
//         setData({
//             judul: artikel.judul,
//             tanggal: artikel.tanggal,
//             isi: artikel.isi,
//             gambar: artikel.gambar,
//         });
//     }, [artikel]);

//     // function handleChange(e) {
//     //     const key = e.target.id;
//     //     const value = e.target.value;
//     //     setValues((values) => ({
//     //         ...values,
//     //         [key]: value,
//     //     }));
//     // }

//     function handleSubmit(e) {
//         e.preventDefault();
//         router.put(`/manajemenartikel/${artikel.id}`, data);
//     }

//     return (
//         <AuthenticatedLayout
//             user={auth.user}
//             header={
//                 <h2 className="font-semibold text-xl text-gray-800 leading-tight">
//                     Edit Artikel
//                 </h2>
//             }
//         >
//             <Head title="Edit Artikel" />
//             <div className="py-12">
//                 <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//                     <div className="bg-white overflow-hidden shadow-sm sm:rounded px-8 py-5">
//                         <form
//                             action=""
//                             className="flex flex-col gap-y-7"
//                             onSubmit={handleSubmit}
//                             encType="multipart/form-data"
//                         >
//                             <div className="flex flex-col gap-y-2">
//                                 <label htmlFor="" className="font-semibold">
//                                     Judul Artikel
//                                 </label>
//                                 <input
//                                     type="text"
//                                     placeholder="Masukkan Judul Artikel"
//                                     id="judul"
//                                     className="border-[#D1D1D1] rounded-md"
//                                     value={data.judul}
//                                     onChange={(e) =>
//                                         setData("judul", e.target.value)
//                                     }
//                                 />
//                             </div>
//                             <div className="flex flex-col gap-y-2">
//                                 <label htmlFor="" className="font-semibold">
//                                     Tanggal Artikel
//                                 </label>
//                                 <input
//                                     type="date"
//                                     placeholder="Masukkan Tanggal Artikel"
//                                     id="tanggal"
//                                     className="border-[#D1D1D1] rounded-md w-1/2"
//                                     value={data.tanggal}
//                                     onChange={(e) =>
//                                         setData("tanggal", e.target.value)
//                                     }
//                                 />
//                             </div>
//                             <div className="flex flex-col gap-y-2">
//                                 <label htmlFor="" className="font-semibold">
//                                     Isi Artikel
//                                 </label>
//                                 <textarea
//                                     placeholder="Masukkan Isi Artikel"
//                                     id="isi"
//                                     className="border-[#D1D1D1] rounded-md resize-none"
//                                     value={data.isi}
//                                     onChange={(e) =>
//                                         setData("isi", e.target.value)
//                                     }
//                                 ></textarea>
//                             </div>
//                             <div className="flex flex-col gap-y-2">
//                                 <label htmlFor="" className="font-semibold">
//                                     Gambar
//                                 </label>
//                                 <input
//                                     type="file"
//                                     placeholder="Masukkan Tanggal Artikel"
//                                     id="gambar"
//                                     className="border-[#D1D1D1] rounded-md w-1/2"
//                                     onChange={(e) =>
//                                         setData("gambar", e.target.files[0])
//                                     }
//                                 />
//                             </div>
//                             <div className="flex gap-x-4 mt-8">
//                                 <Link
//                                     href="/manajemenartikel"
//                                     className="bg-gray-200 px-3 py-1 rounded-md"
//                                 >
//                                     Kembali
//                                 </Link>
//                                 <button
//                                     className="bg-green-400 px-3 py-1 rounded-md"
//                                     type="submit"
//                                 >
//                                     Simpan
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </AuthenticatedLayout>
//     );
// }



import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { resolveMediaUrl } from "@/utils/media";

export default function ArtikelEdit({ auth, artikel }) {
    const { data, setData, errors, post, processing } = useForm({
        judul: artikel.judul || "",
        tanggal: artikel.tanggal || "",
        isi: artikel.isi || "",
        gambar: null,
        _method: "PUT",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(`/manajemenartikel/${artikel.id}`, {
            forceFormData: true,
        });
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl leading-tight">
                    Edit Artikel
                </h2>
            }
        >
            <Head title="Edit Artikel" />
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
                                {errors.judul && (
                                    <p className="text-red-600 text-sm">{errors.judul}</p>
                                )}
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="tanggal" className="font-semibold">
                                    Tanggal Artikel
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
                                    Isi Artikel
                                </label>
                                <textarea
                                    placeholder="Masukkan Isi Artikel"
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
                                    Gambar (opsional, kosongkan jika tidak diubah)
                                </label>
                                {artikel.gambar && (
                                    <img
                                        src={resolveMediaUrl(artikel.gambar)}
                                        alt={artikel.judul}
                                        className="w-40 h-28 object-cover rounded border"
                                    />
                                )}
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
                                    href="/manajemenartikel"
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
