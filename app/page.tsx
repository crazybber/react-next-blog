import { Metadata } from "next";
import  HomePage  from "./home-page";
import { getSortedPostsData } from "../lib/posts";
export const metadata: Metadata = {
    title: "Home Page 1",
    description: "Page description",
}

export default async function Page(){
    const allPostsData = await getSortedPostsData()
    return <HomePage allPostsData={allPostsData}></HomePage>
}
