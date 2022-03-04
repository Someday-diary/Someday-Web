import * as S from 'src/components/Main/Recruitment/Item/index.style';

import { useRouter } from 'next/router';
import { jobDescriptionState } from 'src/store/job';
import { useSetRecoilState } from 'recoil';

const RecruitmentItem = ( props: any ) => {
  const { id, jobGroup, deadline } = props;
  const router = useRouter();
  const recruitmentId = useSetRecoilState(jobDescriptionState);

  return (
    <S.Layout 
      onClick={() => {
        router.push(`/recruitment/${id}`);
        recruitmentId(id);
      }}
    >
      <table>
        <td id='first'>{jobGroup}</td>
        <td id='second'>7기 신입생</td>
        <td id='third'>{deadline}</td>
      </table>
    </S.Layout>
  );
};

export default RecruitmentItem;