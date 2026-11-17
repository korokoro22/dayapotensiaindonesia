import React from "react";
import { Head, Link } from "@inertiajs/react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { layananDetailMap, layananOrder } from "@/utils/layanan";
import { companyProfile } from "@/utils/companyProfile";

const ServiceDetailLayout = ({ serviceKey }) => {
    const service = layananDetailMap[serviceKey] || layananDetailMap.industri;
    const otherServices = layananOrder
        .filter((key) => key !== service.key)
        .map((key) => layananDetailMap[key]);

    const whatsappHref = `https://wa.me/${companyProfile.contact.whatsappNumber}?text=${encodeURIComponent(
        `Halo Tim Daya Potensia Indonesia, saya ingin berkonsultasi mengenai layanan ${service.title}.`
    )}`;

    return (
        <div className="min-h-screen flex flex-col bg-[#F4F6FA] font-inter">
            <Head title={service.title} />
            <Header />

            <main className="flex-1">
                {/* Split Executive Service Hero */}
                <section className="relative overflow-hidden bg-[#132B52] text-white">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute bottom-0 right-0 w-72 h-20 bg-[#F3BA33]/90"
                        style={{ clipPath: "polygon(40% 100%, 100% 0, 100% 100%)" }}
                    />

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        <div className="lg:col-span-7 space-y-5">
                            <nav
                                aria-label="Breadcrumb"
                                className="text-xs text-slate-300 flex flex-wrap items-center gap-2"
                            >
                                <Link
                                    href="/"
                                    className="hover:text-[#F3BA33] transition-colors"
                                >
                                    Beranda
                                </Link>
                                <span>/</span>
                                <Link
                                    href="/layanan"
                                    className="hover:text-[#F3BA33] transition-colors"
                                >
                                    Layanan Kami
                                </Link>
                                <span>/</span>
                                <span className="text-[#F3BA33] font-semibold">
                                    {service.shortTitle}
                                </span>
                            </nav>

                            <span className="inline-block rounded-full bg-white/10 border border-white/15 px-3.5 py-1 text-xs font-semibold text-[#F3BA33]">
                                {service.category}
                            </span>

                            <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight">
                                {service.title}
                            </h1>

                            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
                                {service.heroLead}
                            </p>

                            <div className="flex flex-wrap gap-3 pt-2">
                                <a
                                    href={whatsappHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-xl bg-[#F3BA33] hover:bg-[#e5ad22] text-[#0D1E3A] font-bold text-sm px-6 py-3 shadow-md transition-colors"
                                >
                                    <span>Konsultasi Layanan Ini</span>
                                    <span aria-hidden="true">→</span>
                                </a>
                                <Link
                                    href="/hubungikami"
                                    className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 hover:bg-white/15 text-white font-semibold text-sm px-5 py-3 transition-colors"
                                >
                                    <span>Kirim Form Kebutuhan</span>
                                </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="relative rounded-2xl overflow-hidden bg-white p-2 shadow-2xl">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-56 sm:h-72 object-cover rounded-xl"
                                />
                                <div className="h-1.5 w-full bg-[#F3BA33] rounded-b-xl mt-2" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ruang Lingkup Layanan Grid */}
                <section className="py-14 md:py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
                            <div>
                                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#132B52] border-b-2 border-[#F3BA33] pb-1">
                                    Ruang Lingkup
                                </span>
                                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#132B52] mt-3">
                                    Cakupan Layanan {service.shortTitle}
                                </h2>
                            </div>
                            <span className="rounded-full bg-white border border-slate-200 px-4 py-1.5 text-xs font-bold text-[#132B52] shadow-xs">
                                {service.items.length} Layanan Tersedia
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {service.items.map((item, idx) => (
                                <div
                                    key={item.title}
                                    className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex gap-4 items-start"
                                >
                                    <span className="shrink-0 w-9 h-9 rounded-xl bg-[#132B52] text-[#F3BA33] font-display font-bold text-sm flex items-center justify-center">
                                        {String(idx + 1).padStart(2, "0")}
                                    </span>
                                    <div>
                                        <h3 className="font-display text-base sm:text-lg font-bold text-[#0D1E3A] leading-snug">
                                            {item.title}
                                        </h3>
                                        <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Cocok Untuk & Standar Layanan DPI */}
                <section className="bg-white py-14 px-4 sm:px-6 lg:px-8 border-y border-slate-200/70">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="rounded-2xl bg-[#F4F6FA] border border-slate-200/80 p-6 sm:p-8">
                            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#132B52] border-b-2 border-[#F3BA33] pb-1">
                                Sasaran Layanan
                            </span>
                            <h3 className="font-display text-xl font-bold text-[#132B52] mt-3 mb-4">
                                Siapa yang Membutuhkan Layanan Ini?
                            </h3>
                            <ul className="space-y-3">
                                {service.audience.map((target) => (
                                    <li
                                        key={target}
                                        className="flex items-start gap-3 text-sm text-slate-700"
                                    >
                                        <span className="w-5 h-5 rounded-full bg-[#132B52] text-[#F3BA33] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                                            ✓
                                        </span>
                                        <span>{target}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-2xl bg-[#132B52] text-white p-6 sm:p-8">
                            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F3BA33] border-b-2 border-[#F3BA33] pb-1">
                                Standar Kualitas DPI
                            </span>
                            <h3 className="font-display text-xl font-bold text-white mt-3 mb-4">
                                Keunggulan Pendekatan Kami
                            </h3>
                            <ul className="space-y-3">
                                {service.highlights.map((highlight) => (
                                    <li
                                        key={highlight}
                                        className="flex items-start gap-3 text-sm text-slate-200"
                                    >
                                        <span className="w-5 h-5 rounded-full bg-[#F3BA33] text-[#0D1E3A] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                                            ★
                                        </span>
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 pt-5 border-t border-white/15 flex flex-wrap items-center justify-between gap-3">
                                <p className="text-xs text-slate-300">
                                    Konsultasi awal tanpa biaya · Penawaran maks. 7 hari kerja
                                </p>
                                <a
                                    href={whatsappHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#F3BA33] hover:underline"
                                >
                                    <span>Hubungi via WhatsApp</span>
                                    <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Other Services Navigation */}
                <section className="bg-[#F4F6FA] py-14 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#132B52]">
                                Jelajahi Bidang Layanan DPI Lainnya
                            </h2>
                            <Link
                                href="/layanan"
                                className="text-sm font-semibold text-[#132B52] hover:text-[#DDA31C]"
                            >
                                Lihat Semua Layanan →
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                            {otherServices.map((other) => (
                                <Link
                                    key={other.key}
                                    href={other.link}
                                    className="group bg-white rounded-xl p-4 border border-slate-200/80 hover:border-[#132B52]/40 hover:shadow-md transition-all flex flex-col justify-between"
                                >
                                    <div>
                                        <span className="text-[11px] font-semibold text-[#DDA31C]">
                                            {other.category}
                                        </span>
                                        <h3 className="font-display font-bold text-sm text-[#132B52] mt-1 group-hover:text-[#1E4073]">
                                            {other.shortTitle}
                                        </h3>
                                    </div>
                                    <span className="mt-3 inline-block text-xs font-semibold text-slate-500 group-hover:text-[#132B52]">
                                        Buka Layanan →
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ServiceDetailLayout;

