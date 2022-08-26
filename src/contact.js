import {content} from './index';

const main = document.createElement('div');
const divHolder = document.createElement('div');
const divOne = document.createElement('div');
const divTwo = document.createElement('div');
const divThree = document.createElement('div');

const mainContact = () => {
    main.className = 'main-contact';
    content.appendChild(main);
}

const contactInfo = () => {
    const info = document.createElement('div');
    info.className = 'contact-info';
    main.appendChild(info);

    const h1 = document.createElement('h1');
    h1.innerHTML = 'Contact Us';
    h1.className = 'big-contact';

    divHolder.className = 'div-holder';
    
    main.appendChild(divHolder);
    info.appendChild(h1);
    threeDivs();
}

const makeDivOne = () => {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.308868758972!2d-118.6219082851746!3d34.4950531017128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c27ed0b632f993%3A0x6beb56ec9237915d!2sFantastic%20Ln%2C%20Castaic%2C%20CA%2091384%2C%20USA!5e0!3m2!1sen!2smx!4v1661357300751!5m2!1sen!2smx';
    iframe.className = 'iframe';
    divOne.appendChild(iframe);
}

const form = document.createElement('form');
const name = document.createElement('input');
const lastName = document.createElement('input');
const email = document.createElement('input');
const subject = document.createElement('textarea');
const sendBtn = document.createElement('button');
const inputs = [name, lastName, email, subject];
const formh2 = document.createElement('h2');

for (const input of inputs){
    input.required = true;
}

const makeDivTwo = () => {
    formh2.innerHTML = 'Message Us!';
    formh2.className = 'form-h2';
    divTwo.appendChild(formh2);

    form.className = 'form';
    divTwo.appendChild(form);

    name.setAttribute('type', 'text');
    name.setAttribute('name', 'name');
    name.setAttribute('placeholder', 'Name');
    form.appendChild(name);

    lastName.setAttribute('type', 'text');
    lastName.setAttribute('name', 'lastName');
    lastName.setAttribute('placeholder', 'Last Name');
    form.appendChild(lastName);

    email.setAttribute('type', 'email');
    email.setAttribute('name', 'email');
    email.setAttribute('placeholder', 'Email');
    form.appendChild(email);

    subject.setAttribute('placeholder', 'Message...');
    subject.setAttribute('name', 'subject');
    form.appendChild(subject);

    sendBtn.className = 'send-btn';
    sendBtn.innerHTML = 'Send';
    form.appendChild(sendBtn);
}

const makeDivThree = () => {

    const h2 = document.createElement('h2');
    h2.innerHTML = 'Address';
    h2.className = 'div-three-h2';

    divThree.appendChild(h2);

    const words = ['110', 'Fantastic Lane,', 'Castaic,', 'California'];

    const separator = document.createElement('div');
    separator.className = 'div-three-separator';
    divThree.appendChild(separator);

    for (let i = 0; i < words.length; i++){
        const p = document.createElement('p');
        p.innerHTML = words[i];
        p.className = 'div-three-p';
        separator.appendChild(p);
    }
}

const threeDivs = () => {
    divOne.className = 'three-div div-one';
    divTwo.className = 'three-div div-two';
    divThree.className = 'three-div div-three';

    divHolder.appendChild(divOne);
    divHolder.appendChild(divTwo);
    divHolder.appendChild(divThree);

    makeDivOne();
    makeDivTwo();
    makeDivThree();
}

const startContact = () => {
    mainContact();
    contactInfo();
}

const halfContact = () => {
    const liContact = document.querySelector('#contact');
    liContact.className = 'active';
    content.appendChild(main);
}

const removeContact = () => {
    const liContact = document.querySelector('#contact');
    liContact.className = '';
    content.removeChild(main);
}

export {
    startContact,
    removeContact,
    halfContact
}