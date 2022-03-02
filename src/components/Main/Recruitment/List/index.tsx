import * as S from 'src/components/Main/Recruitment/List/index.style';
import RecruitmentItem from '../Item';

const RecruitmentList = () => {
  return (
    <>
      <S.ListTitle>
        <table>
          <td id='first'>직군</td>
          <td id='second'>기수</td>
          <td id='third'>마감일자</td>
        </table>
      </S.ListTitle>
      <RecruitmentItem jobGroup='Android Developer' deadline='상시채용'  />
      <RecruitmentItem jobGroup='iOS Developer' deadline='지원불가' />
      <RecruitmentItem jobGroup='Front-End Developer' deadline='상시채용' />
      <RecruitmentItem jobGroup='Back-End Developer' deadline='상시채용' />
      <RecruitmentItem jobGroup='UX/UI Designer' deadline='상시채용' />
      <RecruitmentItem jobGroup='PM' deadline='상시채용' />
      <RecruitmentItem jobGroup='QA/CS' deadline='상시채용' />
      <RecruitmentItem jobGroup='PM' deadline='상시채용' />
    </>
  );
};

export default RecruitmentList;