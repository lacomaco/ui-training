/*
 * t = 0 -> a
 * t = 1  -> b
 */
export function interpolation(a: number, b: number, t: number): number {
  return a * (1 - t) + b * t;
}
