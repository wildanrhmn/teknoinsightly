import Form from "@/ui/contact/contact-form";
import Image from "next/image";

export default function Page() {
  return (
    <section className=" bg-secondary">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 p-5 md:p-20">
          <div className="place-items-center hidden md:grid">
            <Image
              src="/contact-img.webp"
              alt="Contact Us"
              width={750}
              height={500}
              className="rounded-sm"
            />
          </div>
          <div className="bg-primary shadow-md rounded-md p-6 md:p-10">
            <div className="flex flex-col gap-1 mb-10">
              <h1 className="text-[28px] font-bold text-dark">Hubungi Kami!</h1>
              <span className="text-[14px] text-red-600">
                (*) berarti field wajib diisi.
              </span>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
