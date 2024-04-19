import { Inter } from "next/font/google";
import "./globals.css";
import { MainContext } from "../../Context/MainContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <MainContext>
        <body className={inter.className}>{children}</body>
      </MainContext>
    </html>
  );
}
