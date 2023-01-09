
import { createHTMLTemplate } from '../../utils/createHTMLTemplate';
import { createProducts } from './helpers/createProducts';
import './home.css';
import mainHTML from './home.html';

export const home = () => createHTMLTemplate(mainHTML);

export function homeAction() {
  createProducts();
}