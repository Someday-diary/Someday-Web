import * as S from "src/components/Apply/InputBox/index.style";

const SchoolNumberInputBox = (props: any) => {
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
          value={props.value.replace(/[^0-9]/, '').replace(/^(\d{4})$/, '$1')}
          placeholder={props.placeholder}
          maxLength={props.maxLength}
        />
      </S.InputBox>
    </>
  );
};

export default SchoolNumberInputBox;
