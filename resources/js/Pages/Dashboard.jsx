import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
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
            <Head title="Makan" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg flex gap-x-2 text-[#111C21] flex-col">
                        <div className="m-4 flex flex-col gap-y-2 border-b-2 pb-4">
                            <h1 className="text-2xl">Selamat Datang, Admin</h1>
                            <h1 className="text-3xl">di Dashboard Website Daya Potensia Indonesia</h1>
                        </div>
                        <div className="flex">
                            <div className="bg-[#f0cc40] m-4 px-4 w-96 py-3 rounded-md flex flex-col gap-y-3">
                                <div className="flex gap-x-3 w-full items-center border-b pb-3 border-[#111C21]">
                                    <img src={ArtikelImage} alt="" className="w-12"/>
                                    <p className="text-xl font-extrabold">ARTIKEL</p>
                                </div>
                                <div>
                                    <p className="text-xl">{totalArtikel} Postingan</p>
                                </div>
                            </div>
                            <div className="bg-[#f0cc40] m-4 px-4 w-96 py-3 rounded-md flex flex-col gap-y-3">
                                <div className="flex gap-x-3 w-full items-center border-b border-[#111C21] pb-3">
                                    <img src={ActivityImage} alt="" className="w-12"/>
                                    <p className="text-xl font-extrabold">KEGIATAN</p>
                                </div>
                                <div>
                                    <p className="text-xl">{totalKegiatan} Postingan</p>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
