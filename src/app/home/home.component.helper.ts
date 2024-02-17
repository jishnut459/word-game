export function generateARandomNumber(value: number): number {
  return +(Math.random() * value).toFixed(0);
}
