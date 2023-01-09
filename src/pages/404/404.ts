import { createHTMLTemplate } from '../../utils/createHTMLTemplate';
import './404.css';
import mainHTML from './404.html';

export const notFound = () => createHTMLTemplate(mainHTML);