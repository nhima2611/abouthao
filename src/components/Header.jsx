import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";

import avatar from "../asset/avt.jpg";

const nav = [
    {
        display: "Home",
        path: "/",
    },
    {
        display: "About",
        path: "/about",
    },
    {
        display: "Life",
        path: "/life",
    },
    {
        display: "Contact",
        path: "/contact",
    },
];

const Header = () => {
    const [open, setOpen] = useState(false);
    const show = () => {
        setOpen(!open);
    };

    return (
        <div>
            {!open ? (
                <div className="w-full h-11 bg-[#03A5F0]  flex justify-end items-center sticky">
                    <BiMenuAltLeft
                        onClick={show}
                        className="text-6xl text-white p-2 "
                    />
                </div>
            ) : (
                <div className="w-full h-[900px] absolute right-0 bg-white  z-[99999]">
                    <div className="flex justify-end p-2">
                        <IoIosClose
                            className="text-4xl text-gray-700 "
                            onClick={show}
                        />
                    </div>
                    <div className="flex gap-2 flex-col justify-center items-center text-center ">
                        <img
                            src={avatar}
                            alt=""
                            className="rounded-full bg-cover w-2/3 h-2/3 mt-10"
                        />
                        <h3 className="font-semibold text-lg">PHAN DIEN HAO</h3>
                        <span className="font-semibold">SELLER AUTO </span>
                        <span className="text-blue-500 opacity-80">
                            IN AUTO TAYDO
                        </span>
                    </div>
                    <div className="mt-[80px] flex flex-col items-center gap-10">
                        {nav.map((item, index) => {
                            return (
                                <ul
                                    className="flex flex-col gap-5"
                                    onClick={show}
                                >
                                    <Link to={item.path}>
                                        <li className="text-gray-700 text-base font-semibold hover:text-gray-400">
                                            {item.display}
                                        </li>
                                    </Link>
                                </ul>
                            );
                        })}
                    </div>
                    <div className="text-center mt-[60px] flex flex-col text-sm opacity-60">
                        <span>Coppyright 2022 All right reserved</span>
                        <span>Design by Namnhi</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
