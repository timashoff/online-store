
import { home } from '../pages/home/home';
import { getHTMLElement } from './getHTMLElement';

const root = getHTMLElement(document, '#root');

const routes = [
  {
    page: home(),
    path: '/',
  },
  { path: '/cart' },
  { path: '/product/id1' },
];


export function render() {
  const route = routes.find(r => r.path === window.location.pathname);
  const page = route?.page;
  if (page instanceof DocumentFragment) {
    root.innerHTML = '';
    root.appendChild(page);
  }
}