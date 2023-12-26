import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import RegisterModal from "./components/modals/RegisterModal";
import { Toaster } from "react-hot-toast";
import LoginModal from "./components/modals/LoginModal";
import { NextAuthProvider, NextUiProvider } from "./providers";
import RentModal from "./components/modals/RentModal";
import { Nunito } from "next/font/google";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb",
};


const font = Nunito({
  subsets: ["latin"],
});


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NextAuthProvider>
          <NextUiProvider>
            <Navbar />
            <RentModal />
            <RegisterModal />
            <LoginModal />
            <Toaster />
            <div className="pb-20 pt-28">
              {children}
            </div>
          </NextUiProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
