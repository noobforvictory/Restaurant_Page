export function pre_load (){
const content = document.getElementById('content');
const header = document.createElement('div');
header.classList.add('header');
const top_header = document.createElement('div');
const bottom_header = document.createElement('div');
const menu1 = document.createElement('div');
const menu2 = document.createElement('div');
const menu3 = document.createElement('div');
bottom_header.append(menu1,menu2,menu3);
header.append(top_header, bottom_header);
const main = document.createElement('div');
main.classList.add('main');
const main_el = document.createElement('div');
main.append(main_el);
const main1 = document.createElement('div');
const main2 = document.createElement('div');
const image = document.createElement('img');
image.src = 'https://images.unsplash.com/photo-1587899897387-091ebd01a6b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmluZSUyMGRpbmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';
const main4 = document.createElement('div');
main_el.append(main1,main2,image,main4);
const footer = document.createElement('div');
footer.classList.add('footer');
content.append(header,main,footer);

}
