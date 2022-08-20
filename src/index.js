import {start} from './Home';
import './style.css';

const body = document.body;
export const content = document.createElement('div');
content.className = 'content';
body.appendChild(content);

start();