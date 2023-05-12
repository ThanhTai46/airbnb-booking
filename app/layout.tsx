import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import RegisterModal from "./components/modals/RegisterModal";
import { Toaster } from "react-hot-toast";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";

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
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar currentUser={currentUser} />
        <RegisterModal />
        <LoginModal />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
