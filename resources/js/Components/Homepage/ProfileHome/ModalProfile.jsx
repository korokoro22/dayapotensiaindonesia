import React, { useEffect } from "react";
import Avatar from "../../../assets/logo/avatar.png";

const ModalProfile = ({ setIsmodal, filterData, setIdData }) => {
    const closeModal = () => {
        setIsmodal(false);
        setIdData(null);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") closeModal();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            onClick={closeModal}
        >
            <div
                className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl bg-white p-4 md:p-6 text-sm text-black shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between border-b pb-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#333333]">
                        Profile Team
                    </h2>
                    <button
                        type="button"
                        aria-label="Tutup modal"
                        onClick={closeModal}
                        className="text-2xl font-bold text-gray-500 hover:text-gray-800 px-2 py-1 rounded cursor-pointer"
                    >
                        ✕
                    </button>
                </div>

                {/* Modal Content */}
                <div className="my-6">
                    <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start gap-6">
                        <div className="w-full md:w-3/5 flex flex-col gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-black">
                                    {filterData?.name}
                                </h3>
                                <span className="inline-block mt-1 text-xs md:text-sm font-semibold bg-[#F3D457] rounded-lg px-3 py-1 text-black">
                                    {filterData?.title}
                                </span>
                            </div>
                            <p className="text-justify leading-relaxed text-gray-700">
                                {filterData?.desc}
                            </p>
                        </div>
                        <img
                            src={filterData?.image || Avatar}
                            alt={filterData?.name}
                            className="w-48 h-48 md:w-60 md:h-60 rounded-lg object-cover object-top shrink-0"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalProfile;
