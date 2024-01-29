import Link from "next/link"
import clsx from "clsx";
import { NavSubLinks } from "@/lib/definiton/definition";

type NavSubLinksProps = {
    navData?: NavSubLinks[];
  };

  export default function NavSubLinks({ navData = [] }: NavSubLinksProps) {
    return (
      <div className="absolute z-10 rounded-bl-xl gap-1 rounded-br-xl w-[209px] top-[30px] left-[-65px] flex-col bg-dark text-primary text-[14px] opacity-0 flex invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
        {navData.map((link, index) => (
          <Link key={link.name} href={link.href} className={clsx(
            'py-2.5 px-3 hover:bg-slate-700 transition-all duration-50',
            {
              'rounded-br-xl rounded-bl-xl': index === navData.length - 1,
            },
          )}>
            {link.name}
          </Link>
        ))}
      </div>
    );
  }