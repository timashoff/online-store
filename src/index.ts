import { header } from './components/header';
import { footer } from './components/footer';
import { addElement } from './utils/addElement';
import './style.css';

const HEADER = document.querySelector('header');
const FOOTER = document.querySelector('footer');
addElement(HEADER, header);
addElement(FOOTER, footer);