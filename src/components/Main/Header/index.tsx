import Link from 'next/link';

import * as S from 'src/components/Main/Header/index.style';

const MainHeader = ( props: any ) => {
  const { title1, title2, title3, title4 } = props;

  return (
    <S.Container>
      <S.Layout> 
        <S.MainIcon 
          src='/image/MainIcon.jpg' 
          title='아직 지원하지 않는 기능이에요 :)' 
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
          onClick={() => {alert('아직 지원하지 않는 기능이에요 :)')}}
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
          onClick={() => {alert('아직 지원하지 않는 기능이에요 :)')}}
        >
          <a title='아직 지원하지 않는 기능이에요 :)'>
            팀 소개
          </a>
          {/* <Link href='/'>
            <a>회사소개</a>
          </Link> */}
        </S.HeaderItem>
      </S.Layout>
    </S.Container>
  );
};

export default MainHeader;