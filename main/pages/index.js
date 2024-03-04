import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const RemoteHomePage = dynamic(
  () => import('remote/Home'),
  { ssr: false }
);

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <RemoteHomePage />
    </>
  );
};

export default Home;