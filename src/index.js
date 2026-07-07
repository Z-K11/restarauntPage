import './styles.css';
import logo from './premiumLogo.png';
console.log("Successfuly loaded index.js");
import {homePage} from './homePageCreator.js'
import { displayMenu } from './menuScript.js';
import { aboutSection } from './aboutScript.js';
const navButtons = document.querySelector('.navButtons');
const iconDiv = document.createElement('div');
navButtons.before(iconDiv);
const icon = document.createElement('img');
icon.src = logo;
iconDiv.appendChild(icon);
icon.classList.add('logo');
const contentDiv = document.querySelector('#content');
homePage(logo,contentDiv);
navButtons.addEventListener('click',(e)=>
{
    const target=e.target.id;
    switch (target) {
        case 'home':
            contentDiv.innerHTML='';
            homePage(logo,contentDiv);
            break;
        case 'menu':
            contentDiv.innerHTML='';
            displayMenu(logo);
            break;
        case 'about':
            contentDiv.innerHTML='';
            aboutSection(logo);
            break;
        default:
            alert('error in event listner');
            break;
    }
});
//Functions for calling different pages
// homePage(logo,contentDiv);
// displayMenu(logo);
// aboutSection(logo);