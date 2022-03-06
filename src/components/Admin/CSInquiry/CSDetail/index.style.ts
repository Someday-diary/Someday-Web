import styled from "styled-components";

export const Layout = styled.div`
  width: 70vw;
  min-width: 1400px;
  margin: auto;
`;

export const Container = styled.div`
  width: 1200px;
  margin: auto;
  margin-top: 60px;
`;

export const Title = styled.div`
  margin-left: 20px;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const TitleBox = styled.textarea`
  width: 1200px;
  height: 70px;
  margin-bottom: 35px;
  font-size: 18px;
  font-family: 'Noto Sans';
  resize: none;
  border: none;
  border-radius: 7px;
  box-shadow: 0px 0px 8px 4px rgba(151, 186, 255, 0.25);
  line-height: 65px;
  padding-left: 25px;

  :focus {
    outline: none;
  }
`;

export const TextBox = styled.textarea`
  width: 1200px;
  height: 500px;
  font-size: 18px;
  resize: none;
  border: none;
  border-radius: 7px;
  box-shadow: 0px 0px 8px 4px rgba(151, 186, 255, 0.25);
  padding-top: 25px;
  padding-left: 25px;

  :focus {
    outline: none;
  }
`;