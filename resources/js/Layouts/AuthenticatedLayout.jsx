import { useState } from "react";
import LogoDpi from "../assets/logo/dpilogo.png";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const { url } = usePage();

    const isDashboard = url === "/dashboard";
    const isKegiatan = url.startsWith("/manajemenkegiatan");
    const isArtikel = url.startsWith("/manajemenartikel");

    return (
        <div className="min-h-screen bg-gray-200">
            <nav className="bg-[#111C21] border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/dashboard">
                                    <img
                                        src={LogoDpi}
                                        alt="Daya Potensia Indonesia"
                                        className="block h-9 w-auto fill-current text-gray-800"
                                    />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink
                                    href={route("dashboard")}
                                    active={isDashboard}
                                >
                                    Dashboard
                                </NavLink>

                                <NavLink
                                    href={route("manajemenkegiatan")}
                                    active={isKegiatan}
                                >
                                    Manajemen Kegiatan
                                </NavLink>

                                <NavLink
                                    href={route("manajemenartikel")}
                                    active={isArtikel}
                                >
                                    Manajemen Artikel
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ms-6 gap-4">
                            <Link
                                href={route("profile.edit")}
                                className="text-gray-200 hover:text-[#f0cc40] text-sm font-medium transition-colors"
                            >
                                Profil ({user.name})
                            </Link>
                            <Link
                                href={route("logout")}
                                method="post"
                                as="button"
                                className="text-gray-100 bg-red-600 px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors cursor-pointer"
                            >
                                KELUAR
                            </Link>
                        </div>

                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                type="button"
                                aria-label="Toggle Menu"
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none transition duration-150 ease-in-out"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={isDashboard}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("manajemenkegiatan")}
                            active={isKegiatan}
                        >
                            Manajemen Kegiatan
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("manajemenartikel")}
                            active={isArtikel}
                        >
                            Manajemen Artikel
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-700">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-100">
                                {user.name}
                            </div>
                            <div className="font-medium text-sm text-gray-400">
                                {user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink
                                href={route("profile.edit")}
                                active={url === "/profile"}
                            >
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Keluar
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-[#111C21] shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-white">
                        {header}
                    </div>
                </header>
            )}
            <main className="">{children}</main>
        </div>
    );
}
