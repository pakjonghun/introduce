import { DefaultTheme, keyframes } from "styled-components";

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

export const rightFadeIn = keyframes`
  0%{
    opacity:0 ;
    transform:translateX(40rem) ;
  }

  100%{
    opacity:1 ;
    transform:translate(-50%, -50%);
  }
`;

export const fadeInAndRotateByAngle = (angle: string) => keyframes`
  0%{
    opacity:0 ;
    transform:scale(0) rotate(0) ;
  }

  100%{
    opacity:1 ;
    transform:scale(1) rotate(${angle});
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
    transform: rotate3d(1,1,0,0);
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

export const temptation = keyframes`
0%{
  transform:translateY(0)
}
20%{
  transform:translateY(0)
}
40%{
  transform:translateY(-2rem);
}
50%{
  transform:translateY(0);
}
60%{
  transform:translateY(-1rem)
}
80%{
  transform:translateY(0)
}
100%{
  transform:translateY(0)
}
`;

export const blinking = (theme: DefaultTheme, isDarkMode: boolean) => {
  return keyframes`
  0%{
   background-color :${
     isDarkMode ? theme.colors.grayLight1 : theme.colors.grayDark3
   } ;
 } 
 50%{
  background-color :transparent ;
 }
 
 100%{
  background-color :transparent ;
 }
`;
};

export const scaleUp = (isAniStart: boolean) => {
  if (!isAniStart) return "none";
  else {
    return keyframes`

    0%{
      transform:scale(0);
    }
    
    100%{
      transform:scale(1);
    }
    `;
  }
};
