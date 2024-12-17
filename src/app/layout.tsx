import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script';
import Head from 'next/head'
import Link from 'next/link'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WeBook",
  description: "Um website para gerenciar livros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>


        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app" />


        <title>Book Web</title>

        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />


        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />

        <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/8.1.0/mdb.min.css" rel="stylesheet" />


        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" />

        <link href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" rel="stylesheet" />


        <script src="./static/sidebar.js"></script>

      </Head>


      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased` }
        id="body-pd"
      >
        <header className="header" id="header">
          <div className="header_toggle">
            <i className="bx bx-menu" id="header-toggle"></i>
          </div>
        </header>
        <div className="l-navbar" id="nav-bar">
          <nav className="nav">
            <div>
              <a
                href="#"
                className="nav_logo"
                style={{
                  right: '3px',
                  position: 'relative',
                }}
              >
                <i className="fas fa-book-open"></i>
                <span className="nav_logo-name">Web Books</span>
              </a>

              <div className="nav_list">
                <a href="/index" className="nav_link">
                  <i className="fas fa-book"></i>
                  <span className="nav_name">Biblioteca</span>
                </a>

                <a href="/search" className="nav_link">
                  <i className="fas fa-magnifying-glass"></i>
                  <span className="nav_name">Procurar</span>
                </a>

                <a
                  href="#"
                  className="nav_link"
                  style={{
                    right: '1px',
                    position: 'relative',
                  }}
                >
                  <i className="bx bx-bookmark nav_icon"></i>
                  <span className="nav_name">Favoritos</span>
                </a>

                <a
                  href="#"
                  className="nav_link"
                  style={{
                    left: '1.9px',
                    position: 'relative',
                  }}
                >
                  <i className="fas fa-gear"></i>
                  <span className="nav_name">Configurações</span>
                </a>
              </div>
            </div>

            <a href="#" className="nav_link">
              <i className="bx bx-log-out nav_icon"></i>
              <span className="nav_name">Sair</span>
            </a>
          </nav>
        </div>
        {children}

        <footer>
          
        </footer>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/8.1.0/mdb.umd.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

      </body>


    </html>
  );
}
