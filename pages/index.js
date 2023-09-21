import Head from 'next/head';
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="">
        <h1 className="text-lg">
          hey there! I'm a software developer from Brazil.
        </h1>
        <p>
          besides javascript, I love{" "}
          <a
            href="https://www.goodreads.com/user/show/48945955-larissa-gusm-o"
            target="/"
          >
            books
          </a>{" "}
          and{" "}
          <a href="https://letterboxd.com/nnothumann/" target="/">
            movies
          </a>
          .
        </p>
      </section>
      <section className="">
        <h2 className="">Blog</h2>
        <ul className="">
          {allPostsData.map(({ id, date, title }) => (
            <li className="" key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className="">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
