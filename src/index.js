import { pre_load } from "./load.js";
import './style.css';
import {menu} from "./menu.js";
import {home} from "./home.js";
import { contact } from "./contact.js";
pre_load();
home();
document.querySelector('.home').addEventListener('click',()=>{
    document.querySelector('.home').classList.add('active');
    document.querySelector('.menu').classList.remove('active');
    document.querySelector('.contact').classList.remove('active');
    home();
});
document.querySelector('.menu').addEventListener('click',()=>{
    document.querySelector('.menu').classList.add('active');
    document.querySelector('.home').classList.remove('active');
    document.querySelector('.contact').classList.remove('active');
    menu();
});
document.querySelector('.contact').addEventListener('click',()=>{
    document.querySelector('.contact').classList.add('active');
    document.querySelector('.home').classList.remove('active');
    document.querySelector('.menu').classList.remove('active');
    contact();
});



