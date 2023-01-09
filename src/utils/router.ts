
import { cart } from '../pages/cart';
import { home, homeAction } from '../pages/home/home';
import { notFound } from '../pages/404/404';
import { getHTMLElement } from './getHTMLElement';


const root = getHTMLElement(document, '#root');

const routes = [
  {
    page: home(),
    path: '/',
    actions: homeAction,
  },
  {
    page: cart(),
    path: '/cart',
    actions: homeAction,
  },
  {
    path: '/product/id1',
    actions: homeAction,
  },
  // { path: '/product/id1' },
  {
    page: notFound(),
    path: '/404',
    actions: function () { },
  },
];

export function render() {
  if (routes.find(r => r.path === window.location.pathname)) {
    const route = routes.find(r => r.path === window.location.pathname);
    const page = route?.page;
    if (page instanceof DocumentFragment) {
      root.innerHTML = '';
      root.appendChild(page);
      route?.actions();
    } 
  } else {
    window.location.pathname = '/404';
  }
}
