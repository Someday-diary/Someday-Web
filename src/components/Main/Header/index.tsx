/* eslint-disable */
import Image from 'next/image';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';

import * as S from 'src/components/Main/Header/index.style';

const MainHeader = ( props: any ) => {
  const { title1, title2, title3, title4 } = props;

  return (
    <S.Container>
      <S.Layout>
        <Image
          src={'/image/MainIcon.svg'} 
          title='This feature is not yet supported :)' 
          height={'56px'} 
          width={'80px'} 
          placeholder={'blur'} 
          blurDataURL={'/image/MainIcon.svg'}
          onClick={() => {
            toast('This feature is not yet supported :)',
              {
                style: {
                  borderRadius: '8px',
                  maxWidth: '516px',
                  height: '43px',
                  fontSize: '16px',
                  fontFamily: 'Pretendard400',  
                  background: 'rgba(18, 24, 33, 0.8)',
                  color: '#FFFFFF'
                }
              }
            )
          }}
        />
        <S.HeaderItem 
          color={title1} 
        >
          <Link href='https://open.kakao.com/o/szJTIe3d'>
            <a title='This is the link to the Kakao Open Chat Room :)' target='_blank'>Ask</a>
          </Link>
        </S.HeaderItem>
        <S.HeaderItem color={title2}>
          <Link href='/recruitment'>
            <a>Recruit</a>
          </Link>
        </S.HeaderItem>
        <S.HeaderItem 
          color={title3} 
          id='not-use' 
          onClick={() => {
            toast('This feature is not yet supported :)',
              {
                style: {
                  borderRadius: '8px',
                  maxWidth: '516px',
                  height: '43px',
                  fontSize: '16px',
                  fontFamily: 'Pretendard400',  
                  background: 'rgba(18, 24, 33, 0.8)',
                  color: '#FFFFFF'
                }
              }
            )
          }}
        >
          <a title='This feature is not yet supported :)'>
            Member
          </a>
          {/* <Link href='/'>
            <a>팀원소개</a>
          </Link> */}
        </S.HeaderItem>
        <S.HeaderItem 
          color={title4} 
          id='not-use' 
          onClick={() => {
            toast('This feature is not yet supported :)',
              {
                style: {
                  borderRadius: '8px',
                  maxWidth: '516px',
                  height: '43px',
                  fontSize: '16px',
                  fontFamily: 'Pretendard400',  
                  background: 'rgba(18, 24, 33, 0.8)',
                  color: '#FFFFFF'
                }
              }
            )
          }}
        >
          <a title='This feature is not yet supported :)'>
            Team
          </a>
          {/* <Link href='/'>
            <a>회사소개</a>
          </Link> */}
        </S.HeaderItem>
      </S.Layout>
      <Toaster position="bottom-center" toastOptions={{
        style: {
          width: '560px'
        }
      }} />
    </S.Container>
  );
};

export default MainHeader;