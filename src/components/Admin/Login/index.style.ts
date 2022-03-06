import styled from "styled-components";

export const LoginBackground = styled.div`
  position: relative;
  top: 190px;
  width: 800px;
  height: 700px;
  margin: auto;
  border-radius: 50px;
  text-align: center;
  box-shadow: 0px 0px 8px 10px rgba(178, 193, 207, 0.25);
  background-color: #FFFFFF;

  @media only screen and (max-height: 1000px) {
    top: 120px;
  }
`;

export const LoginForm = styled.form`
  position: relative;
  width: 550px;
  top: 170px;
  margin: auto;
`;

export const LoginContainer = styled.div`
  margin-bottom: 70px;
  text-align: left;
`;

export const LoginFormTitle = styled.div`
  font-size: 18px;
  color: #000000;
`;

export const LoginFormInput = styled.input`
  width: 550px;
  height: 30px;
  border: 0px;
  border-bottom: 2px solid #DEE2E6;
  margin-top: 10px;
  font-size: 16px;
  margin-left: 5px;

  &::placeholder {
    margin-left: 5px;
    font-size: 16px;
    color: #B3C1CF;
  }

  &:focus {
    border-bottom: 2px solid #89D9C8;
    font-size: 16px;
  }
`;

export const LoginFormButton = styled.button`
  width: 350px;
  height: 80px;
  background-color: #89D9C8;
  border-radius: 7px;
  color: #FFFFFF;
  font-size: 24px;
  margin-top: 80px;
`;