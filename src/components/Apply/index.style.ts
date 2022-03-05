import styled, { css } from "styled-components";
import { Layout } from "../Main/index.style";

export const ApplyLayout = styled(Layout)`
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Title = styled.div`
  margin: 3rem;
  font-size: 1.5rem;
  font-family: Pretendard700;
`;

export const Content = styled.form`
  padding: 0 20rem;
`;

export const Message = styled.div`
  width: 70%;
  margin: auto; 
  color: #5A78A5;
  font-family: Pretendard600;
  font-size: 12px;
  text-align: left;
  margin-top: 8px;
  line-height: 16px;
`;

export const SubmitButton = styled.button`
  margin-top: 50px;
  width: 250px;
  height: 50px;
  font-family: Pretendard600;
  font-size: 16px;
  border-radius: 8px;

  ${props => props.disabled ? css`
    disabled;
    background-color: #D6F5EB;
    color: #FFFFFF;
  ` : css`
    background-color: #33CC99;
    color: #FFFFFF;
  `}
`;
