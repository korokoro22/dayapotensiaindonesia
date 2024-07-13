import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
// import KontakForm from '@/Components/Kontak/KontakForm'
import { Head, router, useForm } from '@inertiajs/react'
import React from 'react'

const KontakPage = () => {
  const { data, setData, errors } = useForm({
    nama: "",
    keluhan: "",
});

const handleSubmit = (e) => {
  e.preventDefault();

  const whatsappNumber = '+6285756297170'; // Ganti dengan nomor WhatsApp tujuan
  const message = `Assalamu'alaikum, Selamat Pagi/Siang/Sore/Malam \n Perkenalkan saya, \n*Nama:* ${data.nama}\n*Keluhan:* ${data.keluhan}\nSaya ingin konsultasi, Terima kasih atas perhatiannya`;
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.location.href = url;
};

  return (
    <div>
        <Header />
        <>
            <Head title="Hubungi Kami" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded px-8 py-5">
                        <form
                            className="flex flex-col gap-y-7"
                            onSubmit={handleSubmit}
                        >
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="nama" className="font-semibold">
                                    Nama
                                </label>
                                <input
                                    type="text"
                                    id="nama"
                                    className="border-[#D1D1D1] rounded-md"
                                    value={data.nama}
                                    onChange={(e) =>
                                        setData("nama", e.target.value)
                                    }
                                />
                                {errors.nama && (
                                    <div className="text-red-600">{errors.nama}</div>
                                )}
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="keluhan" className="font-semibold">
                                    Keluhan
                                </label>
                                <textarea
                                    id="keluhan"
                                    className="border-[#D1D1D1] rounded-md resize-none"
                                    value={data.keluhan}
                                    onChange={(e) =>
                                        setData("keluhan", e.target.value)
                                    }
                                ></textarea>
                                {errors.keluhan && (
                                    <div className="text-red-600">{errors.keluhan}</div>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="bg-green-400 px-3 py-1 rounded-md"
                            >
                                Kirim
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
        <Footer />
    </div>
  )
}

export default KontakPage