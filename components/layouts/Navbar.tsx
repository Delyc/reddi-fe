import Settings from "../svgs/Settings";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Link from "next/link";
import { useState } from "react";

const Navbar = ({show, handleModal}:{show: boolean; handleModal: () => void;}) => {
  console.log("clicked")


  return (
    <>
      <header className="flex justify-between items-center py-5 w-full fixed z-50 px-6 xl:px-20 bg-white border-b">
                    <h1 className="text-[#1d4865] font-bold text-3xl">BeMyVoice</h1>
                    <div className="w-12 h-12 md:hidden">

                        <svg className="w-full h-full" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 7a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm1 4a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3z" fill="#eb5b39" /></svg>

                    </div>

                    <ul className="md:flex gap-10 hidden ">
                        <li>Home</li>
                        <li>About</li>
                        <li>Explore Talents</li>
                        <li>Blog</li>
                        <li>Help</li>
                    </ul>
                    <div className="md:flex gap-10 hidden ">
                        <Button onClick={handleModal} className="bg-white border border-[#eb5b39] text-[#eb5b39] font-bold rounded-[50px]" text="Sign up" />
                        <Button className="bg-[#eb5b39] text-white" text="Support us" />
                    </div>
                </header>
    </>
  );
};
export default Navbar;
