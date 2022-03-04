import * as S from "src/components/Apply/index.style";
import InputBox from "./InputBox";

const ApplyForm = () => {
  return (
    <S.ApplyLayout>
      <S.Title>UX/UI Designer 지원서</S.Title>
      <S.Content>
        <InputBox title="학번" />
      </S.Content>
    </S.ApplyLayout>
  );
};

export default ApplyForm;
