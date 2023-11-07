'use client'

import { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/dist/client/link';

import '../../assets/css/header.css';
import logo from '../../assets/logo.webp'

import SearchIcon from '@mui/icons-material/Search';

const Header: FunctionComponent = () => {
    const sidebarOverlay = () => {
        document.querySelector(".sidebar-overlay")!.classList.toggle("opened");
        document.querySelector("html")!.classList.toggle("menu-opened");
    };

    return (
        <section className='header'>
            <div className='container d-flex align-items-center justify-content-between'>
                <div className='logo d-flex align-items-center'>
                    <Image src={logo} alt='logo' width={65} height={65} />
                    <span className=''>Hardware Haven</span>
                </div>
                <div className='tabs d-lg-block'>
                    <ul className='d-flex align-items-center gap-5'>
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/"}>News</Link></li>
                        <li><Link href={"/"}>Reviews</Link></li>
                        <li><Link href={"/"}>About</Link></li>
                        <li><Link href={"/"}>Contact Us</Link></li>
                    </ul>
                </div>
                <div className='search-area d-none d-lg-block'>
                    <div className='search-set'>
                        <input type="text" />
                        <SearchIcon className='search-icon' />
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