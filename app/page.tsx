import { Metadata } from "next";
import  HomePage  from "./home-page";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
//import { GetStaticProps } from "next";
export const metadata: Metadata = {
    title: "Home Page 1",
    description: "Page description",
}

export default async function Page(){
    const recentPosts = await getSortedPostsData()
    return <HomePage recentPosts={recentPosts}></HomePage>
}

export  function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <p>[This a test Ryan Article]</p>
        <h2 className={utilStyles.HeadLg}>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.ListItem} key={id}>
              <Link href={`/posts/${id}`}> {title} </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>

        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn"> Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// };
