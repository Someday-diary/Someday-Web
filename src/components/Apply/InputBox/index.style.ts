import { colorPalette } from "src/styles/colorPalette";
import styled from "styled-components";

export const InputBox = styled.div`
  > div {
    display: flex;
    color: #454b54;
    margin: 8px 0;
    text-align: left;
    justify-content: left;
    align-items: center;
  }

  > input {
    width: 100%;
    font-size: 16px;
    padding: 16px;
    border: 2px solid ${colorPalette.mainHeaderLine};
    border-radius: 8px;
    background-color: #f9fafb;
  }
`;

export const Dot = styled.div`
  display: inline-flex;
  margin: 0 4px;
  width: 6px;
  height: 6px;
  border-radius: 10px;
  background-color: #f25a5a;
`;

export const A = styled.a`
  color: coral;
`;
