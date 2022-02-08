import Link from 'next/link';
import * as S from 'src/components/Admin/CSInquiry/CSItem/index.style';

const CSItem = ({ num, title }: {num: string, title: string}) => {
  return (
    <Link href={`/admin/cs/${num}`} passHref>
      <S.Container>
        <S.CSNumber>{num}</S.CSNumber>
        <S.CSTitle>{title}</S.CSTitle>
      </S.Container>
    </Link>
  );
};

export default CSItem;