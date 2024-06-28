import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function ArtikelDashboard({ auth, artikel }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard Artikel
                </h2>
            }
        >
            <Head title="Manajemen Artikel" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="mb-5">
                        <Link
                            className="bg-green-200 px-4 py-2 rounded"
                            href="/manajemenartikel/create"
                        >
                            Tambah Data
                        </Link>
                    </div>

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded">
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
                                {/* <tr className="border-b py-5">
                                    <td className="">2</td>
                                    <td className="">Budi</td>
                                    <td className="">Dia</td>
                                    <td className=" text-wrap">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Excepturi dignissimos,
                                        ullam assumenda cum dicta dolore impedit
                                        quos, sunt ratione quod accusantium,
                                        libero aliquam accusamus nihil labore
                                        nulla ab officiis velit?
                                    </td>
                                    <td className=" ">Mereka</td>
                                    <td>
                                        <div className="flex justify-center items-center h-full flex-col gap-y-2">
                                            <Link className="bg-blue-400 w-20 py-0.5 rounded">
                                                Lihat
                                            </Link>
                                            <Link className="bg-yellow-400 w-20 py-0.5 rounded">
                                                Edit
                                            </Link>
                                            <button className="bg-red-400 w-20 py-0.5 rounded">
                                                Hapus
                                            </button>
                                        </div>
                                    </td>
                                </tr> */}
                                {/* {artikel.length > 0 ? (
                                    <tr className="border-b py-5">
                                        <td className="">{artikel.id}</td>
                                        <td className="">{artikel.judul}</td>
                                        <td className="">{artikel.tanggal}</td>
                                        <td className="text-wrap">
                                            {artikel.isi}
                                        </td>
                                        <td className="">{artikel.gambar}</td>
                                        <td>
                                            <div className="flex justify-center items-center h-full flex-col gap-y-2">
                                                <Link className="bg-blue-400 w-20 py-0.5 rounded">
                                                    Lihat
                                                </Link>
                                                <Link className="bg-yellow-400 w-20 py-0.5 rounded">
                                                    Edit
                                                </Link>
                                                <button className="bg-red-400 w-20 py-0.5 rounded">
                                                    Hapus
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    <div>tidak ada</div>
                                )} */}

                                {artikel.map((artikel, index) => (
                                    <tr key={index} className="border-b py-5">
                                        <td className="">{artikel.id}</td>
                                        <td className="">{artikel.judul}</td>
                                        <td className="">{artikel.tanggal}</td>
                                        <td className="text-wrap">
                                            {artikel.isi}
                                        </td>
                                        <td className="">
                                            <img
                                                src={`storage/${artikel.gambar}`}
                                                alt=""
                                                className="w- h-[5em] object-cover"
                                            />
                                        </td>
                                        <td>
                                            <div className="flex justify-center items-center h-full flex-col gap-y-2">
                                                <Link className="bg-blue-400 w-20 py-0.5 rounded">
                                                    Lihat
                                                </Link>
                                                <Link
                                                    href={`/manajemenartikel/${artikel.id}/edit`}
                                                    className="bg-yellow-400 w-20 py-0.5 rounded"
                                                >
                                                    Edit
                                                </Link>
                                                <button className="bg-red-400 w-20 py-0.5 rounded">
                                                    Hapus
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
