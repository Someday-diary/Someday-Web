import CSTitle from 'src/components/Admin/CSInquiry/CSTitle/index';
import CSList from 'src/components/Admin/CSInquiry/CSList/index';

import * as S from 'src/components/Admin/CSInquiry/index.style';

const CSinquiry = () => {
  return (
    <S.Container>
      <CSTitle />
      <CSList />
    </S.Container>
  );
};

export default CSinquiry;