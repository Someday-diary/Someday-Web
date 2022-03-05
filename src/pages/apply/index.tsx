import React from "react";
import ApplyForm from "src/components/Apply";
import MainHeader from "src/components/Main/Header";

import { useRouter } from "next/router";

const Apply = () => {
  const router = useRouter();

  return (
    <>
      <MainHeader />
      <ApplyForm query={router.query.jobGroup} />
    </>
  );
};

export default Apply;
