import Head from "next/head";
import MainHeader from "src/components/Main/Header";
import RecruitmentDetail from "src/components/Main/Recruitment/Detail";

const Detail = () => {
  return (
    <>
      <Head>
        <title>오늘하루 채용</title>
      </Head>
      <MainHeader />
      <RecruitmentDetail />
    </>
  );
};

export default Detail;