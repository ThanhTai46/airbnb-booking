"use client";

import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import RegisterModal from "../modals/RegisterModal";
import { useRegisterModal } from "@/app/hooks/useRegisterModal";
import { useLoginModal } from "@/app/hooks/useLoginModal";
import { signOut, useSession } from "next-auth/react";
import { useRentModal } from "@/app/hooks/useRentModal";



const UserMenu: React.FC = () => {
  const { data: currentUser } = useSession()
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();

  const toggleMenu = useCallback(() => {
    setIsOpenMenu(!isOpenMenu);
  }, [isOpenMenu]);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen()
    }

    rentModal.onOpen();
  }, [currentUser, loginModal])

  return (
    <div className="relative">

      <div className="flex items-center gap-3">
        <div onClick={onRent} className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
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
            <Avatar imageUser={currentUser?.user?.image as string} />
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
                <MenuItem label="Airbnb my home" onClick={rentModal.onOpen} />
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
