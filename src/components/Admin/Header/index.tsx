import Link from 'next/link';

import * as S from 'src/components/Admin/Header/index.style';

const Header = ({...props}) => {
  const { title1, title2, title3 } = props

  return (
    <S.HeaderContainer>
      <S.HeaderItem style={title1}>
        <Link href='/admin/notice'>공지사항</Link>
      </S.HeaderItem>
      <S.HeaderItem style={title2}>
        <Link href='/admin/notice'>CS문의</Link>
      </S.HeaderItem>
      <S.HeaderItem style={title3}>
        <Link href='/admin/notice'>서버로그</Link>
      </S.HeaderItem>
    </S.HeaderContainer>
  );
};

export default Header;