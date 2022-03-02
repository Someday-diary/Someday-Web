import type { NextPage } from 'next';
import MainForm from 'src/components/Main';

import MainHeader from 'src/components/Main/Header';

const Home: NextPage = () => {
  return (
    <>
      <MainHeader />
      <MainForm />
    </>
  )
}

export default Home
