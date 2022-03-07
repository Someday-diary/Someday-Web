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
          title='아직 지원하지 않는 기능이에요 :)' 
          height={'56px'} 
          width={'80px'} 
          onClick={() => {
            toast('아직 지원하지 않는 기능이에요 :)',
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
            <a title='오픈 채팅방 링크입니다 :)' target='_blank'>질문하기</a>
          </Link>
        </S.HeaderItem>
        <S.HeaderItem color={title2}>
          <Link href='/recruitment'>
            <a>채용</a>
          </Link>
        </S.HeaderItem>
        <S.HeaderItem 
          color={title3} 
          id='not-use' 
          onClick={() => {
            toast('아직 지원하지 않는 기능이에요 :)',
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
          <a title='아직 지원하지 않는 기능이에요 :)'>
            팀원소개
          </a>
          {/* <Link href='/'>
            <a>팀원소개</a>
          </Link> */}
        </S.HeaderItem>
        <S.HeaderItem 
          color={title4} 
          id='not-use' 
          onClick={() => {
            toast('아직 지원하지 않는 기능이에요 :)',
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
          <a title='아직 지원하지 않는 기능이에요 :)'>
            팀 소개
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