
import { cart } from '../pages/cart';
import { home } from '../pages/home/home';
import { notFound } from '../pages/404/404';
import { getHTMLElement } from './getHTMLElement';

const root = getHTMLElement(document, '#root');

const routes = [
  {
    page: home(),
    path: '/',
  },
  {
    page: cart(),
    path: '/cart',
  },
  { path: '/product/id1' },
  {
    page: notFound(),
    path: '/404',
  },
];

export function render() {
  if (routes.find(r => r.path === window.location.pathname)) {
    const route = routes.find(r => r.path === window.location.pathname);
    const page = route?.page;
    if (page instanceof DocumentFragment) {
      root.innerHTML = '';
      root.appendChild(page);
    }
  } else {
    window.location.pathname = '/404';
  }
}
