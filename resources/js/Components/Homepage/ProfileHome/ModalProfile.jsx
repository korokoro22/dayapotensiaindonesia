import React from "react";

const ModalProfile = ({ setIsmodal, filterData, setIdData }) => {
    const closeModal = () => {
        setIsmodal(false);
        setIdData("");
    };

    console.log(filterData);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-300/75">
            <div className="max-h-[90vh] w-1/2 overflow-y-auto rounded-xl bg-white p-2 text-sm">
                <div className=" flex items-center justify-between rounded-xl p-4 shadow-sm">
                    <h2 className="text-3xl font-bold text-[#333333]">
                        Profile Team
                    </h2>
                    <button
                        onClick={() => closeModal(false)}
                        className="text-3xl font-semibold text-gray-500 hover:text-gray-700"
                    >
                        x
                    </button>
                </div>

                {/* Modal Content */}
                <div className="my-10">
                    <div className="flex justify-center gap-2">
                        <div className="w-3/5 flex flex-col gap-4">
                            <div>
                                <h1 className="text-lg font-semibold">
                                    {filterData?.name}
                                </h1>
                                <h4 className=" text-sm bg-[#F3D457] w-fit rounded-lg px-2 text-white">
                                    {filterData?.title}
                                </h4>
                            </div>
                            <p>{filterData?.desc}</p>
                        </div>
                        <img
                            src={filterData?.image}
                            alt=""
                            className="w-[17em] h-[17em] rounded-lg object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalProfile;
