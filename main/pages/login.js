import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const RemoteLogin = dynamic(
  () => import('mod/Login'),
  { ssr: false }
);

const Home = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <RemoteLogin />
    </>
  );
};

export default Home;