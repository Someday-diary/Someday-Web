import CSDetail from "src/components/Admin/CSInquiry/CSDetail";
import DetailHeader from "src/components/Admin/Header/detailHeader";

const CSInquiry = () => {
  return (
    <>
      <DetailHeader url='/admin/cs' />
      <CSDetail />
    </>
  );
};

export default CSInquiry;