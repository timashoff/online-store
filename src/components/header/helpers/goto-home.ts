import { getHTMLElement } from '../../../utils/getHTMLElement';

export function gotoHome() {
  const home = getHTMLElement(document, '.home-link');
  home.addEventListener('click', () => window.location.href = `${window.location.origin}/`);
}