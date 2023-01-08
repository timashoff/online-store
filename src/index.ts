import { header } from './components/header';
import { addElement } from './utils/addElement';
import './style.css';

const HEADER = document.querySelector('.header');
addElement(HEADER, header);