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
// homePage(logo,contentDiv);
// displayMenu(logo);
aboutSection(logo);