import Link from "next/link";

export default function NotFound() {
  return (
    <section className="w-full h-full py-[175px] flex flex-col justify-center items-center text-center overflow-hidden">
      <h2 className="text-3xl font-bold">Oopps!</h2>
      <p className="my-3">Seperti-nya kamu tersasar.</p>
      <Link href="/">
        Kembali ke{" "}
        <span className="text-secondary hover:underline">
          halaman awal {">>"}
        </span>
      </Link>
    </section>
  );
}
