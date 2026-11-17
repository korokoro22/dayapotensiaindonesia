import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "border-[#F3BA33] text-[#F3BA33] focus:border-[#F3BA33] "
                    : "border-transparent text-slate-200 hover:text-[#F3BA33] hover:border-white/30 focus:text-[#F3BA33] focus:border-white/30 ") +
                className
            }
        >
            {children}
        </Link>
    );
}
