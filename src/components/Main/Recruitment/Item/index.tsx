import * as S from 'src/components/Main/Recruitment/Item/index.style';

import { useRouter } from 'next/router';

const RecruitmentItem = ( props: any ) => {
  const { id, name, deadline } = props.object;
  const router = useRouter();

  return (
    <S.Layout 
      onClick={() => {
        router.push(`/recruitment/${id}`);
      }}
    >
      <table>
        <td id='first'>{name}</td>
        <td id='second'>7기 신입생</td>
        <td id='third'>
          {
            deadline === '0001-01-01T00:00:00Z' && (
              '상시 채용'
            )
          }
        </td>
      </table>
    </S.Layout>
  );
};

export default RecruitmentItem;