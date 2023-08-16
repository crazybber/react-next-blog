import React from "react";
import { SVGButton } from "@components/icons";

export default async function HtmlLayout() {
    return (
        <>
            <div className=" w-full max-w-7xl">
                <div x-data="{ open: false }" className="flex flex-col max-w-screen-xl p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                    <div className="flex flex-row items-center justify-between lg:justify-start">
                        <a className="text-lg font-bold tracking-tighter text-blue-600 transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8" href="/groups/header/"> MENU </a>
                        <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
                            <SVGButton />
                        </button>
                    </div>
                    <nav className="flex-col flex-grow hidden md:flex md:justify-start md:flex-row">
                        <ul className="space-y-2 list-none lg:space-y-0 lg:items-center lg:inline-flex">
                            <li>
                                <a href="#" className="px-2 lg:px-6 py-6 text-sm border-b-2 border-transparent hover:border-blue-600 leading-[22px] md:px-3 text-gray-500 hover:text-blue-500"> All <span className="hidden lg:inline"> templates </span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="px-2 lg:px-6 py-6 text-sm border-b-2 border-transparent leading-[22px] md:px-3 text-gray-500 hover:text-blue-500 hover:border-blue-600"> FAQ </a>
                            </li>
                            <li>
                                <a href="https://www.wickedtemplates.com/" className="px-2 lg:px-6 py-6 text-sm border-b-2 border-transparent hover:border-blue-600 leading-[22px] md:px-3 text-gray-500 hover:text-blue-500"> 
                                Free <span className="hidden lg:inline">Templates </span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="flex justify-center items-center h-screen bg-green-100">
                <div className="bg-white p-8 rounded shadow-md">
                    <h1 className="text-2xl">Hello Tailwind CSS Site!</h1>
                    <p className="text-gray-600"> this is some sample name</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded mt-4">
                        Click me!
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap">
                <div className="w-1/3 p-4">
                    <div className="bg-white p-4 rounded shadow-md">
                        <h2 className="text-lg font-bold">Hello Card1</h2>
                        <p> this is some content</p>
                    </div>
                </div>
                <div className="w-1/3 p-4">
                    <div className="bg-white p-4 rounded shadow-md">
                        <h2 className="text-lg font-bold">Hello Card2</h2>
                        <p> this is some content</p>
                    </div>
                </div>
                <div className="w-1/3 p-4">
                    <div className="bg-white p-4 rounded shadow-md">
                        <h2 className="text-lg font-bold">Hello Card3</h2>
                        <p> this is some content</p>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-green-800">
                <h1 className="text-gray-900 dark:text-white"> Dark mode is here</h1>
                <p className="text-gray-600 dark:text-gray-300">more content here..</p>
            </div>
        </>
    );
}
