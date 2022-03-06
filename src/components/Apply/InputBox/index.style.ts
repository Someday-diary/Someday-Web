import styled from "styled-components";

export const InputBox = styled.div`
  margin: auto;
  margin-top: 30px;

  > div {
    width: 70%;
    margin: auto;
    display: flex;
    color: #454b54;
    text-align: left;
    justify-content: left;
    align-items: center;
    font-family: pretendard600;
  }

  > input {
    width: 70%;
    font-size: 16px;
    margin-top: 8px;
    padding: 16px;
    border: 2px solid #EFF2F6;
    border-radius: 8px;
    background-color: #f9fafb;

    :hover {
      border: 2px solid #85E0C2;
    }

    :focus {
      border: 2px solid #33CC99;
    }
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
