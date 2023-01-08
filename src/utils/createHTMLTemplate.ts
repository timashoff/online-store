
export function createHTMLTemplate(HTMLstring: string): DocumentFragment | null {
  let fragment = document.createDocumentFragment();
  fragment = document.createRange().createContextualFragment(HTMLstring);
  return fragment;
}