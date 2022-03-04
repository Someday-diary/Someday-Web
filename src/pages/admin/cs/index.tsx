import { NextPage } from "next";

import CSinquiry from "src/components/Admin/CSInquiry";
import Header from "src/components/Admin/Header";

const CS: NextPage = () => {
  return (
    <>
      <Header title2={'1'} />
      <CSinquiry />
    </>
  );
};

export default CS;