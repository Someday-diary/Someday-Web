import * as S from 'src/components/Admin/Login/index.style';

const LoginComponents = () => {
  return (
    <S.LoginBackground>
      <S.LoginForm>
        <S.LoginContainer>
          <S.LoginFormTitle>아이디</S.LoginFormTitle>
          <S.LoginFormInput 
            placeholder='아이디를 입력해주세요.' 
            type='text' 
          />
        </S.LoginContainer>
        <S.LoginContainer>
          <S.LoginFormTitle>비밀번호</S.LoginFormTitle>
          <S.LoginFormInput 
            placeholder='비밀번호를 입력해주세요.' 
            type='password' 
          />
        </S.LoginContainer>
        <S.LoginFormButton type='submit'>로그인</S.LoginFormButton>
      </S.LoginForm> 
    </S.LoginBackground>
  );
};

export default LoginComponents;