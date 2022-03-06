import Head from "next/head";
import React from "react";
import ApplyForm from "src/components/Apply";
import MainHeader from "src/components/Main/Header";

const Apply = () => {return (
    <>
      <Head>
        <title>오늘하루 채용 지원</title>
      </Head>
      <MainHeader />
      <ApplyForm />
    </>
  );
};

export default Apply;
