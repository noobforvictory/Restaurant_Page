export function contact(){
    const main_el = document.querySelector('.main_el');
    main_el.innerHTML = '';
    const child = document.createElement('div');
    child.classList.add('child3');
    main_el.append(child);
    const phone = document.createElement('div');
    const span1 = document.createElement('span');
    span1.classList.add('material-symbols-rounded');
    span1.textContent = 'call ';
    const p1 = document.createElement('p');
    p1.textContent = ' 123 456 789';
    phone.append(span1,p1);

    const address = document.createElement('div');
    const span2 = document.createElement('span');
    span2.classList.add('material-symbols-rounded');
    span2.textContent = 'location_on ';
    const p2 = document.createElement('p');
    p2.textContent = ' CA-62 California, USA';
    address.append(span2,p2);
    const img = document.createElement('img');
    img.classList.add('img2');
    img.src = 'https://www.google.com/maps/vt/data=fuJpeqEsLPR_WeVlDfcrlWfabUuebMvkMJ4FlkGMutD9Dcm_8JoUuiunWqpIhtuhowGkyxfec8IabxAuddwN2XyQlcBV70U6MiC0cpl6OzvVrfCbkYsPuaqZpDVz_k_h4kbsFCWcz5sdtTGCieHHauaOORqZKetF7CrJ_-HtuWHfXDbPCR5DGfXr4IZfZr1vutMUhb60n5ie2Za8iMPKpvqtYPyeJaCDWp-oOiTGxzwAIB-nvBZDq4QnPRYO2YkWsHEEgm6YSK9t';
     
    child.append(phone,address,img);

}