import {content} from './index';

const main = document.createElement('div');

const mainMenu = () => {
    main.className = 'main-menu';
    content.appendChild(main);
}

const halfMenu = () => {
    const liMenu = document.querySelector('#menu');
    liMenu.className = 'active';
    content.appendChild(main);
}

const startMenu = () => {
    mainMenu();
}

const removeMenu = () => {
    const liMenu = document.querySelector('#menu');
    liMenu.className = '';
    content.removeChild(main);
}

export {
    startMenu,
    halfMenu,
    removeMenu
}