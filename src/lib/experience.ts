// Started working professionally in May 2022.
export const CAREER_START = new Date(2022, 4, 1);

const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

/** Full years elapsed since CAREER_START. */
export function yearsOfExperience(now = new Date()): number {
  const months =
    (now.getFullYear() - CAREER_START.getFullYear()) * 12 + (now.getMonth() - CAREER_START.getMonth());
  return Math.max(0, Math.floor(months / 12));
}

export function inWords(n: number): string {
  return WORDS[n] ?? String(n);
}
