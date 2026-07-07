export function aboutSection(logo)
{
    const aboutHeading = document.createElement('h2');
    const contentDiv = document.querySelector('#content');
    contentDiv.appendChild(aboutHeading);
    aboutHeading.textContent='About Me';
}