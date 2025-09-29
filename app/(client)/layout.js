import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from "../utils/Provider";
import Navbar from "../components/NavBar"; //Ojo con el doble Navbar
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_URL;

export const metadata = {
  metadataBase: FRONTEND_URL,
  // title: "Dev Blook - A blog for developers",
  title: {
    default: "Dev Blook - A blog for developers",
    template: '%s | Dev Blook - A blog for developers'
  },
  description: "A blog for developers by developers!",
  openGraph: {
    title: "Dev Blook - A blog for developers",
    description: "A blog for developers by developers!",
    type: "website",
    locale: "en_US",
    url: FRONTEND_URL,
    siteName: "DevBlook"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body
      // className={`${firaCode.className} h-full bg-amber-50 text-indigo-950 dark:bg-slate-950 dark:text-amber-50 dark:selection:bg-purple-500`}
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <Provider>
        <Navbar />
        <main className="h-full mx-auto max-w-5xl px-6">{children}</main>
      </Provider>
    </body>
  </html>
  );
}
