import React from "react";

export default async function HtmlLayout() {
    return (
        <>
            <div className="bg-red-500 text-xl">Hello Tailwind CSS!</div>
            <div className="flex justify-center items-center h-screen bg-green-100">
                <div className="bg-white p-8 rounded shadow-md">
                <h1 className="text-2xl">Hello Tailwind CSS Site!</h1>
                <p className="text-gray-600"> this is some sample name</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded mt-4">Click me!</button>
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
        </>
    );
}
