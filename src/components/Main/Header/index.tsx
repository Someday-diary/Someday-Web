import Link from 'next/link';
import * as S from 'src/components/Main/Header/index.style';

const MainHeader = () => {
  return (
    <S.Container>
      <S.Layout> 
        <S.MainIcon src='image/MainIcon.jpg' title='아직 지원하지 않는 기능이에요 :)' />
        <S.HeaderItem onClick={() => {alert('아직 지원하지 않는 기능이에요 :)')}}>
          <Link href='/'>
            <a>질문하기</a>
          </Link>
        </S.HeaderItem>
        <S.HeaderItem>
          <Link href='/recruitment'>
            <a>채용</a>
          </Link>
        </S.HeaderItem>
        <S.HeaderItem onClick={() => {alert('아직 지원하지 않는 기능이에요 :)')}}>
          <a title='아직 지원하지 않는 기능이에요 :)'>
            팀원소개
          </a>
          {/* <Link href='/'>
            <a>팀원소개</a>
          </Link> */}
        </S.HeaderItem>
        <S.HeaderItem onClick={() => {alert('아직 지원하지 않는 기능이에요 :)')}}>
          <a title='아직 지원하지 않는 기능이에요 :)'>
            회사소개
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