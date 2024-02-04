"use client";

import { Icon } from "@iconify/react";
import { Button } from "./comment-button";

export default function CommentForm() {
  return (
    <form action="">
      <div className="mt-5 p-3 lg:px-36">
        <h1 className="text-[18px] font-medium">Berikan komentar Anda</h1>
        <span className="text-[13px] opacity-55">
          Email anda tidak akan dipublikasikan
        </span>
        <div className="grid grid-cols-9 gap-x-5 lg:gap-x-10 gap-y-5 mt-3">
          <div className="sm:col-span-3 col-span-9">
            <div className="relative rounded-md mt-2">
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  placeholder="Masukkan nama"
                  className="peer block w-full rounded-xl border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  defaultValue=""
                  aria-describedby="firstName-error"
                />
                <Icon
                  icon="ion:person"
                  className="pointer-events-none absolute left-3 top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-3 col-span-9">
            <div className="relative rounded-md mt-2">
              <div className="relative">
                <input
                  id="email"
                  type="text"
                  placeholder="Masukkan email"
                  className="peer block w-full rounded-xl border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  defaultValue=""
                  aria-describedby="firstName-error"
                />
                <Icon
                  icon="ic:baseline-email"
                  className="pointer-events-none absolute left-3 top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-3 col-span-9">
            <div className="relative rounded-md mt-2">
              <div className="relative">
                <input
                  id="website"
                  type="text"
                  placeholder="Masukkan website (opsional)"
                  className="peer block w-full rounded-xl border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  defaultValue=""
                  aria-describedby="firstName-error"
                />
                <Icon
                  icon="mdi:web"
                  className="pointer-events-none absolute left-3 top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
                />
              </div>
            </div>
          </div>
          <div className="col-span-9">
            <div className="relative rounded-md">
              <div className="relative">
                <textarea
                  id="message"
                  placeholder="Berikan komentar anda"
                  className="peer block w-full h-24 md:h-32 rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
                  defaultValue=""
                  aria-describedby="firstName-error"
                />
              </div>
            </div>
          </div>
          <Button type="submit" className="col-span-5 md:col-span-2">
            Kirim Komentar
          </Button>
        </div>
      </div>
    </form>
  );
}
