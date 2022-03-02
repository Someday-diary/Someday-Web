import * as S from 'src/components/Main/Recruitment/Item/index.style';

const RecruitmentItem = ({ jobGroup, deadline }: { jobGroup: string, deadline: string }) => {
  return (
    <S.Layout>
      <table>
        <td id='first'>{jobGroup}</td>
        <td id='second'>7기 신입생</td>
        <td id='third'>{deadline}</td>
      </table>
    </S.Layout>
  );
};

export default RecruitmentItem;