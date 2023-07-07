import { Metadata } from "next";
import  HomePage  from "./home-page";

export const metadata: Metadata = {
    title: "Page title",
    description: "Page description",
}


async function getPosts() {
    
    return '';
}

export default async function Page(){

    const recentPosts = await getPosts()
    return <HomePage recentPosts={recentPosts}></HomePage>
}