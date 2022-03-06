import Head from "next/head";
import MainHeader from "src/components/Main/Header";
import SuccessForm from "src/components/Success";

const Success = () => {
  return (
    <>
      <Head>
        <title>오늘하루 지원 완료</title>
      </Head>
      <MainHeader />
      <SuccessForm />
    </>
  );
};

export default Success;