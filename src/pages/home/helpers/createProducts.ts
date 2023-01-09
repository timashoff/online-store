
import { getHTMLElement } from '../../../utils/getHTMLElement';
import data from '../../../data/products.json';

const products = data.products;

export function createProducts() {
  const productsList = getHTMLElement(document, '.products');
  productsList.innerHTML = '';
  products.forEach(product => {
    const item = document.createElement('div');
    item.classList.add('product-card');
    item.id = product.id.toString();

    const img = document.createElement('img');
    img.classList.add('product-img');
    img.src = product.img[0];

    const title = document.createElement('span');
    title.classList.add('product-title');
    title.innerText = product.title;

    const rating = document.createElement('span');
    rating.classList.add('product-rating');
    rating.innerText = '5';

    const price = document.createElement('span');
    price.classList.add('product-price');
    price.innerText = `$${product.price}`;

    const btnCart = document.createElement('button');
    btnCart.classList.add('product-button');
    btnCart.id = 'add-to-cart';
    btnCart.innerText = 'Add to Cart';

    const btnBuy = document.createElement('button');
    btnBuy.classList.add('product-button');
    btnBuy.id = 'buy-now';
    btnBuy.innerText = 'Buy Now';

    item.append(img);
    item.append(title);
    item.append(rating);
    item.append(price);
    item.append(btnCart);
    item.append(btnBuy);

    item.addEventListener('click', function (event) {
      if (event.target instanceof HTMLElement && !event.target.classList.contains('product-button')) {
        window.location.href = `${window.location.origin}/products/${item.id}`;
      }
    });

    productsList.append(item);
  });
}