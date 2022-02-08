import { colorPalette } from "src/styles/colorPalette";

import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid ${colorPalette.lineColor};
  text-align: center;
  line-height: 60px;
`;

export const HeaderItem = styled.div`
  width: 100px;
  height: 40px;
  line-height: 40px;
  display: inline-block;
  border-radius: 8px;
  margin-left: 45px;
  background-color: ${props => props.color ? colorPalette.green1 : colorPalette.white};
  color: ${props => props.color ? colorPalette.green3 : colorPalette.black};
`;

export const HeaderBack = styled.div`
  text-align: left;
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
`;