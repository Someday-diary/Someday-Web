import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from 'src/components/Main/Header/index.style';

const MainHeader = () => {
  const router = useRouter();

  return (
    <S.Container>
      <S.Layout>
        <S.MainIcon src='image/MainIcon.jpg' onClick={() => {router.push('/');}} />
        <S.HeaderItem onClick={() => {alert('아직 제작 중인 페이지입니다.')}}>
          <Link href='/'>
            <a>질문하기</a>
          </Link>
        </S.HeaderItem>
        <S.HeaderItem>
          <Link href='/recruitment'>
            <a>채용</a>
          </Link>
        </S.HeaderItem>
        <S.HeaderItem onClick={() => {alert('아직 제작 중인 페이지입니다.')}}>
          <Link href='/'>
            <a>팀원소개</a>
          </Link>
        </S.HeaderItem>
        <S.HeaderItem onClick={() => {alert('아직 제작 중인 페이지입니다.')}}>
          <Link href='/'>
            <a>회사소개</a>
          </Link>
        </S.HeaderItem>
      </S.Layout>
    </S.Container>
  );
};

export default MainHeader;