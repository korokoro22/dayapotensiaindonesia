import React from "react";

const PenunjangCard = ({ title, body, index }) => {
    return (
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors flex flex-col justify-between font-inter">
            <div>
                <span className="inline-block text-xs font-bold text-[#F3BA33] mb-2">
                    PROGRAM {String((index ?? 0) + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-bold text-white leading-snug">
                    {title}
                </h3>
                <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                    {body}
                </p>
            </div>
        </div>
    );
};

export default PenunjangCard;
