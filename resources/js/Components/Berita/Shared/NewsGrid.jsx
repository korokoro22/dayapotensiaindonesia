import React, { useMemo, useState } from "react";
import { Link } from "@inertiajs/react";
import ReactPaginate from "react-paginate";
import { resolveMediaUrl } from "@/utils/media";

const NewsGrid = ({ items = [], basePath, heading, emptyText, label }) => {
    const [page, setPage] = useState(0);
    const perPage = 6;

    const currentItems = useMemo(
        () => items.slice(page * perPage, (page + 1) * perPage),
        [items, page]
    );

    const pageCount = Math.ceil(items.length / perPage);

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-inter">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-8">
                <h2 className="font-display text-2xl font-bold text-[#132B52]">
                    {heading}
                </h2>
                <span className="text-xs font-semibold text-slate-500">
                    {items.length} Publikasi
                </span>
            </div>

            {currentItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentItems.map((item) => (
                        <Link
                            key={item.id}
                            href={`${basePath}/${item.id}`}
                            className="group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all overflow-hidden flex flex-col justify-between"
                        >
                            <div>
                                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                                    <img
                                        src={resolveMediaUrl(item.gambar)}
                                        alt={item.judul}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <span className="absolute top-3 left-3 rounded-full bg-white/95 px-2.5 py-0.5 text-[11px] font-bold text-[#132B52] shadow-xs">
                                        {label}
                                    </span>
                                </div>
                                <div className="p-5">
                                    <p className="text-xs font-medium text-slate-500">
                                        {item.tanggal}
                                    </p>
                                    <h3 className="font-display mt-2 font-bold text-lg text-[#0D1E3A] group-hover:text-[#132B52] line-clamp-2 min-h-[3.25rem] leading-snug">
                                        {item.judul}
                                    </h3>
                                    <p className="mt-2 text-sm text-slate-600 line-clamp-3 leading-relaxed">
                                        {item.isi}
                                    </p>
                                </div>
                            </div>

                            <div className="px-5 pb-4 pt-3 border-t border-slate-100 text-xs font-semibold text-[#132B52] group-hover:text-[#DDA31C] transition-colors">
                                Baca Selengkapnya →
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500">
                    {emptyText}
                </div>
            )}

            {pageCount > 1 && (
                <div className="flex items-center justify-center pt-10">
                    <ReactPaginate
                        containerClassName="join"
                        activeLinkClassName="!bg-[#132B52] !text-white !border-[#132B52]"
                        pageLinkClassName="join-item btn btn-sm md:btn-md bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
                        onPageChange={(event) => setPage(event.selected)}
                        breakLabel="..."
                        breakLinkClassName="join-item btn btn-sm md:btn-md bg-white border-slate-200"
                        pageCount={pageCount}
                        previousLabel="«"
                        previousLinkClassName="join-item btn btn-sm md:btn-md bg-white border-slate-200"
                        nextLabel="»"
                        nextLinkClassName="join-item btn btn-sm md:btn-md bg-white border-slate-200"
                    />
                </div>
            )}
        </section>
    );
};

export default NewsGrid;
