import { NextPage } from "next";

import Header from "src/components/Admin/Header";
import NoticeForm from "src/components/Admin/Notice";

const Notice: NextPage = () => {
  return (
    <>
      <Header title1={'a'} />
      <NoticeForm />
    </>
  );
};

export default Notice;