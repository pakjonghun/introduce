import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    sizes: {
      defaultFont: string;
    };
    fonts: {
      primaryHanFont: string;
      primaryEnFont: string;
    };
    shadows: {
      light: string;
      medium: string;
      hard: string;
    };
    colors: {
      primary: string;
      primaryLight: string;
      grayLight1: string;
      grayLight2: string;
      grayLight3: string;
      grayLight4: string;
      grayDark1: string;
      grayDark2: string;
      grayDark3: string;
    };
  }
}
