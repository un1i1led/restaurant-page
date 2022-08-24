import {content} from './index';

const main = document.createElement('div');

const mainContact = () => {
    main.className = 'main-contact';
    content.appendChild(main);
}

const contactInfo = () => {
    const info = document.createElement('div');
    info.className = 'contactInfo';
    main.appendChild(info);

    const h1 = document.createElement('h1');
    h1.innerHTML = 'Contact Us';
    h1.className = 'big-contact';

    info.appendChild(h1);
}

const startContact = () => {
    mainContact();
    contactInfo();
}

const removeContact = () => {
    content.removeChild(main);
}

export {
    startContact,
    removeContact
}