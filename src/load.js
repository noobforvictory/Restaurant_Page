export function pre_load (){
    const content = document.getElementById('content');
    const header = document.createElement('div');
    header.classList.add('header');
    const top_header = document.createElement('div');
    top_header.classList.add('top_header');
    top_header.textContent = 'Fine Dine';
    const bottom_header = document.createElement('div');
    bottom_header.classList.add('bottom_header');
    const menu1 = document.createElement('div');
    menu1.textContent = 'Home';
    const menu2 = document.createElement('div');
    menu2.textContent = 'Menu';
    const menu3 = document.createElement('div');
    menu3.textContent = 'Contact';
    bottom_header.append(menu1,menu2,menu3);
    header.append(top_header, bottom_header);
    const main = document.createElement('div');
    main.classList.add('main');
    const main_el = document.createElement('div');
    main_el.classList.add('main_el');
    
    
    main.append(main_el);
    
    const footer = document.createElement('div');
    footer.textContent = 'Copyright © 2021 Denis_Victor';
    footer.classList.add('footer');
    content.append(header,main,footer);
    
    }