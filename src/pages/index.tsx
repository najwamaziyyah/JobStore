import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import Footer from '~/components/Footer';
import HomeHeader from '~/components/Header';
import HomePage from '~/modules/homePage';
import PopularSearch from '~/modules/homePage/popularSearch';
import TrendingJobs from '~/modules/homePage/trending';

const Home: NextPage = () => (
  <>
    <Head>
      <title>JobStore - Home</title>
      <meta content="JobStore" name="description" />
      <meta content="JobStore" name="keywords" />
    </Head>
    <div>
      <HomeHeader />
      <div className="mx-auto max-w-screen-2xl place-items-center gap-20 p-4 lg:py-16 xl:px-10">
        <div className="flex flex-col gap-20">
          <HomePage />
          <TrendingJobs />
          <PopularSearch />
        </div>
      </div>
      <Footer />
    </div>
  </>
);

export default Home;
