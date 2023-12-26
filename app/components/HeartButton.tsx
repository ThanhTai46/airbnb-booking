import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface HeartButtonProps {
    listingId: string
    currentUser?: any
}

const HeartButton: React.FC<HeartButtonProps> = ({
    listingId,
    currentUser
}) => {
    return <div className="relative hover:opacity-80 transition cursor-pointer">
        <AiOutlineHeart
            size={28}
            className="
          fill-white
          absolute
          -top-[2px]
          -right-[2px]
        "
        />
        <AiFillHeart
            size={24}
            className={
                false ? 'fill-rose-500' : 'fill-neutral-500/70'
            }
        />
    </div>;
};

export default HeartButton;
