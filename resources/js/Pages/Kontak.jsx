import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { companyProfile } from "@/utils/companyProfile";
import { Head, Link, useForm } from "@inertiajs/react";
import React, { useState } from "react";

const KontakPage = () => {
    const { data, setData } = useForm({
        nama: "",
        instansi: "",
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
            nextErrors.keluhan = "Kebutuhan atau keluhan wajib diisi.";
        }

        if (Object.keys(nextErrors).length > 0) {
            setClientErrors(nextErrors);
            return;
        }

        setClientErrors({});

        const instansiLine = data.instansi.trim()
            ? `\n*Instansi / Kategori:* ${data.instansi.trim()}`
            : "";

        const message = `Assalamu'alaikum, Selamat Pagi/Siang/Sore/Malam\nPerkenalkan saya,\n*Nama:* ${data.nama.trim()}${instansiLine}\n*Kebutuhan Konsultasi:* ${data.keluhan.trim()}\nSaya ingin berkonsultasi dengan tim Daya Potensia Indonesia. Terima kasih.`;
        const url = `https://wa.me/${
            companyProfile.contact.whatsappNumber
        }?text=${encodeURIComponent(message)}`;

        window.location.href = url;
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#F4F6FA] font-inter">
            <Head title="Hubungi Kami" />
            <Header />

            <main className="flex-1">
                {/* Executive Navy Header echoing Company Profile Page 19 */}
                <section className="relative overflow-hidden bg-[#132B52] text-white">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute bottom-0 right-0 w-64 h-20 bg-[#F3BA33]/90"
                        style={{ clipPath: "polygon(40% 100%, 100% 0, 100% 100%)" }}
                    />

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                        <nav
                            aria-label="Breadcrumb"
                            className="text-xs text-slate-300 mb-4 flex items-center gap-2"
                        >
                            <Link
                                href="/"
                                className="hover:text-[#F3BA33] transition-colors"
                            >
                                Beranda
                            </Link>
                            <span>/</span>
                            <span className="text-[#F3BA33] font-semibold">
                                Hubungi Kami
                            </span>
                        </nav>

                        <div className="max-w-3xl space-y-3">
                            <span className="inline-block rounded-full bg-white/10 border border-white/15 px-3.5 py-1 text-xs font-semibold text-[#F3BA33]">
                                KONSULTASI AWAL TANPA BIAYA
                            </span>
                            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                                Mari Diskusikan Kebutuhan SDM &amp; Layanan Psikologi Anda
                            </h1>
                            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
                                Tersedia untuk perusahaan, instansi pemerintah, lembaga pendidikan, maupun konsultasi personal. Ceritakan kebutuhan Anda dan tim psikolog kami siap membantu.
                            </p>
                        </div>

                        {/* 3 Steps from Page 19 */}
                        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                            {companyProfile.consultationSteps.map((item) => (
                                <div
                                    key={item.step}
                                    className="rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs p-5"
                                >
                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#F3BA33] text-[#0D1E3A] font-display font-bold text-sm mb-3">
                                        {item.step}
                                    </span>
                                    <h2 className="font-display font-bold text-base text-white">
                                        {item.title}
                                    </h2>
                                    <p className="mt-1.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Main Split Contact Info + WhatsApp Form */}
                <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Left Info Cards */}
                        <div className="lg:col-span-5 space-y-5">
                            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-7 space-y-5">
                                <h2 className="font-display text-xl font-bold text-[#132B52]">
                                    Kontak Daya Potensia Indonesia
                                </h2>

                                <div className="space-y-4 text-sm">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                            Alamat Kantor
                                        </p>
                                        <p className="mt-1 text-slate-700 font-medium leading-relaxed">
                                            {companyProfile.contact.address}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                            Telepon / WhatsApp
                                        </p>
                                        <a
                                            href={`https://wa.me/${companyProfile.contact.whatsappNumber}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-1 inline-block text-base font-bold text-[#132B52] hover:text-[#DDA31C] transition-colors"
                                        >
                                            {companyProfile.contact.phoneDisplay}
                                        </a>
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                            Email Resmi
                                        </p>
                                        <a
                                            href={`mailto:${companyProfile.contact.email}`}
                                            className="mt-1 inline-block font-medium text-slate-700 hover:text-[#132B52] break-all"
                                        >
                                            {companyProfile.contact.email}
                                        </a>
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                            Instagram &amp; LinkedIn
                                        </p>
                                        <p className="mt-1 text-slate-700">
                                            {companyProfile.contact.instagramHandle} ·{" "}
                                            {companyProfile.contact.linkedinName}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                            Jam Layanan
                                        </p>
                                        <p className="mt-1 text-slate-700">
                                            {companyProfile.contact.hours}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* MOKSA DPI Social Crisis Hotline */}
                            <div className="bg-white rounded-2xl border border-slate-200/80 border-l-4 border-l-[#6A1B9A] shadow-sm p-6">
                                <p className="text-xs font-bold uppercase tracking-wider text-[#6A1B9A]">
                                    Program Sosial &amp; Respon Krisis
                                </p>
                                <h3 className="font-display text-base font-bold text-[#0D1E3A] mt-1">
                                    {companyProfile.moksaContact.name}
                                </h3>
                                <p className="text-sm text-slate-600 mt-2">
                                    WhatsApp: {companyProfile.moksaContact.phoneDisplay} ·{" "}
                                    {companyProfile.moksaContact.instagramHandle}
                                </p>
                                <p className="text-xs text-slate-500 mt-1">
                                    {companyProfile.moksaContact.email}
                                </p>
                            </div>
                        </div>

                        {/* Right WhatsApp Consultation Form */}
                        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 shadow-md overflow-hidden">
                            <div className="h-1.5 bg-gradient-to-r from-[#132B52] via-[#F3BA33] to-[#6A1B9A]" />
                            <div className="p-6 sm:p-8 text-slate-900">
                                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#132B52]">
                                    Formulir Konsultasi Langsung (WhatsApp)
                                </h2>
                                <p className="text-sm text-slate-600 mt-1 mb-6">
                                    Isi formulir singkat di bawah ini untuk langsung terhubung ke admin konsultasi DPI di nomor {companyProfile.contact.phoneDisplay}.
                                </p>

                                <form
                                    className="space-y-5"
                                    onSubmit={handleSubmit}
                                    noValidate
                                >
                                    <div>
                                        <label
                                            htmlFor="nama"
                                            className="block text-sm font-semibold text-slate-800 mb-1.5"
                                        >
                                            Nama Lengkap
                                        </label>
                                        <input
                                            type="text"
                                            id="nama"
                                            placeholder="Masukkan nama lengkap Anda"
                                            className="w-full rounded-xl border-slate-300 text-sm focus:border-[#132B52] focus:ring-[#132B52]"
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
                                            <p className="mt-1.5 text-xs font-medium text-red-600">
                                                {clientErrors.nama}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="instansi"
                                            className="block text-sm font-semibold text-slate-800 mb-1.5"
                                        >
                                            Perusahaan / Instansi / Pribadi{" "}
                                            <span className="font-normal text-slate-400">
                                                (opsional)
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            id="instansi"
                                            placeholder="Contoh: PT Maju Bersama / Konsultasi Pribadi"
                                            className="w-full rounded-xl border-slate-300 text-sm focus:border-[#132B52] focus:ring-[#132B52]"
                                            value={data.instansi}
                                            onChange={(e) =>
                                                setData("instansi", e.target.value)
                                            }
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="keluhan"
                                            className="block text-sm font-semibold text-slate-800 mb-1.5"
                                        >
                                            Kebutuhan Layanan / Keluhan
                                        </label>
                                        <textarea
                                            id="keluhan"
                                            rows={5}
                                            placeholder="Ceritakan kebutuhan asesmen SDM, psikotes, konseling klinis, pendidikan, atau jadwal konsultasi Anda"
                                            className="w-full rounded-xl border-slate-300 text-sm resize-y focus:border-[#132B52] focus:ring-[#132B52]"
                                            value={data.keluhan}
                                            onChange={(e) => {
                                                setData(
                                                    "keluhan",
                                                    e.target.value
                                                );
                                                if (clientErrors.keluhan) {
                                                    setClientErrors((prev) => ({
                                                        ...prev,
                                                        keluhan: "",
                                                    }));
                                                }
                                            }}
                                            required
                                        />
                                        {clientErrors.keluhan && (
                                            <p className="mt-1.5 text-xs font-medium text-red-600">
                                                {clientErrors.keluhan}
                                            </p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#132B52] hover:bg-[#0D1E3A] text-white font-semibold text-sm px-7 py-3.5 shadow-sm transition-colors cursor-pointer"
                                    >
                                        <span>Kirim Konsultasi via WhatsApp</span>
                                        <span aria-hidden="true">→</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default KontakPage;
