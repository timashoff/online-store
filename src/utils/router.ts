
import { cart } from '../pages/cart';
import { home, homeAction } from '../pages/home/home';
import { notFound } from '../pages/404/404';
import { getHTMLElement } from './getHTMLElement';
import { product } from '../pages/product/product';
import { getProductId } from './getProductId';


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
    page: product(),
    path: `/products/${getProductId}`,
    actions: function () { },
  },
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
