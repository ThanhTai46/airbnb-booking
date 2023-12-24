"use client";
import Image from "next/image";

interface AvatarProps {
  imageUser?: string;
}
function Avatar({ imageUser }: AvatarProps) {
  return (
    <Image
      //   onClick={() => {}}
      width="30"
      height="30"
      alt="Avatar"
      src={imageUser || "/images/avatar.jpeg"}
      className="rounded-full"
    />
  );
}

export default Avatar;
