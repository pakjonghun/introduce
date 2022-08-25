import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*,*::after,*::before{
  margin:0;
  padding:0;
  outline: none;
  box-sizing:inherit ;
}

html{
  font-size:62.5% ;
}

body{
  display:flex;
  align-items:center ;
  justify-content:center ;
  min-height:100vh;
  box-sizing:border-box ;
  line-height:1.6 ;
  font-size:${({ theme }) => theme.sizes.defaultFont} ;
  font-family:${({ theme }) => theme.fonts.primaryEnFont} ;
  color:${({ theme }) => theme.colors.grayDark1};
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
