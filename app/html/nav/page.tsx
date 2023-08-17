import React from "react";

import { SVGButton } from "@components/icons";

export default async function HtmlLayout() {
    return (
        <>
            <div className=" w-full max-w-7xl">
                <div className="flex flex-col max-w-screen-xl p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                    <div className="flex flex-row items-center justify-between lg:justify-start">
                        <a className="text-lg font-bold tracking-tighter text-blue-600 transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8" href="/posts/first-post"> MENU </a>
                        <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline" >
                            <SVGButton />
                        </button>
                    </div>
                    <nav className="flex-col flex-grow hidden md:flex md:justify-start md:flex-row">
                        <ul className="space-y-2 list-none lg:space-y-0 lg:items-center lg:inline-flex">
                            <li>
                                <a href="#" className="px-2 lg:px-6 py-6 text-sm border-b-2 border-transparent leading-[22px] md:px-3 text-gray-500 hover:text-blue-500 hover:border-blue-600"> FAQ </a>
                            </li>
                            <li>
                                <a href="https://www.wickedtemplates.com/" className="px-2 lg:px-6 py-6 text-sm border-b-2 border-transparent hover:border-blue-600 leading-[22px] md:px-3 text-gray-500 hover:text-blue-500">
                                    Free <span className="hidden lg:inline">Templates </span>
                                </a>
                            </li>
                            <li>
                                <div className="absolute right-0 z-30 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48" style={{ display: "none" }}>
                                    <div className="px-2 py-2 bg-white rounded-md shadow">
                                        <a className="block px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline" href="#">Link #1</a>
                                        <a className="block px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline" href="#">Link #2</a>
                                        <a className="block px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline" href="#">Link #3</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
                            <button className="items-center block px-10 py-2.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Sign in</button>
                            <button className="items-center block px-10 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Sign up</button>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}
