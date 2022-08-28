export const getSvgPath = (iconName: string) => {
  return `${process.env.PUBLIC_URL}/svg/${iconName}.svg`;
};

export function easeOutQuad(t: number, b = 10, c = 20, d = 1000) {
  return -c * (t /= d) * (t - 2) + b;
}
