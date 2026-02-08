import { Geist, Geist_Mono } from "next/font/google";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "Shree Laxmi Welding Works | Best Welding & Steel Fabrication Near You",
  description:
    "Shree Laxmi Welding Works – trusted welding shop in Vasai-Virar. Gate fabrication, iron works, steel fabrication, railing & more. Call for a quote today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakarta.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
