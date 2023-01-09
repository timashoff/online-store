import { createHTMLTemplate } from '../../utils/createHTMLTemplate';
import './404.css';
import mainHTML from './404.html';

export const notFound = () => createHTMLTemplate(mainHTML);

// const returnBack = document.querySelector('#return-back');
// const returnHome = document.querySelector('#return-main');

// returnBack?.addEventListener('click', () => {
//   history.go(-1);
// });

// returnHome?.addEventListener('click', () => {
//   window.location.pathname = '/cart';
// });
