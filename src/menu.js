export function menu(){
    const main_el = document.querySelector('.main_el');
    main_el.innerHTML = '';
    const child = document.createElement('div');
    child.classList.add('child2');
    const food1 = document.createElement('div');
    food1.classList.add('food1');
    const m1l1 = document.createElement('img');
    m1l1.src = 'https://images.pexels.com/photos/1845287/pexels-photo-1845287.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
    m1l1.classList.add('image');
    const m1l2 = document.createElement('h2');
    m1l2.textContent = 'Plat principal';
    const m1l3 = document.createElement('div');
    m1l3.textContent = 'Includes either meat, fish or poultry.';
    food1.append(m1l1,m1l2,m1l3);

    const food2 = document.createElement('div');
    food2.classList.add('food2');
    const m2l1 = document.createElement('img');
    m2l1.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQamO_nwQoZk1ZWw5IPJXPFFhCTwaB7B0zLP5V5kZqvOA&s';
    m2l1.classList.add('image');
    const m2l2 = document.createElement('h2');
    m2l2.textContent = 'Dessert cuit au four';
    const m2l3 = document.createElement('div');
    m2l3.textContent = 'Biscuits, gelatins, pastries, ice creams.';
    food2.append(m2l1,m2l2,m2l3);

    const food3 = document.createElement('div');
    food3.classList.add('food3');
    const m3l1 = document.createElement('img');
    m3l1.src = 'https://images.pexels.com/photos/3851032/pexels-photo-3851032.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
    m3l1.classList.add('image');
    const m3l2 = document.createElement('h2');
    m3l2.textContent = 'Gâteau aux fraises';
    const m3l3 = document.createElement('div');
    m3l3.textContent = 'Confectioners sugar, strawberry ,  vanilla';
    food3.append(m3l1,m3l2,m3l3);

    const food4 = document.createElement('div');
    food4.classList.add('food4');
    const m4l1 = document.createElement('img');
    m4l1.src = 'https://images.pexels.com/photos/7149383/pexels-photo-7149383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
    m4l1.classList.add('image');
    const m4l2 = document.createElement('h2');
    m4l2.textContent = 'Gateau au chocolat';
    const m4l3 = document.createElement('div');
    m4l3.textContent = 'Cake flavored with chocolate, cocoa powder. ';
    food4.append(m4l1,m4l2,m4l3);

    child.append(food1,food2,food3,food4);
    main_el.append(child);
}