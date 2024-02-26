"use client";

import { useState } from "react";
import { Button } from "./button-form";
import { Icon } from "@iconify/react";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { contactFormAction } from "@/lib/action";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormDataSchema } from "@/lib/schema/schema";

import Swal from "sweetalert2";

type Inputs = z.infer<typeof FormDataSchema>;

export default function Form() {
  const [data, setData] = useState<Inputs>();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
  });

  const processForm: SubmitHandler<Inputs> = async (data) => {
    setData(data);
    setIsLoading(true);

    const res = await contactFormAction(data);

    if (res?.error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Telah terjadi kesalahan!",
        showConfirmButton: false,
        timer: 3000,
      });
    }

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Email berhasil dikirim!",
      showConfirmButton: false,
      timer: 3000,
    }).then(() => {
      setIsLoading(false);
      reset();
    });
  };

  return (
    <form onSubmit={handleSubmit(processForm)}>
      <div className="grid grid-cols-2 gap-3">
        {/* First name */}
        <div className="mb-2 md:mb-4 col-span-2 md:col-span-1">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-dark"
          >
            Nama depan <span className="text-red-500">*</span>
          </label>
          <div className="relative rounded-md mt-2">
            <div className="relative">
              <input
                id="firstName"
                type="text"
                placeholder="Masukkan nama depan"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue=""
                aria-describedby="firstName-error"
                {...register("firstName")}
              />
              <Icon
                icon="ion:person"
                className="pointer-events-none absolute left-3 top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
              />
            </div>
            {errors.firstName?.message && (
              <p
                className="text-sm text-red-400"
                aria-describedby="firstName-error"
              >
                {errors.firstName.message}
              </p>
            )}
          </div>
        </div>
        {/* Last name */}
        <div className="mb-2 md:mb-4 col-span-2 md:col-span-1">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-dark"
          >
            Nama Belakang
          </label>
          <div className="relative rounded-md mt-2">
            <div className="relative">
              <input
                id="lastName"
                type="text"
                placeholder="Masukkan nama belakang"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue=""
                aria-describedby="lastName-error"
                {...register("lastName")}
              />
              <Icon
                icon="ion:person"
                className="pointer-events-none absolute left-3 top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
              />
            </div>
          </div>
          {errors.lastName?.message && (
            <p
              className="text-sm text-red-400"
              aria-describedby="lastName-error"
            >
              {errors.lastName.message}
            </p>
          )}
        </div>
        {/* Email */}
        <div className="mb-2 md:mb-4 col-span-2 md:col-span-1">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-dark"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <div className="relative rounded-md mt-2">
            <div className="relative">
              <input
                id="email"
                type="text"
                placeholder="Masukkan email"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
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
        {/* Organisasi */}
        <div className="mb-2 md:mb-4 col-span-2 md:col-span-1">
          <label
            htmlFor="organization"
            className="block text-sm font-medium text-dark"
          >
            Organisasi
          </label>
          <div className="relative rounded-md mt-2">
            <div className="relative">
              <input
                id="organization"
                type="text"
                placeholder="Masukkan organisasi"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue=""
                aria-describedby="organization-error"
                {...register("organization")}
              />
              <Icon
                icon="clarity:organization-solid"
                className="pointer-events-none absolute left-3 top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
              />
            </div>
            {errors.organization?.message && (
              <p
                className="text-sm text-red-400"
                aria-describedby="organization-error"
              >
                {errors.organization.message}
              </p>
            )}
          </div>
        </div>
        {/* Message */}
        <div className="mb-2 md:mb-4 col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-dark"
          >
            Pesan <span className="text-red-500">*</span>
          </label>
          <div className="relative rounded-md mt-2">
            <div className="relative">
              <textarea
                id="message"
                placeholder="Isi pesan anda"
                className="peer block w-full h-32 md:h-72 resize-none rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
                defaultValue=""
                aria-describedby="firstName-error"
                {...register("message")}
              />
            </div>
            {errors.message?.message && (
              <p
                className="text-sm text-red-400"
                aria-describedby="message-error"
              >
                {errors.message.message}
              </p>
            )}
          </div>
        </div>

        <Button type="submit" className="col-span-2">
          {isLoading ? (
            <Icon
              icon="line-md:loading-twotone-loop"
              className=" h-[24px] w-[24px]"
            />
          ) : (
            "Kirim Email"
          )}
        </Button>
      </div>
    </form>
  );
}
