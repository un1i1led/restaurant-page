import {start, removeHome, halfStart} from './Home';
import {startContact, removeContact, halfContact} from './contact';
import {startMenu, halfMenu, removeMenu} from './Menu';
import './style.css';


const body = document.body;
export const content = document.createElement('div');
content.className = 'content';
body.appendChild(content);

let contactInitialized = false;
let menuInitialized = false;



start();

const liHome = document.querySelector('#home');
const liContact = document.querySelector('#contact');
const liMenu = document.querySelector('#menu');

liContact.addEventListener('click', function() {
    if (liHome.className == 'active'){
        removeHome();
    } else if (liMenu.className == 'active'){
        removeMenu();
    }

    if (contactInitialized == false){
        startContact();
        liContact.className = 'active';
        contactInitialized = true;
    } else {
        halfContact();
    }

    

});


liHome.addEventListener('click', function() {
    if (liContact.className == 'active') {
        removeContact();
    } else if (liMenu.className == 'active'){
        removeMenu();
    }

    if (!(liHome.className == 'active')){
        halfStart();
    }


});

liMenu.addEventListener('click', function(){
    if (home.className == 'active'){
        removeHome();
    } else if (contact.className == 'active'){
        removeContact();
    }

    if (menuInitialized == false){
        startMenu();
        liMenu.className = 'active';
        menuInitialized = true;
    } else {
        halfMenu();
    }
})
