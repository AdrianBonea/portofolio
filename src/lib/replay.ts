/** Restarts a CSS animation by removing the class, forcing a reflow, and adding it back. */
export function replay(el: HTMLElement, cls: string): void {
  el.classList.remove(cls);
  void el.offsetWidth;
  el.classList.add(cls);
}
