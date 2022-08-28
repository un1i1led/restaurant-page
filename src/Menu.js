import {content} from './index';
import firstSalad from './img/firstSalad.png';
import pastaClam from './img/pastaClam.png';
import avocado from './img/avocadoSalad.png';

const main = document.createElement('div');

const mainMenu = () => {
    main.className = 'main-menu';
    content.appendChild(main);
}

const makeSalad = () => {
    const saladDiv = document.createElement('div');
    saladDiv.className = 'salad-div';

    const imgDiv = document.createElement('div');
    imgDiv.className = 'salad-img-div';
    const saladImg = new Image();
    saladImg.src = firstSalad;
    saladImg.className = 'first-salad';

    const saladInfoDiv = document.createElement('div');
    saladInfoDiv.className = 'salad-info-div';
    const saladH2 = document.createElement('h2');
    saladH2.innerHTML = 'Amazing salad';
    const saladp = document.createElement('p');
    saladp.className = 'weighted saladP';
    saladp.innerHTML = 'Munchtastic\'s specialty, the amazing salad is a sum of the best vegetables on earth';

    main.appendChild(saladDiv);
    saladDiv.appendChild(saladImg);
    saladInfoDiv.appendChild(saladH2);
    saladInfoDiv.appendChild(saladp);
    saladDiv.appendChild(saladInfoDiv);
}

const makePasta = () => {
    const pastaDiv = document.createElement('div');
    pastaDiv.className = 'pasta-div';

    const pastaImg = new Image();
    pastaImg.src = pastaClam;
    pastaImg.className = 'pasta-clam';

    const pastaInfoDiv = document.createElement('div');
    pastaInfoDiv.className = 'pasta-info-div';
    const pastaH2 = document.createElement('h2');
    pastaH2.innerHTML = 'Amazing pasta';
    const pastaP = document.createElement('p');
    pastaP.innerHTML = 'Duis sodales velit a erat dignissim, eu pellentesque enim sodales. Praesent non convallis nisl.';
    pastaP.className = 'weighted saladP';

    main.appendChild(pastaDiv);
    pastaDiv.appendChild(pastaImg);
    pastaInfoDiv.appendChild(pastaH2);
    pastaInfoDiv.appendChild(pastaP);
    pastaDiv.appendChild(pastaInfoDiv);
}

const makeAvocado = () => {
    const avocadoDiv = document.createElement('div');
    avocadoDiv.className = 'avocado-div';

    const avocadoImg = new Image();
    avocadoImg.src = avocado;
    avocadoImg.className = 'avocado-img';

    const avocadoInfoDiv = document.createElement('div');
    avocadoInfoDiv.className = 'avocado-info-div';
    const avocadoH2 = document.createElement('h2');
    avocadoH2.innerHTML = 'Avocado Dish';
    avocadoH2.className = 'avocado-h2';
    const avocadoP = document.createElement('p');
    avocadoP.innerHTML = 'Duis sodales velit a erat dignissim, eu pellentesque enim sodales. Praesent non convallis nisl.';
    avocadoP.className = 'weighted avocadoP';

    main.appendChild(avocadoDiv);
    avocadoDiv.appendChild(avocadoImg);
    avocadoInfoDiv.appendChild(avocadoH2);
    avocadoInfoDiv.appendChild(avocadoP);
    avocadoDiv.appendChild(avocadoInfoDiv);
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
    makeAvocado();
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