import { Metadata } from "next";
import  HomePage  from "./home-page";
import { getSortedPostsData } from "../lib/posts";
export const metadata: Metadata = {
    title: "Home Page Root",
    description: "Page Root description",
}

export default async function Page(){
    const allPostsData = await getSortedPostsData()
    return <HomePage allPostsData={allPostsData}></HomePage>
}
