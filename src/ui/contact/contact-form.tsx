'use client';

import { ContactForm } from "@/lib/definiton/definition";
import { Button } from "./button-form";
import { Icon } from "@iconify/react";

export default function Form() {
  return (
    <form action="">
      <div className="grid grid-cols-2 gap-3">
        {/* First name */}
        <div className="mb-2 md:mb-4 col-span-2 md:col-span-1">
            <label htmlFor="firstName" className="block text-sm font-medium">
                Nama depan <span className="text-red-500">*</span>
            </label>
            <div className="relative rounded-md mt-2">
                <div className="relative">
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="Masukkan nama depan"
                        className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    />
                    <Icon icon="ion:person" className="pointer-events-none absolute left-3 top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
            </div>
        </div>
        {/* Last name */}
        <div className="mb-2 md:mb-4 col-span-2 md:col-span-1">
            <label htmlFor="lastName" className="block text-sm font-medium">
                Nama Belakang
            </label>
            <div className="relative rounded-md mt-2">
                <div className="relative">
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Masukkan nama belakang"
                        className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    />
                    <Icon icon="ion:person" className="pointer-events-none absolute left-3 top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
            </div>
        </div>
        {/* Email */}
        <div className="mb-2 md:mb-4 col-span-2 md:col-span-1">
            <label htmlFor="email" className="block text-sm font-medium">
                Email <span className="text-red-500">*</span>
            </label>
            <div className="relative rounded-md mt-2">
                <div className="relative">
                    <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Masukkan email"
                        className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    />
                    <Icon icon="ic:baseline-email" className="pointer-events-none absolute left-3 top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
            </div>
        </div>
        {/* Organisasi */}
        <div className="mb-2 md:mb-4 col-span-2 md:col-span-1">
            <label htmlFor="organization" className="block text-sm font-medium">
                Organisasi
            </label>
            <div className="relative rounded-md mt-2">
                <div className="relative">
                    <input
                        id="organization"
                        name="organization"
                        type="text"
                        placeholder="Masukkan organisasi"
                        className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    />
                    <Icon icon="clarity:organization-solid" className="pointer-events-none absolute left-3 top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
            </div>
        </div>
        {/* Message */}
        <div className="mb-2 md:mb-4 col-span-2">
            <label htmlFor="message" className="block text-sm font-medium">
                Pesan <span className="text-red-500">*</span>
            </label>
            <div className="relative rounded-md mt-2">
                <div className="relative">
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Isi pesan anda"
                        className="peer block w-full h-32 md:h-72 resize-none rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
                    />
                </div>
            </div>
        </div>

        <Button type="submit" className="col-span-2">Kirim Pesan</Button>
      </div>
    </form>
  );
}
