// Started working professionally in May 2022.
export const CAREER_START = new Date(2022, 4, 1);

const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

export interface Experience {
  /** Full years elapsed since CAREER_START. */
  years: number;
  /** "4 years" */
  label: string;
  /** "four" */
  words: string;
}

export function experience(now = new Date()): Experience {
  const months =
    (now.getFullYear() - CAREER_START.getFullYear()) * 12 + (now.getMonth() - CAREER_START.getMonth());
  const years = Math.max(0, Math.floor(months / 12));
  return { years, label: `${years} years`, words: WORDS[years] ?? String(years) };
}

type Format = 'label' | 'words';

/**
 * Brings every years mention under `root` up to date, so the page stays right between deploys.
 * Mark elements with `data-years="label|words"` to replace their text, or with
 * `data-years-aria="... {label} ..."` to fill their aria-label from a template.
 */
export function refreshYears(root: ParentNode = document, now = new Date()): void {
  const xp = experience(now);
  root.querySelectorAll<HTMLElement>('[data-years]').forEach((el) => {
    el.textContent = xp[el.dataset.years as Format] ?? el.textContent;
  });
  root.querySelectorAll<HTMLElement>('[data-years-aria]').forEach((el) => {
    el.setAttribute('aria-label', el.dataset.yearsAria!.replace(/\{(label|words)\}/g, (_, k: Format) => xp[k]));
  });
}
