// The theme lives in localStorage under THEME_KEY and on <html data-theme="light">.
// Dark is the default and is represented by the attribute being absent.
// Base.astro applies the stored value before first paint using the same key.
export const THEME_KEY = 'theme';

export type Theme = 'dark' | 'light';

export function currentTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

export function setTheme(theme: Theme): void {
  const root = document.documentElement;
  if (theme === 'light') root.dataset.theme = 'light';
  else delete root.dataset.theme;
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {}
}
