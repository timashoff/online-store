import { createHTMLTemplate } from '../../utils/createHTMLTemplate';
import footerHTML from './footer.html';
import './footer.css';

export const footer = (() => createHTMLTemplate(footerHTML))();