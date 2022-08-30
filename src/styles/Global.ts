import { createGlobalStyle } from "styled-components";
import { media } from "./media";

export const GlobalStyles = createGlobalStyle`

*,*::after,*::before{
  margin:0;
  padding:0;
  outline: none;
  box-sizing:inherit ;
}

html{
  font-size:62.5% ;
  scroll-behavior: smooth;

  ${media.xl}{
    font-size:56%;
  }

  ${media.lg}{
    font-size:50%;
  }

  ${media.md}{
    font-size:44%;
  }

  ${media.sm}{
    font-size:38%;
  }
  
  ${media.xs}{
    font-size:35% ;
  }
  
}

body{
  box-sizing:border-box ;
  line-height:1.6 ;
  font-size:${({ theme }) => theme.sizes.defaultFont} ;
  font-family:${({ theme }) => theme.fonts.primaryHanFont} ;
  color:${({ theme }) => theme.colors.grayDark2};
  
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  ${media.sm} {
    &::-webkit-scrollbar {
      display: block;
  }

  &::-webkit-scrollbar {
  width: 10px;  /* 세로축 스크롤바 길이 */
  height: 20px;  /* 가로축 스크롤바 길이 */
}
&::-webkit-scrollbar-track {
  background-color: lightblue;
}
&::-webkit-scrollbar-track-piece {
  background-color: gray;
}
&::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background-color: black;
}

  
  -ms-overflow-style: scrollbar;  /* IE and Edge */
  scrollbar-width:10px;  /* Firefox */
  }
}

input{
  font-family:inherit ;
  font-size:1.4rem;
  font-weight:400;
  color:inherit;
  &:focus{
    outline:none;
  }
}

button{
  cursor:pointer;
  border:none;
}

li{
  list-style:none ;
}

a{
  text-decoration:none ;
  color:inherit;
}

::selection{
  background-color:${({ theme }) => theme.colors.primary} ;
  color:#fff;
}
`;
