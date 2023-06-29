import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <p>[This a test Ryan Article]</p>
        <h2 className={utilStyles.HeadLg}>Blog</h2>
        <ul>

          {allPostsData.map(
            ({ id, date, title }) => (
              <li className={utilStyles.ListItem} key={id}>
              {title}
              <br />
              {id}
              <br/>
              {date}
              </li>
            )
          )}

        </ul>


        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn"> Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}