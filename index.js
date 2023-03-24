// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Mes premiers tests avec JavaScript</h1>`;
appDiv.innerHTML += '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>';
const img = document.createElement('img');
img.src = 'images/F2JIndustry.png';
img.alt = 'Logo de l\'entreprise F2J Industry';
img.width = 323; 
img.height = 353; 
appDiv.appendChild(img);
