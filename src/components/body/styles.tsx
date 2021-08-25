import styled from "styled-components";
import {
  ButtonOptiosListProps,
  ListItemTextType,
  ListItensIconRightType,
} from "./types";

export type HeaderConteinerProps = {
  mode: boolean;
};

export const BodyContainer = styled.section`
  width: 400px;
  display: flex;
  justify-content: center;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TextInputContainer = styled.div`
  border: 4px solid #b0b3b4;
  border-radius: 5px;
  padding: 10px;
  max-width: 450px;
  width: 100%;
  background: #4d616a;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -29px;
`;

export const BtnShow = styled.div`
  cursor: pointer;
  width: 50px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 4px solid #b0b3b4;
  :active img {
    opacity: 0.5;
  }
`;

export const SubContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex: 1;
`;

type TextInputTodoType = {
  ref: React.MutableRefObject<any>;
};
export const TextInputTodo = styled.input<TextInputTodoType>`
  width: 100%;
  height: 100%;
  font-size: 14px;
  letter-spacing: 2px;
  padding: 5px;
  background: transparent;
  border: none;
  color: #ffffff9e;
  padding-left: 20px;
  ::placeholder {
    color: #ffffff9e;
  }
`;

export const ImgDownIcon = styled.img`
  width: 27px;
  margin-right: 8px;
`;

export const ListItemContainer = styled.section`
  max-width: 450px;
  width: 100%;
  margin-top: 20px;
`;

export const ListItens = styled.div`
  position: relative;
  justify-content: end;
  cursor: pointer;
  list-style: none;
  width: 100%;
  background: red;
  border-radius: 5px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  box-shadow: 0px 0px 54px 45px rgba(0, 0, 0, 0.04);
  * {
    cursor: pointer;
  }

  &:hover {
    button {
      visibility: visible;
    }
  }
`;

export const ListItemText = styled.label<ListItemTextType>`
  color: #343746;
  flex: 1;
  font-weight: bold;
  padding-left: 10px;
  letter-spacing: 2px;

  ${({ isDone }) =>
    isDone &&
    `
      text-decoration: line-through; 
  `}
`;

export const ListItensIconRight = styled.label<ListItensIconRightType>`
  cursor: pointer;
  width: 20px;
  height: 20px;
  border: 3px solid #2598f3;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 10px;
  margin: 5px;
  position: relative;

  ${({ isDone }) =>
    isDone &&
    `
      text-decoration: line-through;
      ::after {
        position: absolute;
        content: " ";
        width: 50%;
        height: 50%;
        background: #2598f3;
      }
  `}
`;

export const InfoItemLeft = styled.div`
  font-size: 20px;
  letter-spacing: 2px;
  color: rgba(0, 0, 0, 0.3);
  font-weight: bold;
`;

export const Listfooter = styled.footer`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

export const ButtonOptiosList = styled.button<ButtonOptiosListProps>`
  padding: 10px;
  margin-bottom: 10px;
  font-weight: bold;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100px;
  cursor: pointer;
  border: none;
  background: #4d616a;
  ${({ active }) =>
    active &&
    `
     background: #41d492;
  `}
  color: white;
  letter-spacing: 2px;
  transition: 0.4s;
  ${({ completed }) =>
    completed &&
    ` 
     padding: 15px; 
     margin-top: 25px;
     margin-bottom: 50px;
     bottom: 0; 
     background: #d64444c2;
    
      :hover {
          transform: scale(1.2);
      }

      :active {
          transform: scale(.8);
      }

  `}
`;

export const InputEdit = styled.input`
  transition: 0.4s;
  color: #343746;
  font-weight: bold;
  z-index: 5;
  margin-left: -24px;
  transform: scale(1.3);
  border: 1px solid red;
  width: 100%;
  -webkit-letter-spacing: 2px;
  -moz-letter-spacing: 2px;
  -ms-letter-spacing: 2px;
  letter-spacing: 2px;
  border: none;
  border: 1px solid #a6002b;
  padding: 6px;
`;

export const ButtomDeleteItem = styled.button`
  color: white;
  visibility: hidden;
  background: #d64444c2;
  right: 0;
  border-radius: 100%;
  margin-right: -10px;
  width: 30px;
  border: none;
  outline: none;
  height: 30px;
  position: absolute;
  font-weight: bold;
  right: 4;
`;
