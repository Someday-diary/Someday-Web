import { NextComponentType } from "next";

import * as S from 'src/components/Admin/Notice/index.style';

const NoticeForm: NextComponentType = () => {
  return (
    <S.Container>
      <S.FormContainer>
        <S.Title>제목</S.Title>
        <S.TItleInput></S.TItleInput>
        <S.Title>내용</S.Title>
        <S.Notice />
        <S.SubmitButton>완료</S.SubmitButton>
      </S.FormContainer>
    </S.Container>
  );
};

export default NoticeForm