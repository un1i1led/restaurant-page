import {content} from './index';
import firstSalad from './img/firstSalad.png';
import pastaClam from './img/pastaClam.png';

const main = document.createElement('div');

const mainMenu = () => {
    main.className = 'main-menu';
    content.appendChild(main);
}

const makeSalad = () => {
    const saladDiv = document.createElement('div');
    saladDiv.className = 'salad-div';

    const saladImg = new Image();
    saladImg.src = firstSalad;
    saladImg.className = 'first-salad';

    main.appendChild(saladDiv);
    saladDiv.appendChild(saladImg);
}

const makePasta = () => {
    const pastaDiv = document.createElement('div');
    pastaDiv.className = 'pasta-div';

    const pastaImg = new Image();
    pastaImg.src = pastaClam;
    pastaImg.className = 'pasta-clam';

    main.appendChild(pastaDiv);
    pastaDiv.appendChild(pastaImg);
}



const halfMenu = () => {
    const liMenu = document.querySelector('#menu');
    liMenu.className = 'active';
    content.appendChild(main);
}

const startMenu = () => {
    mainMenu();
    makeSalad();
    makePasta();
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