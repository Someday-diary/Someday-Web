import { colorPalette } from "src/styles/colorPalette";
import styled from "styled-components";

export const Container = styled.div`
  width: 1200px;
  height: 800px;
  border-radius: 15px;
  margin: auto;
  margin-top: 60px;
  text-align: center;
  box-shadow: 0px 0px 8px 10px ${colorPalette.shadow};
`;

export const FormContainer = styled.form`
  width: 800px;
  height: 700px;
  margin: auto;
  padding-top: 50px;
`;

export const Title = styled.div`
  font-size: 24px;
  text-align: start;
  margin-bottom: 2px;
`;

export const TItleInput = styled.input`
  width: 100%;
  height: 60px;
  margin-bottom: 30px;
  border-radius: 7px;
  border: none;
  font-size: 20px;
  padding-left: 15px;
  background-color: ${colorPalette.gray};
`;

export const Notice = styled.textarea`
  width: 100%;
  height: 440px;
  border: none;
  border-radius: 7px;
  resize: none;
  background-color: ${colorPalette.gray};
  padding: 0px;
  padding-top: 5px;
  padding-left: 15px;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  width: 200px;
  height: 60px;
  background-color: ${colorPalette.green2};
  margin: auto;
  margin-top: 40px;
  border-radius: 5px;
  font-size: 20px;
  color: ${colorPalette.white};
`;