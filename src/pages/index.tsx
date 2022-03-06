/* eslint-disable */
import type { NextPage } from 'next';

import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Head from 'next/head';
import MainForm from 'src/components/Main';
import MainHeader from 'src/components/Main/Header';

const Home: NextPage = () => {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/recruitment');
  }, []);
  
  return (
    <>
      <Head>
        <title>오늘하루</title>
      </Head>
      <MainHeader />
      <MainForm />
    </>
  )
}

export default Home
