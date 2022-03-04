import Link from 'next/link';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { ICSDetail } from 'src/types/CS';
import { postDetailState } from 'src/store/post';

import * as S from 'src/components/Admin/CSInquiry/CSItem/index.style';

const CSItem = ({ id, title, text }: ICSDetail) => {
  const postDetail = useSetRecoilState(postDetailState);

  const data: ICSDetail = {
    id: id,
    title: title,
    text: text
  }

  return (
    <Link href={`/admin/cs/${id}`} passHref>
      <S.Container onClick={() => postDetail(data)}>
        <S.CSNumber>{id}</S.CSNumber>
        <S.CSTitle>{title}</S.CSTitle>
      </S.Container>
    </Link>
  );
};

export default CSItem;