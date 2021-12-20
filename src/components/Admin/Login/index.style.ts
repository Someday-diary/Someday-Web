import styled from "styled-components";
import { colorPalette } from "src/styles/colorPalette";

export const LoginBackground = styled.div`
  position: relative;
  top: 190px;
  width: 800px;
  height: 700px;
  margin: auto;
  border-radius: 50px;
  text-align: center;
  box-shadow: 5px 5px 4px 0px ${colorPalette.shadow};
  background-color: ${colorPalette.formBackground};

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
  color: ${colorPalette.black};
`;

export const LoginFormInput = styled.input`
  width: 550px;
  height: 30px;
  border: 0px;
  border-bottom: 2px solid ${colorPalette.inputBorder};
  margin-top: 10px;
  font-size: 16px;
  margin-left: 5px;

  &::placeholder {
    margin-left: 5px;
    font-size: 16px;
    color: ${colorPalette.inputPlaceholder};
  }

  &:focus {
    border-bottom: 2px solid ${colorPalette.green2};
    font-size: 16px;
  }
`;

export const LoginFormButton = styled.button`
  width: 350px;
  height: 80px;
  background-color: ${colorPalette.green2};
  border-radius: 7px;
  color: ${colorPalette.white};
  font-size: 24px;
  margin-top: 80px;
`;