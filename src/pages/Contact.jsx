import React from "react";

const Contact = () => {
    return (
        <div className="flex flex-col gap-20 items-center">
            <h2 className="text-2xl mt-4  font-semibold">seek me at</h2>
            <div className="flex flex-col items-center gap-8">
                <a href="https://www.facebook.com/search/top/?q=phan%20%C4%91i%E1%BB%81n%20h%C3%A0o">
                    <img
                        src="https://www.facebook.com/images/fb_icon_325x325.png"
                        alt=""
                        className="w-1/3 mx-auto"
                    />
                </a>
                <a
                    href="https://www.facebook.com/search/top/?q=phan%20%C4%91i%E1%BB%81n%20h%C3%A0o"
                    className="text-lg text-blue-500"
                >
                    facebook/phandienhao
                </a>
            </div>
            <div className="flex flex-col items-center text-center">
                <a href="tel:0859999045 ">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/002/079/984/large_2x/phone-icon-flat-style-isolated-on-grey-background-telephone-symbol-call-illustration-sign-for-web-and-mobile-app-free-vector.jpg"
                        alt=""
                        className="w-1/3 mx-auto mb-10"
                    />
                    <a href="tel:0859999045 " className="text-lg text-red-500">
                        085.9999.045
                    </a>
                </a>
            </div>
            <div className="flex flex-col items-center gap-8">
                <a href="mailto:hethongxetaitaydo@gmail.com">
                    <img
                        src="https://cdn3.iconfinder.com/data/icons/vector-icons-for-mobile-apps-2/512/Mail_black-512.png"
                        alt=""
                        className="w-1/3 mx-auto mb-8"
                    />
                </a>
                <a
                    href="mailto:hethongxetaitaydo@gmail.com"
                    className="text-lg "
                >
                    hethongxetaitaydo@gmail.com
                </a>
            </div>
        </div>
    );
};

export default Contact;
