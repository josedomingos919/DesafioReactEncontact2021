import { createGlobalStyle } from "styled-components";
import { globalStyleProps } from "./type";
import { getColor } from "./util";

export default createGlobalStyle<globalStyleProps>`
   *{
       margin: 0;
       padding: 0;
       outline: 0;
       box-sizing: border-box;
       font-family: 'Open Sans', sans-serif; 
   }
   #root{
       margin: 0 auto;
   }
   body {
       background-color: ${(e) => getColor(e.appMode).BODY}
   }
`;
