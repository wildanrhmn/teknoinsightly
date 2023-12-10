'use client'

import Provider from '@/lib/Provider'

import "../assets/css/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/components/header/Header';

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
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico'/>
      </head>
      <body>
        <Provider>
          <Header />
          <main>
            {children}
          </main>
          <div className="sidebar-overlay" onClick={removeOverlay}></div>
          </Provider>
      </body>
    </html>
  );
}