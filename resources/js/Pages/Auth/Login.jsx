import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";

export default function Login({ status }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Login Admin" />

            <div className="mb-6">
                <h1 className="font-display text-xl font-bold text-[#132B52]">
                    Portal Admin DPI
                </h1>
                <p className="text-sm text-slate-500 mt-1">
                    Masuk untuk mengelola artikel dan dokumentasi kegiatan.
                </p>
            </div>

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="space-y-4">
                <div>
                    <InputLabel htmlFor="name" value="Username" />

                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full rounded-lg border-slate-300 focus:border-[#132B52] focus:ring-[#132B52]"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full rounded-lg border-slate-300 focus:border-[#132B52] focus:ring-[#132B52]"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="pt-2">
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full rounded-xl bg-[#132B52] hover:bg-[#0D1E3A] text-white font-semibold py-2.5 px-4 transition-colors disabled:opacity-60 cursor-pointer"
                    >
                        {processing ? "Memproses..." : "Masuk"}
                    </button>
                </div>
            </form>
        </GuestLayout>
    );
}
