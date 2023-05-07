"use client";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
function UserMenu() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

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
            <MenuItem label="Sign up" onClick={() => {}} bold />
            <MenuItem label="Login" onClick={() => {}} />
          </div>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
