import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import ArtikelImage from "../assets/admin/articlefullblack.png";
import ActivityImage from "../assets/admin/activityfullblack.png";

export default function Dashboard({ auth, totalKegiatan, totalArtikel }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12 px-4 sm:px-0">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg flex gap-x-2 text-[#111C21] flex-col p-6">
                        <div className="flex flex-col gap-y-2 border-b-2 pb-4 mb-6">
                            <h1 className="text-2xl">Selamat Datang, {auth.user?.name || "Admin"}</h1>
                            <h2 className="text-2xl md:text-3xl font-bold">
                                di Dashboard Website Daya Potensia Indonesia
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
                            <Link
                                href={route("manajemenartikel")}
                                className="bg-[#f0cc40] hover:bg-[#e5be2b] transition-colors px-5 py-4 rounded-md flex flex-col gap-y-3 shadow-sm"
                            >
                                <div className="flex gap-x-3 w-full items-center border-b pb-3 border-[#111C21]">
                                    <img src={ArtikelImage} alt="Artikel" className="w-12" />
                                    <p className="text-xl font-extrabold">ARTIKEL</p>
                                </div>
                                <div>
                                    <p className="text-xl font-semibold">{totalArtikel} Postingan</p>
                                </div>
                            </Link>
                            <Link
                                href={route("manajemenkegiatan")}
                                className="bg-[#f0cc40] hover:bg-[#e5be2b] transition-colors px-5 py-4 rounded-md flex flex-col gap-y-3 shadow-sm"
                            >
                                <div className="flex gap-x-3 w-full items-center border-b border-[#111C21] pb-3">
                                    <img src={ActivityImage} alt="Kegiatan" className="w-12" />
                                    <p className="text-xl font-extrabold">KEGIATAN</p>
                                </div>
                                <div>
                                    <p className="text-xl font-semibold">{totalKegiatan} Postingan</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
