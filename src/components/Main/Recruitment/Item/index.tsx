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
        <td id='first' lang={props.width}>
          <div>{name}</div>
        </td>
        <td id='second'>7th freshman</td>
        <td id='third'>
          {
            deadline === '0001-01-01T00:00:00Z' && (
              'always'
            )
          }
        </td>
      </table>
    </S.Layout>
  );
};

export default RecruitmentItem;