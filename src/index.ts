import { header } from './components/header';
import { footer } from './components/footer';
import { addElement } from './utils/addElement';
import { render } from './utils/router';
import './style.css';
import { headerActions } from './components/header/header';


function onLoadFunctions() {
  headerActions();
  render();
}

document.addEventListener('DOMContentLoaded', onLoadFunctions);

const HEADER = document.querySelector('header');
const FOOTER = document.querySelector('footer');
addElement(HEADER, header);
addElement(FOOTER, footer);