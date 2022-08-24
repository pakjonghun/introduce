import { media } from "./media";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*,*::after,*::before{
  box-sizing:inherit ;
  margin:0;padding:0;
}

html{
  font-size:62.5% ;
  ${media.lg}{
    font-size:55%;
  }
  ${media.md}{
    font-size:50%;
  }
  ${media.sm}{
    font-size:45%;
  }
  ${media.xs}{
    font-size:43%;
  }

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
    background-image: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.colors.primaryLight},
    ${({ theme }) => theme.colors.primary}
  );

  ${media.xs}{
    width:100%;
    background-image:none ;
    background-color:${({ theme }) => theme.colors.primary} ;
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
