import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-4 py-10 bg-[#F4F6FA] font-inter">
            <div className="mb-6">
                <Link href="/" className="block">
                    <ApplicationLogo className="h-16 w-auto mx-auto object-contain" />
                </Link>
            </div>

            <div className="w-full sm:max-w-md bg-white border border-slate-200 shadow-lg rounded-2xl overflow-hidden">
                <div className="h-1.5 bg-gradient-to-r from-[#132B52] via-[#F3BA33] to-[#6A1B9A]" />
                <div className="px-6 py-7 sm:px-8">{children}</div>
            </div>

            <div className="mt-6">
                <Link
                    href="/"
                    className="text-sm font-medium text-slate-600 hover:text-[#132B52] transition-colors"
                >
                    ← Kembali ke Beranda Website
                </Link>
            </div>
        </div>
    );
}
