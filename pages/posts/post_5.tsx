// a sample post page for content

// import Head from "next/head";
const Head = require('next/head');

export const title = "Duh, how to make a next app";

export default function post1() {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
    </>
  );
}