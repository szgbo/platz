// a sample post page for content

// import Head from "next/head";
const Head = require('next/head');

export const title = "CMDK lets you index your pages";

export default function post2() {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
    </>
  );
}