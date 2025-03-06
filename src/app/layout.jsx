import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

// Load the Poppins font
const poppins = Poppins({
  weight: ["400", "500", "600", "700"], // You can adjust the weights you need
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "CuyAnimeList",
  description: "Website Anime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased bg-[#222831]`} suppressHydrationWarning={true}>
        <NavBar />
        {children}
      </body> 
    </html>
  );
}
