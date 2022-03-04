import { colorPalette } from "src/styles/colorPalette";
import styled from "styled-components";

export const Layout = styled.div`
  width: 1360px;
  height: 193.8vh;
  margin: auto;
  text-align: center;
`;

export const MainImage = styled.img`
  position: relative;
  top: 50px;
  left: 220px;
`;

export const ScrollImage = styled.img`
  position: relative;
  top: 180px;
  left: -24px;
`;

export const MainTitle = styled.div`
  position: relative;
  top: 380px;
  width: 1360px;
  height: 236px;
  background-color: ${colorPalette.mainTitleBackground};
  border-radius: 20px;
`;

export const TitleText = styled.div`
  font-size: 32px;
  font-family: AppleSDGothicBold;
  padding-top: 80px;
`;