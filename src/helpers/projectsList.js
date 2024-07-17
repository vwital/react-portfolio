import project01 from './../assets/img/projects/01.jpg';
import project01Big from './../assets/img/projects/01-big.jpg';
import project02 from './../assets/img/projects/02.jpg';
import project02Big from './../assets/img/projects/02-big.jpg';
import project03 from './../assets/img/projects/03.jpg';
import project03Big from './../assets/img/projects/03-big.jpg';
import project04 from './../assets/img/projects/04.jpg';
import project04Big from './../assets/img/projects/04-big.jpg';
import project05 from './../assets/img/projects/05.jpg';
import project05Big from './../assets/img/projects/05-big.jpg';
import project06 from './../assets/img/projects/06.jpg';
import project06Big from './../assets/img/projects/06-big.jpg';
import project07 from './../assets/img/projects/07.jpg';
import project07Big from './../assets/img/projects/07-big.jpg';

const projects = [
  {
    title: 'Portfolio website',
    description:
      'A single page application is a portfolio website with responsive layout. Includes pages with descriptions and links to projects and contact information.',
    stack: 'ReactJS CSS',
    img: project01,
    imgBig: project01Big,
    gitHubLink: 'https://github.com/vwital/react-portfolio',
    deploy: 'https://vwital.netlify.app',
  },
  {
    title: 'eCommerce app',
    description:
      'Single page application store. With adaptive layout and requests to the server. May not be available because the commercetools trial period has expired. Demo is attached.',
    stack: 'HTML, CSS, SASS, Typescript, Webpack, Comercetools Api',
    img: project02,
    imgBig: project02Big,
    gitHubLink: 'https://github.com/HanunagreZ/eCommerce-app',
    deploy: 'https://ecommerce-scriptsqad.netlify.app',
    demo: 'https://disk.yandex.ru/d/a3Itfjf30j5WWw',
  },
  {
    title: 'Coffee House',
    description:
      'Two-page adaptive coffee shop website, with a burger menu on tablet and mobile. Landing page with an endless slider that switches by timer. Menu page with a modal order window with product cost calculation.',
    stack: 'HTML, CSS, SASS, Javascript, NPM',
    img: project03,
    imgBig: project03Big,
    gitHubLink: 'https://github.com/vwital/coffee-house',
    deploy: 'https://vwital.github.io/coffee-house/',
  },
  {
    title: 'Nonograms',
    description:
      'Nonogram game (Japanese crossword puzzle). 3 Difficulty levels. Switching the theme between dark and light. Saving the game and the last 5 results in local storage.',
    stack: 'HTML, CSS, SASS, Javascript, Webpack',
    img: project04,
    imgBig: project04Big,
    gitHubLink: 'https://github.com/vwital/nonograms',
    deploy: 'https://vwital.github.io/nonograms/',
  },
  {
    title: 'Shelter',
    description:
      'Two-page website for an animal shelter, with sliders, modal windows, burger menu, and adaptive layout for tablet, mobile.',
    stack: 'HTML, CSS, SASS, Javascript, Prepros ',
    img: project05,
    imgBig: project05Big,
    gitHubLink: 'https://github.com/vwital/shelter',
    deploy: 'https://vwital.github.io/shelter/',
  },

  {
    title: 'Hangman',
    description:
      'A hangman game where you have to guess the word. You can press a letter both on the screen and from the keyboard. Adaptive layout.',
    stack: 'HTML, CSS, SASS, Javascript, Prepros',
    img: project06,
    imgBig: project06Big,
    gitHubLink: 'https://github.com/vwital/hangman',
    deploy: 'https://vwital.github.io/hangman/',
  },

  {
    title: 'Songbird',
    description:
      'A game in which you need to guess the bird by its song. You need to score the most points.',
    stack: ' HTML, CSS, SASS, Javascript, Prepros ',
    img: project07,
    imgBig: project07Big,
    gitHubLink: 'https://github.com/vwital/songbird',
    deploy: 'https://vwital.github.io/songbird/',
  },
];

export default projects;
