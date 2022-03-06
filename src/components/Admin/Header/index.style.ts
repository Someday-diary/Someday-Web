import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #E7EBF3;
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
  background-color: ${props => props.color ? '#E1F5F1' : '#FFFFFF'};
  color: ${props => props.color ? '#64BDAA' : '#000000'};
`;

export const HeaderBack = styled.div`
  text-align: left;
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
`;