import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const RemoteLoginPage = dynamic(
  () => import('mod/Login'),
  { ssr: false }
);

const Home = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <RemoteLoginPage />
    </>
  );
};

export default Home;