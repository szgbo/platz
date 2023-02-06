// a sample post page for content

import Head from "next/head";

export const title = "How to make a vue app";

export default function post1() {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
    </>
  );
}