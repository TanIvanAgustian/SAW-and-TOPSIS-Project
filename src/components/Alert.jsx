import { XMarkIcon, CheckIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import AOS from "aos"

const Alert = ({ variant, message, onClose }) => {

    useEffect(()=>{
        AOS.init({duration:400})
    })
    const variants = {
        success:
            "bg-green-600 border lg:w-5/12 md:w-7/12 w-10/12 text-white font-normal lg:text-lg md:text-base text-sm px-4 py-2 rounded-full",
        danger: "bg-red-600 border lg:w-5/12 md:w-7/12 w-10/12 text-white font-normal lg:text-lg md:text-base text-sm px-4 py-2 rounded-full",
    };

    const border = {
        success: "bg-green-50",
        danger: "bg-red-50",
    };
    return (
        <div className="fixed inset-0 top-10 h-fit flex items-start justify-center z-50 transition-opacity opacity-100" data-aos="fade-down">
            <div
                className={`flex justify-between items-center lg:min-w-[343px] min-w-[200px] w-fit h-[44px] ${variants[variant]}`}
                role="alert"
            >
                <div className="flex gap-2 items-center">
                    <div
                        className={`px-2 py-1 rounded-full ${border[variant]}`}
                    >
                        {variant == "danger" ? (
                            <XMarkIcon
                                className="w-5 h-5 text-error-600"
                                onClick={onClose}
                            />
                        ) : (
                            <CheckIcon
                                className="w-5 h-5 text-green-600"
                                onClick={onClose}
                            />
                        )}
                    </div>
                    <p className="block sm:inline">{message}</p>
                </div>
                <XMarkIcon id="close_modal" className="w-5 h-5 text-white mx-1" onClick={onClose} />
            </div>
        </div>
    );
};

export default Alert;
