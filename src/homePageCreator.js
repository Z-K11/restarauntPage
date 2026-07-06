export function homePage(logo,contentDiv)
{
const contentHighLight = document.createElement('div');
contentDiv.appendChild(contentHighLight);
const mainLogo = document.createElement('div');
const logoHeadings = document.createElement('div');
contentHighLight.appendChild(mainLogo);
contentHighLight.appendChild(logoHeadings);
const mainImage = document.createElement('img');
mainImage.src = logo;
mainLogo.appendChild(mainImage);
mainLogo.classList.add('mainImage');
const mainHeading = document.createElement('div');
const subHeading = document.createElement('div');
logoHeadings.appendChild(mainHeading);
logoHeadings.appendChild(subHeading);
const mainHeadingText = document.createElement('p');
const subHeadingText = document.createElement('p');
mainHeadingText.textContent = 'Nothing Nutritional Stays Hidden From Agent Chef';
contentHighLight.classList.add('headingStyler');
subHeadingText.textContent='Safe And Healthy Kitchen';
mainHeading.classList.add('mainHeading');
subHeading.classList.add('subHeading');
mainHeading.appendChild(mainHeadingText);
subHeading.appendChild(subHeadingText);
}