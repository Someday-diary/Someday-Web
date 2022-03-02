import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 54px;
  line-height: 54px;
  margin-top: 16px;
  font-family: Pretendard400;
  font-size: 14px;

  td[id='first'] {
    width: 400px;
    font-family: Pretendard600;
    font-size: 18px;
    color: #243042;
  }
  td[id='second'] {
    width: 210px;
    color: #5A78A5;
  }
  td[id='third'] {
    width: 150px;
    font-family: Pretendard500;
    font-size: 16px;
    color: #364863;
  }

  &:hover {
    text-decoration: underline;
    text-underline-position: under;

    td[id='first'] {
    width: 400px;
    font-family: Pretendard800;
    font-size: 18px;
    }
  }
`;