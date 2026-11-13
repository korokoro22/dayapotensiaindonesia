import { Link } from "@inertiajs/react";
import React from "react";

export default function LayananCard({ title, body, image, link }) {
    return (
        <div className="mx-auto w-full max-w-[22em] rounded-lg shadow-xl font-inter text-black bg-white flex flex-col justify-between overflow-hidden">
            <div>
                <img
                    src={image}
                    alt={title}
                    className="rounded-t-lg h-[13em] object-cover w-full"
                />
                <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{body}</p>
                </div>
            </div>
            <div className="px-4 pb-5 text-end">
                <Link
                    href={link}
                    className="inline-block bg-[#24A0ED] hover:bg-[#1b86c7] transition-colors text-white px-4 py-2 rounded-xl text-sm font-semibold"
                >
                    Lebih Lengkap
                </Link>
            </div>
        </div>
    );
}
