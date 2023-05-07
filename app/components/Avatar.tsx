"use client";
import Image from "next/image";

function Avatar() {
  return (
    <Image
      //   onClick={() => {}}
      width="30"
      height="30"
      alt="Avatar"
      src="/images/avatar.jpeg"
      className="rounded-full"
    />
  );
}

export default Avatar;
