import { useRecoilValue } from 'recoil';
import { postDetailState } from 'src/store/post';
import * as S from 'src/components/Admin/CSInquiry/CSDetail/index.style';

const CSDetail = () => {
  const postData: any = useRecoilValue(postDetailState);

  return (
    <S.Layout>
      <S.Container>
        <S.Title>제목</S.Title>
        <S.TitleBox readOnly value={postData['title']} />
        <S.Title>내용</S.Title>
        <S.TextBox readOnly value={postData['text']} />
      </S.Container>
    </S.Layout>
  );
};

export default CSDetail;