import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import MainForm from 'src/components/Main';

import MainHeader from 'src/components/Main/Header';

const Home: NextPage = () => {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/recruitment');
  }, []);
  
  return (
    <>
      <MainHeader />
      <MainForm />
    </>
  )
}

export default Home
