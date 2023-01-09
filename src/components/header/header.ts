import { createHTMLTemplate } from '../../utils/createHTMLTemplate';
import headerHTML from './header.html';
import './header.css';
import { gotoCart } from './helpers/goto-cart';
import { gotoHome } from './helpers/goto-home';

export const header = (() => createHTMLTemplate(headerHTML))();

export function headerActions() {
  gotoCart();
  gotoHome();
}