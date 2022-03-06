import { NextPage } from "next";

import Head from "next/head";
import MainHeader from "src/components/Main/Header";
import RecruitmentContainer from "src/components/Main/Recruitment";

const Recruitment: NextPage = () => {
  return (
    <>
      <Head>
        <title>오늘하루 채용</title>
      </Head>
      <MainHeader title2='a' />
      <RecruitmentContainer />
    </>
  );
};

export default Recruitment;