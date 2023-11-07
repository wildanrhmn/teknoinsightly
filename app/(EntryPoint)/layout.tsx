'use client'

import Header from "@/components/header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const removeOverlay = () => {
    document.querySelector(".sidebar-overlay")!.classList.remove("opened");
    document.querySelector("html")!.classList.remove("menu-opened");
  };

  return (
    <>
    <Header />
        <section>
            {children}
        </section>
        <div className="sidebar-overlay" onClick={removeOverlay}></div>
    </>
);
}
