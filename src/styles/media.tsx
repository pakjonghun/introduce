const getMediaQuery = (breakPoint: number) =>
  `@media screen and (max-width:${breakPoint / 16}em)`;

export const media = {
  lg: getMediaQuery(730),
  md: getMediaQuery(600),
  sm: getMediaQuery(500),
  xs: getMediaQuery(320),
};
