import Link from "next/link"
import Image from "next/image"

export default function Footer(){
    return(
        <footer className="w-full bg-dark mt-10">
            <div className="container mx-auto py-[55px]">
                <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row justify-around">
                    <div className="flex flex-col gap-1 sm:gap-5 text-primary items-center sm:items-start">
                        <h5 className="text-[24px] font-bold text-secondary">Halaman</h5>
                        <div className="flex flex-col gap-3 sm:gap-5 text-[14px] items-center sm:items-start">
                            <Link href='/home' className="hover:underline hover:text-secondary">Beranda</Link>
                            <Link href='/about-us' className="hover:underline hover:text-secondary">Tentang Kami</Link>
                            <Link href='/privacypolicy' className="hover:underline hover:text-secondary">Kebijakan Privasi</Link>
                            <Link href='/contact-us' className="hover:underline hover:text-secondary">Kontak</Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 sm:gap-5 text-primary items-center sm:items-start">
                        <h5 className="text-[24px] font-bold text-secondary">Kategori</h5>
                        <div className="flex flex-col gap-3 sm:gap-5 text-[14px] items-center sm:items-start">
                            <Link href='/article/graphic-cards' className="hover:underline hover:text-secondary">Graphics Cards</Link>
                            <Link href='/article/processors' className="hover:underline hover:text-secondary">Processors</Link>
                            <Link href='/article/motherboards' className="hover:underline hover:text-secondary">Motherboards</Link>
                            <Link href='/article/storages' className="hover:underline hover:text-secondary">Storage</Link>
                            <Link href='/article/ram' className="hover:underline hover:text-secondary">RAM</Link>
                            <Link href='/article/power-supplies' className="hover:underline hover:text-secondary">Power Supply</Link>
                            <Link href='/article/coolings' className="hover:underline hover:text-secondary">Cooling</Link>
                            <Link href='/article/accessories' className="hover:underline hover:text-secondary">Accessories</Link>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src={'/logo.webp'} alt="TeknoInsight Logo" width={150} height={150} />
                        <h3 className="text-secondary italic text-[24px] font-extrabold">TeknoInsight</h3>
                        <span className="text-primary italic text-[14px]">© 2024 TeknoInsight</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}