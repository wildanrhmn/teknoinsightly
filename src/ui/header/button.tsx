"use client";

import { Icon } from "@iconify/react";
import { useState, useRef, useEffect } from "react";
import clsx from "clsx";

import Link from "next/link";

export default function SearchButton() {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const divRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setIsOpened(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [divRef]);

  return (
    <div className="relative" ref={divRef}>
      <button
        onClick={() => setIsOpened(!isOpened)}
        className="w-[133px] h-[45px] bg-secondary text-primary flex justify-center items-center rounded-[16px] text-[15px] gap-1 hover:bg-[#218BB5] transition-colors duration-200"
      >
        Cari
        <Icon icon="raphael:arrowdown" fontSize={22} />
      </button>
      <div
        className={clsx(
          "absolute z-10 right-0 mt-[5px] rounded-[16px] bg-dark bg-opacity-50 w-[481px] h-[53px] p-[20px] flex items-center justify-center gap-[15px] opacity-0 translate-y-[-200px] transition-all duration-150",
          { "opacity-100 translate-y-[0px]": isOpened },
        )}
      >
        <input
          type="text"
          className="w-full h-[33px] rounded-[16px] bg-primary outline-none border-none text-[13px] px-5 focus:border-solid focus:border-secondary focus:border-2"
          placeholder="Cari..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link
          className="rounded-[16px] bg-secondary text-primary px-[15px] w-[120px] h-[34px] font-medium text-[14px]"
          href={`/search/${searchTerm}`}
        >
          Cari
        </Link>
      </div>
    </div>
  );
}
