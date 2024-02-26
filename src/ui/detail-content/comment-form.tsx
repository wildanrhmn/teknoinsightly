"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Button } from "./comment-button";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { commentFormAction } from "@/lib/action";
import { useForm, SubmitHandler } from "react-hook-form";
import { messageDataSchema } from "@/lib/schema/schema";

import Swal from "sweetalert2";

type Inputs = z.infer<typeof messageDataSchema>;

export default function CommentForm({ id_post }: { id_post: string }) {
  const [data, setData] = useState<Inputs>();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(messageDataSchema),
  });

  const processForm: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);
    setData({ ...data, id_post });
    const res = await commentFormAction(data);

    if (res?.error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Telah terjadi kesalahan!",
        showConfirmButton: false,
        timer: 3000,
      });
    }

    setIsLoading(false);
  };
  return (
    <form onSubmit={handleSubmit(processForm)}>
      <div className="mt-5 p-3 lg:px-36 text-dark">
        <h1 className="text-[18px] font-medium ">Berikan komentar Anda</h1>
        <span className="text-[13px] opacity-55">
          Email anda tidak akan dipublikasikan
        </span>
        <div className="grid grid-cols-9 gap-x-5 lg:gap-x-10 gap-y-5 mt-3">
          <div className="sm:col-span-3 col-span-9 hidden">
            <div className="relative rounded-md mt-2">
              <div className="relative">
                <input
                  id="id_post"
                  type="text"
                  defaultValue={id_post}
                  {...register("id_post")}
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-3 col-span-9">
            <div className="relative rounded-md mt-2">
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  placeholder="Masukkan nama"
                  className="peer block w-full rounded-xl border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  defaultValue=""
                  aria-describedby="name-error"
                  {...register("name")}
                />
                <Icon
                  icon="ion:person"
                  className="pointer-events-none absolute left-3 top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
                />
              </div>
              {errors.name?.message && (
                <p
                  className="text-sm text-red-400"
                  aria-describedby="name-error"
                >
                  {errors.name.message}
                </p>
              )}
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
                  aria-describedby="email-error"
                  {...register("email")}
                />
                <Icon
                  icon="ic:baseline-email"
                  className="pointer-events-none absolute left-3 top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
                />
              </div>
              {errors.email?.message && (
                <p
                  className="text-sm text-red-400"
                  aria-describedby="email-error"
                >
                  {errors.email.message}
                </p>
              )}
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
                  aria-describedby="website-error"
                  {...register("website")}
                />
                <Icon
                  icon="mdi:web"
                  className="pointer-events-none absolute left-3 top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
                />
              </div>
              {errors.website?.message && (
                <p
                  className="text-sm text-red-400"
                  aria-describedby="website-error"
                >
                  {errors.website.message}
                </p>
              )}
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
                  aria-describedby="comment-error"
                  {...register("message")}
                />
              </div>
              {errors.message?.message && (
                <p
                  className="text-sm text-red-400"
                  aria-describedby="name-error"
                >
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>
          <Button type="submit" className="col-span-5 md:col-span-2">
            {isLoading ? (
              <Icon
                icon="line-md:loading-twotone-loop"
                className=" h-[24px] w-[24px]"
              />
            ) : (
              "Kirim Komentar"
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}
