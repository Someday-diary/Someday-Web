import * as S from 'src/components/Main/Recruitment/index.style';

import RecruitmentList from './List';
import RecruitmentTitle from './Title';

const RecruitmentContainer = () => {
  return (
    <S.Layout>
      <RecruitmentTitle />
      <RecruitmentList />
    </S.Layout>
  );
};

export default RecruitmentContainer;