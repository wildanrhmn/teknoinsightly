import Image from "next/image"

import NavLinks from "./nav-links"
import MobileNavLinks from "./mobile-navlinks"
import SearchButton from "./button"
import BurgerBar from "./BurgerBar"

export default function Header(){
    return(
        <header className="w-full bg-primary h-19 fixed top-0 z-10 shadow-sm">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <Image src='/logo.webp' width={65} height={65} alt="TeknoInsight Logo" />
                    </div>
                    <div className="hidden lg:flex items-center gap-[55px]">
                        <NavLinks />
                    </div>
                    <div className="hidden lg:flex items-center">
                        <SearchButton />
                    </div>
                    <div className="lg:hidden flex items-center mr-7 z-30">
                        <BurgerBar />
                    </div>
                        <MobileNavLinks />
                </div>
            </div>
        </header>
    )
}