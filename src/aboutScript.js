export function aboutSection(logo)
{
    const contentDiv = document.createElement('div');
    const aboutHeading = document.createElement('h2');
    const aboutContent = document.querySelector('#content');
    aboutContent.appendChild(contentDiv);
    aboutHeading.textContent='About Me';
    contentDiv.classList.add('aboutContent');
    aboutHeading.classList.add('aboutHeading');
    const aboutDescription = document.createElement('p');
    contentDiv.appendChild(aboutDescription);
    aboutDescription.textContent='Greetings, I am a Junior full stack developer currently studying under the supervision of the awesome team at TheOdinProject. I love programming everything myself and hate vibeCoding. IF you have any cool projects of your own please share them with me. THANKS!';
    aboutDescription.classList.add('aboutDescription');
    const contact = document.createElement('p');
    contentDiv.appendChild(contact);
    contact.textContent='feel free to contact me via : zulqarnainbazidkhail@gmail.com';
    contact.classList.add('contact');
}