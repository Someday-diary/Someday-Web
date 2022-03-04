import Link from "next/link";

import * as S from 'src/components/Admin/Header/index.style';

const Header = ({...props}) => {
  const { title1, title2, title3 } = props

  return (
    <S.HeaderContainer>
      <S.HeaderItem color={title1} >
        <Link href='/admin/notice' passHref={true}>
          <a>공지사항</a>
        </Link>
      </S.HeaderItem>
      <S.HeaderItem color={title2}>
        <Link href='/admin/cs'>
          <a>CS문의</a>
        </Link>
      </S.HeaderItem>
      <S.HeaderItem color={title3}>
        <Link href='/admin/serverLog'>
          <a>서버로그</a>
        </Link>
      </S.HeaderItem>
    </S.HeaderContainer>
  );
};

export default Header;