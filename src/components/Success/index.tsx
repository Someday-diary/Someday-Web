import * as S from 'src/components/Success/index.style';

import { useRouter } from 'next/router';

const SuccessForm = () => {
  const router = useRouter();
  
  return (
    <S.SuccessForm>
      <S.Image src='/image/Check.svg' width='80px' height='80px' />
      <S.Title>
        <div>{router.query['name']}님, {router.query['jobGroup']}</div>
        <div>지원이 성공적으로 완료되었습니다.</div>
      </S.Title>
      <S.SubTitle>
        저희 오늘하루 팀과 함께 일하는 그날을 기대하겠습니다 :)
      </S.SubTitle>
      <S.MainButton onClick={() => {router.push('/recruitment')}}>채용 화면으로 돌아가기</S.MainButton>
    </S.SuccessForm>
  );
};

export default SuccessForm;