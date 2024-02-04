import Image from "next/image";

export default function Comments() {
  return (
    <div className="mt-3 p-3">
      <h1 className="text-[18px] font-bold">Semua Komentar</h1>
      <div className="grid grid-cols-8 my-5">
        <div className="col-span-8">
          <div className="flex gap-3">
            <div className="relative w-[65px] h-[65px] flex-shrink-0">
              <Image
                src="/dummy_img4.png"
                alt=""
                fill
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col sm:gap-1 gap-3 w-full sm:w-[75%]">
                <div className="flex flex-col md:flex-row justify-between">
                    <h5 className="text-[15px] font-bold">Wildan Nur Rahman</h5>
                    <span className="text-[12px] opacity-55">29 MARET 2022 / 12:50 AM</span>
                </div>
              <p  className="text-[15px] leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Morbi tristique senectus et netus. Semper quis lectus nulla at
                volutpat diam ut venenatis. Nulla facilisi morbi tempus iaculis
                urna id volutpat lacus laoreet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
