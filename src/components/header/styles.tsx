import styled from "styled-components";
import { getColor } from "../../styles/util";
import { propsButtomMode } from "./types";

type HeaderConteinerProps = {
  appMode: boolean;
};

export const HeaderConteiner = styled.section<HeaderConteinerProps>`
  height: 250px;
  width: 100%;
  background-color: ${(e) => getColor(e.appMode).HEADER_COLOR};
  padding: 0px 20vw;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 558px) {
    height: 316px;
  }
`;

export const HeaderModeContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const ButtomMode = styled.button`
  ${(e: propsButtomMode) => ``}
  padding: 10px;
  font-size: 15px;
  letter-spacing: 2px;
  margin-bottom: 20px;
  cursor: pointer;
  text-align: center;
  color: #b0b3b4;
  background-color: ${({ buttomMode }) => getColor(buttomMode).BUTTOM};
  max-width: 100px;
  width: 100%;
  margin-right: 15px;
  border: 4px solid transparent;
  * {
    cursor: pointer;
  }
  &:hover {
    border-color: #41d492;
    color: #41d492;
  }
  ${({ active }) =>
    active &&
    `
    border-color:#ffffff7a;
    color: #41d492;
    `}
`;

export const TitleView = styled.div`
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: white;
  font-weight: bold;
  font-family: "arial";
  letter-spacing: 2px;
`;

export const SubInfoView = styled.label`
  color: #dce0e2;
  font-size: 12px;
  letter-spacing: 2px;
`;

type SelectContainerProps = {
  selectContainerMode: boolean;
};

export const SelectContainer = styled.div`
  ${(e: SelectContainerProps) => ``}

  @media (max-width: 557px) {
    position: relative;
  }

  position: absolute;
  padding-top: 20px;
  display: "flex";
  right: 0;
  padding-right: 20vw;

  select > option {
    color: white;
    cursor: pointer;
    background: ${({ selectContainerMode }) =>
      getColor(selectContainerMode).HEADER_COLOR};
  }

  select {
    background: transparent;
    color: white;
    border: 4px solid #ffffff7a;
    background: transparent;
    padding: 10px;
  }
`;
