"use client";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import RegisterModal from "../modals/RegisterModal";
import { useRegisterModal } from "@/app/hooks/useRegisterModal";
import { useLoginModal } from "@/app/hooks/useLoginModal";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";

interface currentUserProps {
  currentUser: User | null;
}

const UserMenu: React.FC<currentUserProps> = ({ currentUser }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const toggleMenu = useCallback(() => {
    setIsOpenMenu(!isOpenMenu);
  }, [isOpenMenu]);

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
          Airbnb your home
        </div>
        <div
          onClick={toggleMenu}
          className="p-4 md:py-1 md:px-2 border border-neutral-200 flex
            items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition ease-in duration-300
        "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpenMenu && (
        <div className="transition ease-in duration-300 absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem label="My trips" onClick={loginModal.onOpen} />
                <MenuItem label="My favorites" onClick={loginModal.onOpen} />
                <MenuItem label="My reservations" onClick={loginModal.onOpen} />
                <MenuItem label="My properties" onClick={loginModal.onOpen} />
                <MenuItem label="Airbnb my home" onClick={loginModal.onOpen} />
                <hr />
                <MenuItem label="Log out" onClick={() => signOut()} />
              </>
            ) : (
              <>
                <RegisterModal />
                <MenuItem label="Sign up" onClick={registerModal.onOpen} bold />
                <MenuItem label="Login" onClick={loginModal.onOpen} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
