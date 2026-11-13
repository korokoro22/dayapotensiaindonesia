import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import React from "react";

export default function KegiatanDashboard({ auth, kegiatan }) {
    const handleDelete = (id) => {
        if (confirm("Apakah Anda yakin ingin menghapus kegiatan ini?")) {
            router.delete(`/manajemenkegiatan/${id}`);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl leading-tight">
                    Dashboard Kegiatan
                </h2>
            }
        >
            <Head title="Manajemen Kegiatan" />
            <div className="py-12 px-4 sm:px-0">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="mb-5">
                        <Link
                            className="bg-green-500 hover:bg-green-700 text-white hover:text-gray-100 px-4 py-2 rounded inline-block font-medium"
                            href="/manajemenkegiatan/create"
                        >
                            Tambah Kegiatan
                        </Link>
                    </div>

                    <div className="bg-white overflow-x-auto shadow-sm sm:rounded">
                        {kegiatan.length > 0 ? (
                            <table className="table text-black min-w-full text-center">
                                <thead className="border-b bg-[#f0cc40] text-gray-800">
                                    <tr>
                                        <th className="py-3">No</th>
                                        <th>Judul</th>
                                        <th>Tanggal</th>
                                        <th className="w-1/3">Isi Kegiatan</th>
                                        <th>Gambar</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {kegiatan.map((item, index) => (
                                        <tr key={item.id} className="border-b">
                                            <td>{index + 1}</td>
                                            <td className="font-medium">{item.judul}</td>
                                            <td className="whitespace-nowrap">{item.tanggal}</td>
                                            <td className="py-3">
                                                <p className="line-clamp-3 max-w-xs mx-auto text-left text-sm">
                                                    {item.isi}
                                                </p>
                                            </td>
                                            <td>
                                                <img
                                                    src={`/storage/${item.gambar}`}
                                                    alt={item.judul}
                                                    className="w-24 h-20 object-cover rounded mx-auto"
                                                />
                                            </td>
                                            <td>
                                                <div className="flex justify-center items-center h-full flex-col gap-y-2 text-white">
                                                    <Link
                                                        href={`/manajemenkegiatan/${item.id}`}
                                                        className="bg-blue-600 hover:bg-blue-800 w-20 py-1 rounded text-xs font-semibold"
                                                    >
                                                        Lihat
                                                    </Link>
                                                    <Link
                                                        href={`/manajemenkegiatan/${item.id}/edit`}
                                                        className="bg-yellow-500 hover:bg-yellow-600 w-20 py-1 rounded text-xs font-semibold"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        type="button"
                                                        className="bg-red-600 hover:bg-red-800 w-20 py-1 rounded text-xs font-semibold cursor-pointer"
                                                        onClick={() => handleDelete(item.id)}
                                                    >
                                                        Hapus
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p className="text-center py-8 text-gray-600">Tidak ada data kegiatan</p>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
