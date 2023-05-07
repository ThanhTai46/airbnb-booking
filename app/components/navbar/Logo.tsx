"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Logo = () => {
  const router = useRouter();

  return (
    <Image
      loading="lazy"
      onClick={() => router.push("/")}
      height="100"
      width="100"
      alt="Logo"
      className="hidden md:block cursor-pointer"
      src="/images/logo.png"
    />
  );
};

export default Logo;
