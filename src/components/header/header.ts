import { createHTMLTemplate } from '../../utils/createHTMLTemplate';
import headerHTML from './header.html';
import './header.css';

export const header = (() => createHTMLTemplate(headerHTML))();