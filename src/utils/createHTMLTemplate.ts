
export function createHTMLTemplate(HTMLstring: string): Element | null {
  const template = document.createElement('template');
  template.innerHTML = HTMLstring;
  return template.content.firstElementChild;
}