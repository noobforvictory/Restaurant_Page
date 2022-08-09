export function home(){
    const main_el = document.querySelector('.main_el');
    main_el.innerHTML = '';
    const child = document.createElement('div');
    child.classList.add('child');
    const main1 = document.createElement('div');
    main1.textContent = 'Best fine dining experience in your country';
    const main2 = document.createElement('div');
    main2.textContent = 'Made with passion since 1946';
    const image = document.createElement('img');
    image.classList.add('img');
    image.src = 'https://images.unsplash.com/photo-1587899897387-091ebd01a6b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmluZSUyMGRpbmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';
    const main4 = document.createElement('div');
    main4.textContent = 'Order online or visit us!';
    child.append(main1,main2,image,main4);
    main_el.append(child);
}