import { colorPalette } from "src/styles/colorPalette";
import styled from "styled-components";

export const ListTitle = styled.div`
  font-family: Pretendard600;
  font-size: 16px;
  margin-top: 70px;
  width: 100%;
  height: 32px;
  border-bottom: 1px solid ${colorPalette.mainHeaderLine};
  margin-bottom: 5px;
  color: 364863;
  
  td[id='first'] {
    width: 400px;
  }
  td[id='second'] {
    width: 210px;
  }
  td[id='third'] {
    width: 150px;
  }
`;