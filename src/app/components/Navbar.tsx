import React from "react";
import Image from "next/image";
import { Socials } from "../constants";

const Navbar = () => {
    return (
        <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
            <div className="flex flex-row gap-3 items-center">
                <div className="relative">
                    <Image
                        src="/sakuraLogo.png"
                        alt="logo"
                        width={32}
                        height={32}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <h1 className="text-white text-[25px] font-semibold">Zuong</h1>
            </div>

            <div className="flex flex-row gap-5 mb-2">
                {Socials.map((social) => {
                    return <Image src={social.src} alt={social.name} key={social.name} width={28} height={28} />;
                })}
            </div>
        </div>
    );
};

export default Navbar;
