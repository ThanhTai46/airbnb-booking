"use client";

import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import Categories from "./Categories";
import dynamic from "next/dynamic";

const UserMenu = dynamic(() => import("./UserMenu"), { ssr: false, loading: () => <div>Loading...</div> });

const Navbar: React.FC = () => {
  return (
    <div className="w-full bg-white z-10  fixed">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="  
              flex 
              flex-row 
              items-center 
              justify-between
              gap-3
              md:gap-0"
          >
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;
