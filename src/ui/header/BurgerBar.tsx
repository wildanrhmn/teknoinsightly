"use client";

import { useContext } from "react";
import Link from "next/link";
import clsx from "clsx";

import { HeaderContext } from "@/lib/context/HeaderContext";

export default function BurgerBar() {
  const { isActive, setIsActive } = useContext(HeaderContext);

  const classNameAll = `bg-secondary block h-[3px] mb-[7px] w-[31px] rounded-[2px] transition-all duration-50`;
  const classNamefirstChild = clsx({
    "relative top-[10px] transform rotate-45": isActive,
  });
  const classNameSecondChild = clsx("w-[16px] flex-end", { hidden: isActive });
  const classNameLastChild = clsx({ "transform rotate-[135deg]": isActive });
  return (
    <Link
      id="mobile_btn"
      className="lg:hidden z-10"
      href="#"
      onClick={() => setIsActive(!isActive)}
    >
      <span className="w-[31px] mt-[5px] flex flex-col">
        <span className={`${classNameAll} ${classNamefirstChild}`} />
        <span className={`${classNameAll} ${classNameSecondChild}`} />
        <span className={`${classNameAll} ${classNameLastChild}`} />
      </span>
    </Link>
  );
}
