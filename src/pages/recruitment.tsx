import { NextPage } from "next";
import MainHeader from "src/components/Main/Header";
import RecruitmentContainer from "src/components/Main/Recruitment";

const Recruitment: NextPage = () => {
  return (
    <>
      <MainHeader />
      <RecruitmentContainer />
    </>
  );
};

export default Recruitment;