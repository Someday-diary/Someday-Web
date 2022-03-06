import styled from "styled-components";

export const ModalTitle = styled.div`
  font-family: Pretendard700;
  font-size: 24px;
`;

export const ModalText = styled.div`
  margin-top: 12px;
  font-family: Pretendard400;
  font-size: 16px;
  line-height: 20px;
`;

export const Text = styled.div`
  margin-top: 8px;
  margin-bottom: 20px;
  font-family: Pretendard400;
  font-size: 16px;
  line-height: 20px;
  color: #5A78A5;
`;

export const CancelButton = styled.button`
  font-family: pretendard600;
  font-size: 16px;
  margin-top: 15px;
  margin-left: 250px;
  width: 88px;
  height: 51px;
  border-radius: 8px;
  background-color: #9CAEC9;
  color: #F9FAFB;

  :hover {
    background-color: #8599AD;
    color: #D1D7E0;
  }
  
`;

export const SubmitButton = styled.button`
  font-family: pretendard600;
  font-size: 16px;
  margin-top: 15px;
  margin-left: 10px;
  width: 88px;
  height: 51px;
  border-radius: 8px;
  background-color: #33CC99;
  color: #FFFFFF;

  :hover {
    background-color: #1FAD7E;
  }
`;