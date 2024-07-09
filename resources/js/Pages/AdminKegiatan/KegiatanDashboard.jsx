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
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard Kegiatan
                </h2>
            }
        >
            <Head title="Manajemen Artikel" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="mb-5">
                        <Link
                            className="bg-green-200 px-4 py-2 rounded"
                            href="/manajemenkegiatan/create"
                        >
                            Tambah Data
                        </Link>
                    </div>
                    
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded">
                        {kegiatan.length > 0 ? (
                            <table className="table text-black min-w-full text-center">
                                <thead className=" border-b bg-orange-200">
                                    <tr>
                                        <th>No</th>
                                        <th>Judul</th>
                                        <th>Tanggal</th>
                                        <th className="w-1/3">Isi Kegiatan</th>
                                        <th>Gambar</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {kegiatan.map((kegiatan, index) => (
                                        <tr key={index} className="border-b py-5">
                                            <td>{kegiatan.id}</td>
                                            <td>{kegiatan.judul}</td>
                                            <td>{kegiatan.tanggal}</td>
                                            <td className="text-wrap">{kegiatan.isi}</td>
                                            <td>
                                                <img
                                                    src={`storage/${kegiatan.gambar}`}
                                                    alt=""
                                                    className="w- h-[5em] object-cover"
                                                />
                                            </td>
                                            <td>
                                                <div className="flex justify-center items-center h-full flex-col gap-y-2">
                                                    <Link
                                                        href={`/manajemenkegiatan/${kegiatan.id}`}
                                                        className="bg-blue-400 w-20 py-0.5 rounded"
                                                    >
                                                        Lihat
                                                    </Link>
                                                    <Link
                                                        href={`/manajemenkegiatan/${kegiatan.id}/edit`}
                                                        className="bg-yellow-400 w-20 py-0.5 rounded"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        className="bg-red-400 w-20 py-0.5 rounded"
                                                        onClick={() => handleDelete(kegiatan.id)}
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
                            <p className="text-center py-5">Tidak ada data</p>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
