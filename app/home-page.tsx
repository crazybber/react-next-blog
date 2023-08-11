import Head from "next/head";
import Layout, { siteTitle } from "@components/layout";
import utilStyles from "@styles/utils.module.css";
import Link from "next/link";
import Date from "@components/date";
import CTAButton from '@components/ctabutton';

export default function Home({
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
        <p>[This a Default App Home Page]</p>
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
          (This is a website - you’ll be building a site like this on{"-"}
          <a href="https://nextjs.org/learn"> Next.js tutorial</a>.)
        </p>
      </section>

      <section>
      <div className="py-20">
        <h1 className="text-center">
          <CTAButton/>
        </h1>
      </div>
      </section>
    </Layout>
  );
}