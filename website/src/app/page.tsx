import MarkdownRenderer from "../components/MarkdownRenderer";
import React from "react";

export default async function Home() {

    const data = await getReadMe();

    return (
        <div className="w-full h-full flex justify-center p-4">
            <MarkdownRenderer className="m-4 w-full p-2 md:w-4/12 lg:w-5/12 xl:w-6/12 2xl:w-7/12 md:p-0 h-full">{data}</MarkdownRenderer>
        </div>
    )
}

const getReadMe = async () => {
    const data = await fetch("https://raw.githubusercontent.com/solacejs/solace.js/main/README.md");
    return await data.text();
}