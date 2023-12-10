'use client'

import { FunctionComponent, useState } from 'react';

import Image from 'next/image';
import Link from 'next/dist/client/link';
import { usePathname } from 'next/navigation';

import '../../assets/css/header.css';
import logo from '../../assets/logo.webp'

import { Icon } from '@iconify/react';

const Header: FunctionComponent = () => {
    const pathname = usePathname();
    const [searchOpen, setSearchOpen] = useState<boolean>(false);
    const sidebarOverlay = () => {
        document.querySelector(".sidebar-overlay")!.classList.toggle("opened");
        document.querySelector("html")!.classList.toggle("menu-opened");
    };

    return (
        <section className='header'>
            <div className='container'>
                <div className='logo d-flex align-items-center'>
                    <Image src={logo} alt='logo' width={65} height={65} />
                </div>
                <div className='tabs d-lg-block'>
                    <ul className='d-flex align-items-center gap-5'>
                        <li><Link href={"/home"} className={pathname === "/home" ? "active" : ""}>Home</Link></li>
                        <li><Link href={"/articles"} className={pathname === "/articles" ? "active" : ""}>Berita</Link></li>
                        <li><Link href={"/tutorials"} className={pathname === "/tutorials" ? "active" : ""}>Tutorial</Link></li>
                        <li><Link href={"/contact"} className={pathname === "/contact" ? "active" : ""}>Kontak Kami</Link></li>
                    </ul>
                </div>
                <div className='search-area d-none d-lg-block'>
                    <div className='search-set'>
                        <button className='d-flex align-items-center justify-content-center gap-3' onClick={() => setSearchOpen(!searchOpen)}>
                            <Icon icon="ic:baseline-search" fontSize={24} />
                            <span>Cari</span>
                            <Icon icon="raphael:arrowdown" fontSize={24} />
                        </button>
                        <div className={`search-form ${searchOpen ? 'active' : ''}`}>
                            <input type="text" />
                            <button>Cari</button>
                        </div>
                    </div>
                </div>
                <Link
                    id="mobile_btn"
                    className="d-block d-lg-none"
                    href="#"
                    onClick={sidebarOverlay}
                >
                    <span className="bar-icon">
                        <span />
                        <span />
                        <span />
                    </span>
                </Link>
            </div>
        </section>
    )
}

export default Header;