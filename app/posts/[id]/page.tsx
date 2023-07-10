import Layout from "../../../components/layout";
import { getAllPostIds, getPostData } from "../../../lib/posts";
import Head from "next/head";
import Date from "../../../components/date";
import utilStyles from "../../../styles/utils.module.css";

import {  GetStaticPaths } from "next";

export default async function Page({ params }) {
  const postData = await getPostData(params.id as string);
  return <Post postData={postData}></Post>;
}

export function Post({
  postData,
}: {
  postData: {
    id: string;
    date: string;
    contentHtml: string;
  };
}) {
  //  const postData = await getPostData(params.id as string);
  return (
    <Layout>
      <Head>
        <title>{postData.id}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{postData.id}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};
