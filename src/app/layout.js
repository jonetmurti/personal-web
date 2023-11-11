import { Montserrat, Hind } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/common/Footer";
import { links } from "@/constants/navigation";
import Providers from "./providers";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const hind = Hind({
  subsets: ["latin"],
  variable: "--font-hind",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Jonet Murti - Website",
  description: "Jonet's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${hind.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="font-body text-black/60 dark:text-white/60">
        <Providers>
          <Navbar links={links} />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
