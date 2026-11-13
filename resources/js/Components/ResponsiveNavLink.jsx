import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${
                active
                    ? 'border-[#f0cc40] text-[#f0cc40] bg-white/10 focus:text-[#f0cc40] focus:bg-white/15 focus:border-[#f0cc40]'
                    : 'border-transparent text-gray-200 hover:text-white hover:bg-white/10 hover:border-gray-400 focus:text-white focus:bg-white/10 focus:border-gray-400'
            } text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`}
        >
            {children}
        </Link>
    );
}
