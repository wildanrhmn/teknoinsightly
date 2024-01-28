import Image from "next/image"

import NavLinks from "./nav-links"
import SearchButton from "./button"

export default function Header(){

    return(
        <header className="w-full bg-primary h-19">
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
                  
                </div>
            </div>
        </header>
    )
}