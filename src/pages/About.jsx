import React from "react";
import hero from "../asset/avt.jpg";

const About = () => {
    return (
        <div className=" px-3 bg-slate-100 ">
            <div className="flex flex-col gap-4 text-[#4267b2] ">
                <span className="font-semibold text-3xl ">
                    Fullname :
                    <span className="font-extrabold"> Phan Dien Hao</span>
                </span>
                <span className="font-semibold ">
                    Date of birth : April 25th, 1999
                </span>
                <span className="font-semibold">Gender : Male</span>
                <span className="font-semibold">
                    I am a student at an Cantho UNIVERSITY
                </span>
                <img
                    src={hero}
                    alt=""
                    className="border-2 border-dashed mt-5"
                />
                <span className="font-semibold mt-6 text-lg">
                    About myself, i am responsible for my work with my
                    companions.Especially, I have a passsion for football,
                    technology and good communication skills.
                </span>
            </div>
        </div>
    );
};

export default About;
