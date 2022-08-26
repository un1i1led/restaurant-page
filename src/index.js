import {start, removeHome, halfStart} from './Home';
import {startContact, removeContact, halfContact} from './contact';
import './style.css';

const body = document.body;
export const content = document.createElement('div');
content.className = 'content';
body.appendChild(content);
let contactInitialized = false;



start();

const contact = document.querySelector('#contact');
contact.addEventListener('click', function() {
    const liContact = document.querySelector('#contact');
    const liHome = document.querySelector('#home');
    if (liHome.className == 'active'){
        removeHome();
    }

    liContact.className = 'active';
    if (contactInitialized == false){
        startContact();
        contactInitialized = true;
    } else {
        halfContact();
    }

    

});

const home = document.querySelector('#home');
home.addEventListener('click', function() {
    const liHome = document.querySelector('#home');
    const liContact = document.querySelector('#contact');
    if (liContact.className == 'active') {
        removeContact();
        liContact.classList.toggle('active');
    }

    if (!(liHome.className == 'active')){
        halfStart();
    }


});

