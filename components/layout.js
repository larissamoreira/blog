import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const name = "Larissa Gusmão";
export const siteTitle = "Larissa G.";

export default function Layout({ children, home }) {
  return (
    <div className="container mx-auto mt-10 px-40 grid place-items-center">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="My personal website" />
        {/* <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* <header className="flex flex-col justify-center items-center pb-6">
         {home ? (
          <>
            <Image
              priority
              src={"/images/profile.jpeg"}
              className="rounded-full"
              height={144}
              width={144}
              alt=""
            />
            <h1 className="text-lg">{name}</h1>
          </>
        ) : (
          <>
            <Link
              href={"/"}
              className="flex flex-col justify-center items-center gap-1"
            >
              <Image
                priority
                src={"/images/profile.jpeg"}
                className="rounded-full"
                height={108}
                width={108}
                alt=""
              />
              <h2 className="text-lg">{name}</h2>
            </Link>
          </>
        )} 
      </header> */}
      <main>{children}</main>
      {/* {!home && (
        <footer className="mt-3">
          <Link href={"/"}>Back to home</Link>
        </footer>
      )} */}
    </div>
  );
}
