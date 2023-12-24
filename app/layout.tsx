import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import RegisterModal from "./components/modals/RegisterModal";
import { Toaster } from "react-hot-toast";
import LoginModal from "./components/modals/LoginModal";
import { NextAuthProvider } from "./providers";
import Categories from "./components/navbar/Categories";
import RentModal from "./components/modals/RentModal";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb",
};


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <Navbar />
          <RentModal />
          <RegisterModal />
          <LoginModal />
          <Toaster />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
