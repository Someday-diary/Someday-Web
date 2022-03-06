import * as S from "src/components/Apply/InputBox/index.style";

const InputBox = (props: any) => {
  return (
    <>
      <S.InputBox>
        <div>
          {props.text}
          <S.Dot></S.Dot>
        </div>
        <input 
          type={props.type} 
          onClick={() => {
            if (!sessionStorage.getItem(props.text)) {
              sessionStorage.setItem(props.text, '1');
            } else {
              const num = Number(sessionStorage.getItem(props.text)) + 1;
              sessionStorage.setItem(props.text, String(num));
            }
            props.onClick();
            props.setter(props.text);
          }} 
          onChange={props.onChange} 
          value={props.value}
          maxLength={props.maxLength}
          pattern={props.pattern}
        />
      </S.InputBox>
    </>
  );
};

export default InputBox;
