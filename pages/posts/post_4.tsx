// a sample post page for content

// import Head from "next/head";
const Head = require('next/head');

export const title = "It's pretty cool!";

export default function post1() {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
    </>
  );
}