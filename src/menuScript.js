// import menuBackground from './menu.png';
export function displayMenu(logo)
{
    const contentBox = document.querySelector('#content');
    contentBox.classList.add('menuContent');
    const menuWallpaper = document.createElement('div');
    menuWallpaper.classList.add('menuBackground');
    console.log('Menu Script Loaded Successfuly');
    contentBox.appendChild(menuWallpaper);
    const menuLogo = document.createElement('div');
    menuLogo.classList.add('menuLogo');
    menuWallpaper.appendChild(menuLogo);
    const logoPng = document.createElement('img');
    logoPng.src=logo;
    menuLogo.appendChild(logoPng);
    const item_1 = document.createElement('div');
    const item_2 = document.createElement('div');
    const item_3 = document.createElement('div');
    const item_4 = document.createElement('div');
    const itemArray =
    [   item_1,
        item_2,
        item_3,
        item_4,
    ];
    const item_1Heading=document.createElement('h3');
    const item_2Heading=document.createElement('h3');
    const item_3Heading=document.createElement('h3');
    const item_4Heading=document.createElement('h3');
    const item_1Description = document.createElement('p');
    const item_2Description = document.createElement('p');
    const item_3Description = document.createElement('p');
    const item_4Description = document.createElement('p');
    const headings=
    [
        item_1Heading,
        item_2Heading,
        item_3Heading,
        item_4Heading,
    ];
    const descriptions=
    [
        item_1Description,
        item_2Description,
        item_3Description,
        item_4Description,
    ];
    const disheHeadings = 
    [   'Alu Keema',
        'Nalli Nehari',
        'Mutton Biryani',
        'Alu Gosht!',
    ];
    const dishDescriptions=
    [
        'cooked in beef fat served with fresh naan',
        'sizzling hot served with fresh bread',
        'Served with signaute salad and raita!',
        'Thick Mutton gravy cooked with potatoes served with rice or bread!',
    ];
    (()=>
    {
        for(let i =0;i<4;i++)
        {
            menuWallpaper.appendChild(itemArray[i]);
            itemArray[i].classList.add('menuItem');
            itemArray[i].appendChild(headings[i]);
            itemArray[i].appendChild(descriptions[i]);
            headings[i].textContent=disheHeadings[i];
            descriptions[i].textContent=dishDescriptions[i];
        }
    })();
}