import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Head, useForm } from "@inertiajs/react";
import React, { useState } from "react";

const KontakPage = () => {
    const { data, setData } = useForm({
        nama: "",
        keluhan: "",
    });
    const [clientErrors, setClientErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const nextErrors = {};
        if (!data.nama.trim()) {
            nextErrors.nama = "Nama wajib diisi.";
        }
        if (!data.keluhan.trim()) {
            nextErrors.keluhan = "Keluhan wajib diisi.";
        }

        if (Object.keys(nextErrors).length > 0) {
            setClientErrors(nextErrors);
            return;
        }

        setClientErrors({});

        const whatsappNumber = "6285756297170";
        const message = `Assalamu'alaikum, Selamat Pagi/Siang/Sore/Malam\nPerkenalkan saya,\n*Nama:* ${data.nama.trim()}\n*Keluhan:* ${data.keluhan.trim()}\nSaya ingin konsultasi, Terima kasih atas perhatiannya.`;
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            message
        )}`;

        window.location.href = url;
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#E9E9E9] font-inter">
            <Head title="Hubungi Kami" />
            <Header />

            <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold text-black">
                            Hubungi Kami
                        </h1>
                        <p className="mt-2 text-gray-700 text-sm md:text-base">
                            Silakan isi formulir di bawah ini untuk terhubung langsung
                            dengan tim konsultasi Daya Potensia Indonesia melalui WhatsApp.
                        </p>
                    </div>

                    <div className="bg-white overflow-hidden shadow-md rounded-xl px-6 sm:px-8 py-8 text-black">
                        <form
                            className="flex flex-col gap-y-6"
                            onSubmit={handleSubmit}
                            noValidate
                        >
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="nama" className="font-semibold">
                                    Nama
                                </label>
                                <input
                                    type="text"
                                    id="nama"
                                    placeholder="Masukkan nama lengkap Anda"
                                    className="border-[#D1D1D1] rounded-md focus:border-[#F3D457] focus:ring-[#F3D457]"
                                    value={data.nama}
                                    onChange={(e) => {
                                        setData("nama", e.target.value);
                                        if (clientErrors.nama) {
                                            setClientErrors((prev) => ({
                                                ...prev,
                                                nama: "",
                                            }));
                                        }
                                    }}
                                    required
                                />
                                {clientErrors.nama && (
                                    <div className="text-red-600 text-sm">
                                        {clientErrors.nama}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label
                                    htmlFor="keluhan"
                                    className="font-semibold"
                                >
                                    Keluhan / Kebutuhan Konsultasi
                                </label>
                                <textarea
                                    id="keluhan"
                                    rows={5}
                                    placeholder="Ceritakan keluhan atau kebutuhan layanan Anda"
                                    className="border-[#D1D1D1] rounded-md resize-y focus:border-[#F3D457] focus:ring-[#F3D457]"
                                    value={data.keluhan}
                                    onChange={(e) => {
                                        setData("keluhan", e.target.value);
                                        if (clientErrors.keluhan) {
                                            setClientErrors((prev) => ({
                                                ...prev,
                                                keluhan: "",
                                            }));
                                        }
                                    }}
                                    required
                                ></textarea>
                                {clientErrors.keluhan && (
                                    <div className="text-red-600 text-sm">
                                        {clientErrors.keluhan}
                                    </div>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="bg-green-500 hover:bg-green-600 transition-colors text-white font-semibold px-5 py-2.5 rounded-lg cursor-pointer"
                            >
                                Kirim via WhatsApp
                            </button>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default KontakPage;