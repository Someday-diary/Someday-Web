import * as S from "src/components/Apply/ErrorMessage/index.style";

const ErrorMessage = ({ text }: {text: string}) => {
  return (
    <S.ErrorMessage>
      {text}
    </S.ErrorMessage>
  );
};

export default ErrorMessage;