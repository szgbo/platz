// a sample page for self introduction

// import Head from 'next/head';

const Head = require('next/head');

export const title = 'About me';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
    </>
  );
};