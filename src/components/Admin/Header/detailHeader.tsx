import Link from "next/link";
import * as S from "src/components/Admin/Header/index.style";

const DetailHeader = ({ url }: {url: string}) => {
  return (
    <S.HeaderContainer>
      <S.HeaderBack>
        <Link href={url}>
          뒤로가기
        </Link>
      </S.HeaderBack>
    </S.HeaderContainer>
  );
};

export default DetailHeader;