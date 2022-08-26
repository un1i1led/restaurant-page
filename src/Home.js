import {content} from './index';
import Icon from './icon.png';

const createNavBar = () => {
    const navBar = document.createElement('div');
    navBar.className = 'nav-bar';
    content.appendChild(navBar);

    const options = document.createElement('div');
    options.className = 'options'
    navBar.appendChild(options);

    const ulNavBar = document.createElement('ul');
    options.appendChild(ulNavBar);

    const liMenu = document.createElement('li');
    const liHome = document.createElement('li');
    liHome.className = 'active';
    const liContact = document.createElement('li');

    liMenu.innerHTML = 'Menu';
    liHome.innerHTML = 'Home';
    liContact.innerHTML = 'Contact';

    liMenu.setAttribute('id', 'menu');
    liHome.setAttribute('id','home');
    liContact.setAttribute('id', 'contact');

    ulNavBar.appendChild(liMenu);
    ulNavBar.appendChild(liHome);
    ulNavBar.appendChild(liContact);
}

const main = document.createElement('div');
const mainInfo = document.createElement('div');

const createMain = () => {
    main.className = 'main';
    content.appendChild(main);

    const name = document.createElement('div');
    name.className = 'name';
    const header = document.createElement('h1');
    header.innerHTML = 'Munchtastic';
    const saladIcon = new Image();
    saladIcon.src = Icon;

    
    mainInfo.className = 'main-info';

    main.appendChild(name);
    main.appendChild(mainInfo);
    name.appendChild(header);
    name.appendChild(saladIcon);
}

const hrsPara = () => {
    const monP = document.createElement('p');
    monP.innerHTML = 'Monday: 11:30 - 23:00';

    const tueP = document.createElement('p');
    tueP.innerHTML = 'Tuesday: 11:30 - 23:00';

    const wenP = document.createElement('p');
    wenP.innerHTML = 'Wednesday: 11:30 - 23:00';
    
    const thurP = document.createElement('p');
    thurP.innerHTML = 'Thursday: 11:30 - 23:00';

    const friP = document.createElement('p');
    friP.innerHTML = 'Friday: 11:30 - 23:00';

    const satP = document.createElement('p');
    satP.innerHTML = 'Saturday: 11:30 - 23:00';

    const sunP = document.createElement('p');
    sunP.innerHTML = 'Sunday: 11:30 - 23:00';

    const days = [monP, tueP, wenP, thurP, friP, satP, sunP];

    for (let i = 0; i < days.length; i++){
        days[i].className = 'weighted';
        mainInfo.appendChild(days[i]);
    }

}

const createMainInfo = () => {
    const infoH2 = document.createElement('h2');
    infoH2.innerHTML = 'Why choose us?';
    mainInfo.appendChild(infoH2);

    const infoP = document.createElement('p');
    infoP.innerHTML = 'Here at Munchtastic we have a wide selection of incredible meals that we\'ve come to perfect over our 50 year history!'
    infoP.className = 'weighted';
    infoP.id = 'info';
    mainInfo.appendChild(infoP);

    const hrsH2 = document.createElement('h2');
    hrsH2.innerHTML = 'Hours';
    mainInfo.appendChild(hrsH2);

    hrsPara();

    const locationH2 = document.createElement('h2');
    locationH2.innerHTML = 'Location';
    mainInfo.appendChild(locationH2);

    const locationP = document.createElement('p');
    locationP.innerHTML = '110 Fantastic Lane, Castaic, California';
    locationP.classList = 'weighted';
    mainInfo.appendChild(locationP);
}

const start = () => {
    createNavBar();
    createMain();
    createMainInfo();
}

const halfStart = () => {
    content.appendChild(main);
    const liHome = document.querySelector('#home');
    liHome.className = 'active';
}

const removeHome = () => {
    const liHome = document.querySelector('#home');
    liHome.className = '';
    content.removeChild(main);
}

export {
    start,
    removeHome,
    halfStart
}