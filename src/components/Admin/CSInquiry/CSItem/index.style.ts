import styled from "styled-components";

export const Container = styled.div`
  width: 1200px;
  height: 80px;
  border: 1px solid #89D9C8;
  border-style: none none solid none;
  margin: auto;

  &:hover {
    background-color: #89D9C8;
  }
`;

export const CSNumber = styled.div`
  width: 110px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  font-size: 24px;
  float: left;
`;

export const CSTitle = styled.div`
  width: 1090px;
  height: 80px;
  line-height: 80px;
  text-align: left;
  font-size: 20px;
  float: left;
`;