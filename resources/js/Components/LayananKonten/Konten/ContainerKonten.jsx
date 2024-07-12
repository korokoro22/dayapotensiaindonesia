import React from "react";
import ListKonten from "./ListKonten";

const ContainerKonten = ({ kontens }) => {
    console.log("Isi Konten", kontens);
    return (
        <div className="bg-[#E9E9E9]">
            <div className="py-10 flex flex-col gap-10">
                {
                  kontens.map((konten)=>(
                    <ListKonten 
                      id={konten.id}
                      {...konten}
                    />
                  ))
                }
                {/* {
                  kontens.filter((konten, id)=> id === konten.id ).map((konten)=>(
                    <ListKonten 
                      id={konten.id}
                      {...konten}
                    />
                  ))
                } */}
            </div>
        </div>
    );
};

export default ContainerKonten;
