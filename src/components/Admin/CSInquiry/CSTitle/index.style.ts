import { colorPalette } from "src/styles/colorPalette";

import styled from "styled-components";

export const Title = styled.div`
  margin: auto;
  width: 1200px;
  height: 40px;
  background-color: ${colorPalette.csTitle};
  border-radius: 5px;
`;

export const CSNumber = styled.div`
  width: 110px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  color: ${colorPalette.white};
  text-align: center;
  float: left;
`;

export const CSTitle = styled.div`
  width: 110px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  color: ${colorPalette.white};
  text-align: left;
  float: left;
`;