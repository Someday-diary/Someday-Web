import * as S from "src/components/Apply/InputBox/index.style";

const InputBox = (props: { title: string }) => {
  return (
    <>
      <S.InputBox>
        <div>
          {props.title}
          <S.Dot></S.Dot>
        </div>
        <input type="text" />
      </S.InputBox>
    </>
  );
};

export default InputBox;
