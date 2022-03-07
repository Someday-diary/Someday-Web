import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  border: 2px solid #EFF2F6;
`;

export const Layout = styled.div`
  height: 60px;
  width: 1200px;
  margin: auto;

  span[id='not-use'] {
    color: #C4CBD4;
  }
`;

export const HeaderItem = styled.span`
  float: right;
  line-height: 60px;
  margin-left: 50px;
  font-family: ${props => props.color ? 'AppleSDGothicBold' : 'AppleSDGothicMedium'};
  font-size: 15px;

  &:hover {
    font-family: AppleSDGothicBold;
    cursor: pointer;
  }
`;