import { getHTMLElement } from '../../../utils/getHTMLElement';

export function gotoCart() {
  const cart = getHTMLElement(document, '.cart');
  cart.addEventListener('click', () => window.location.href = `${window.location.origin}/cart`);
}