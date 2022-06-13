/* eslint-disable */
import * as S from 'src/components/Success/index.style';

import { useRouter } from 'next/router';
import Image from 'next/image';

const SuccessForm = () => {
  const router = useRouter();
  
  return (
    <S.SuccessForm>
      <S.CheckImage>
        <Image 
          src={'/image/Check.svg'} 
          width='80px' 
          height='80px' 
          placeholder={'blur'} 
          blurDataURL={'/image/Check.svg'}
        />
      </S.CheckImage>
      <S.Title>
        <div id='first'>{router.query['name']}, {router.query['jobGroup']}</div>
        <div>Your application has been successfully completed.</div>
      </S.Title>
      <S.SubTitle>
        We look forward to working with our team today :)
      </S.SubTitle>
      <S.MainButton onClick={() => {router.push('/recruitment')}}>Back to Recruitment Screen</S.MainButton>
    </S.SuccessForm>
  );
};

export default SuccessForm;