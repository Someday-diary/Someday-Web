import * as S from "src/components/Apply/InputBox/index.style";

const InputBox = (props: any) => {
  return (
    <>
      <S.InputBox>
        <div>
          {props.title}
          <S.Dot></S.Dot>
        </div>
        <input 
          type={props.type} 
          onClick={() => {
            if (!sessionStorage.getItem(props.title)) {
              sessionStorage.setItem(props.title, '1');
            } else {
              const num = Number(sessionStorage.getItem(props.title)) + 1;
              sessionStorage.setItem(props.title, String(num));
            }
            props.onClick();
            props.setter(props.title);
          }} 
          onChange={props.onChange} 
          value={props.value}
          placeholder={props.placeholder}
        />
      </S.InputBox>
    </>
  );
};

export default InputBox;
