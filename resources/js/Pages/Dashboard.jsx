import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import ArtikelImage from "../assets/admin/articlefullblack.png";
import ActivityImage from "../assets/admin/activityfullblack.png";

export default function Dashboard({ auth, totalKegiatan, totalArtikel }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-display font-bold text-xl leading-tight text-[#132B52]">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard Admin" />

            <div className="py-10 px-4 sm:px-0">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm border border-slate-200/80 rounded-2xl p-6 sm:p-8 text-[#0D1E3A]">
                        <div className="flex flex-col gap-y-1.5 border-b border-slate-200 pb-6 mb-7">
                            <p className="text-sm font-semibold text-[#DDA31C]">
                                Selamat Datang, {auth.user?.name || "Admin"}
                            </p>
                            <h1 className="font-display text-2xl md:text-3xl font-bold text-[#132B52]">
                                Panel Manajemen Website Daya Potensia Indonesia
                            </h1>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
                            <Link
                                href={route("manajemenartikel")}
                                className="group rounded-2xl bg-[#F4F6FA] hover:bg-[#132B52] border border-slate-200 hover:border-[#132B52] p-6 transition-all shadow-xs"
                            >
                                <div className="flex items-center justify-between border-b border-slate-200 group-hover:border-white/15 pb-4 mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-xl bg-[#F3BA33] p-2 flex items-center justify-center">
                                            <img
                                                src={ArtikelImage}
                                                alt="Artikel"
                                                className="w-8 h-8 object-contain"
                                            />
                                        </div>
                                        <p className="font-display text-xl font-bold text-[#132B52] group-hover:text-white">
                                            ARTIKEL
                                        </p>
                                    </div>
                                    <span className="text-sm font-semibold text-[#132B52] group-hover:text-[#F3BA33]">
                                        Kelola →
                                    </span>
                                </div>
                                <p className="text-xl font-semibold text-slate-700 group-hover:text-slate-100">
                                    {totalArtikel} Postingan
                                </p>
                            </Link>

                            <Link
                                href={route("manajemenkegiatan")}
                                className="group rounded-2xl bg-[#F4F6FA] hover:bg-[#132B52] border border-slate-200 hover:border-[#132B52] p-6 transition-all shadow-xs"
                            >
                                <div className="flex items-center justify-between border-b border-slate-200 group-hover:border-white/15 pb-4 mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-xl bg-[#F3BA33] p-2 flex items-center justify-center">
                                            <img
                                                src={ActivityImage}
                                                alt="Kegiatan"
                                                className="w-8 h-8 object-contain"
                                            />
                                        </div>
                                        <p className="font-display text-xl font-bold text-[#132B52] group-hover:text-white">
                                            KEGIATAN
                                        </p>
                                    </div>
                                    <span className="text-sm font-semibold text-[#132B52] group-hover:text-[#F3BA33]">
                                        Kelola →
                                    </span>
                                </div>
                                <p className="text-xl font-semibold text-slate-700 group-hover:text-slate-100">
                                    {totalKegiatan} Postingan
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
