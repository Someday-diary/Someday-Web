import { NextPage } from "next";
import MainHeader from "src/components/Main/Header";
import RecruitmentContainer from "src/components/Main/Recruitment";

const Recruitment: NextPage = () => {
  return (
    <>
      <MainHeader title2='a' />
      <RecruitmentContainer />
    </>
  );
};

export default Recruitment;