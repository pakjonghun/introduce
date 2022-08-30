const getMediaQuery = (breakPoint: number) =>
  `@media screen and (max-width:${breakPoint / 16}em)`;

export const media = {
  xl: getMediaQuery(1300),
  lg: getMediaQuery(1100),
  md: getMediaQuery(900),
  sm: getMediaQuery(750),
  xs: getMediaQuery(670),
};
