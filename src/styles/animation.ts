import { keyframes } from "styled-components";

export const leftFadeIn = keyframes`
  0%{
    opacity:0 ;
    transform:translateX(-40rem);
  }

  100%{
    opacity:1 ;
    transform:translateX(0);
  }
`;

export const bottomFadeIn = keyframes`
0%{
    opacity:0 ;
    transform:translateY(10rem);
  }

  100%{
    opacity:1 ;
    transform:translateY(0);
  }
`;

export const fadeInAndRotate = keyframes`
  0%{
    opacity:0 ;
    transform: rotate(1,1,0,0);
  }
  50%,90%{
    opacity:1 ;
  }
  100%{
    transform: rotate3d(1,1,0,180deg);}
  `;

export const fadeIn = keyframes`
  0%{
    opacity:0 ;
  }
  100%{
    opacity:1 ;
  }
  `;
