import React from "react";
import background from "../asset/134.jpg";

const Content = () => {
    return (
        <div className="h-[100vh]">
            <div className="relative h-[100%]">
                <img src={background} alt="" className="h-full object-fill" />
            </div>
            <div className="absolute top-[150px] px-2">
                <div
                    className="text-teal-50
                 text-2xl  flex flex-col gap-5"
                >
                    Please never give up.
                    <span className="text-2xl uppercase">
                        {" "}
                        Although today is hard, tomorrow will be worse
                    </span>{" "}
                    <span className="text-4xl leading-tight uppercase">
                        {" "}
                        but the day after tomorrow will surely be sunshine.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Content;
