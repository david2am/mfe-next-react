import React from 'react';

import Header from 'shared/Header'
import Footer from 'shared/Footer'

function Home() {
  return (
    <>
      <Header />
      <main style={{backgroundColor: 'red'}}>
        <h1>Home</h1>
        <p>From Mod1</p>
      </main>
      <Footer />
    </>
  );
}

export default Home;