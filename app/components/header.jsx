import React from "react";

export default function Header() {
    return (
        <header className="fixed w-full bg-white shadow-md p-4 z-10 " style={{backgroundColor: "#003366"}}>
            <div className="flex items-center justify-between px-48">
                <div className="flex items-center space-x-6 text-white">
                    <img
                        src="https://marvel-b1-cdn.bc0a.com/f00000000257779/www.newhaven.edu/_resources/images/_email/logos/unewhaven_stacked_logo_white.png"
                        height="55" width="55"/>
                    <h1 className="text-2xl">DSCI-6007</h1>
                </div>

                <nav className="flex justify-center space-x-8" style={{color: "#00B9FF"}}>
                    <a href="#course_description"
                       className="text-sm md:text-base lg:text-lg hover:text-blue-500">Course Description</a>
                    <a href="#schedule" className="text-sm md:text-base lg:text-lg hover:text-blue-500">Schedule</a>
                    <a href="#coursework"
                       className="text-sm md:text-base lg:text-lg hover:text-blue-500">Coursework</a>
                    <a href="#office_hours" className="text-sm md:text-base lg:text-lg hover:text-blue-500">Office
                        Hours</a>
                </nav>
            </div>
        </header>
    );
}