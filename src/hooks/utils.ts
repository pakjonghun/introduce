interface EastOutExpoProps {
  t: number;
  b: number;
  c: number;
  d: number;
}

export function easeOutExpo({ t, b, c, d }: EastOutExpoProps) {
  return t === d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
}
