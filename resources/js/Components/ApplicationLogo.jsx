import DpiLogoFull from "../assets/logo/dpilogo2.png";

export default function ApplicationLogo({ className = "h-12 w-auto" }) {
    return (
        <img
            src={DpiLogoFull}
            alt="Daya Potensia Indonesia"
            className={className}
        />
    );
}
