import _ from 'lodash';
import './style/main.css';
import testImg from './img/test.png';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = testImg;
  element.appendChild(myIcon);

  // TEST ES6
  const a = () => {
    alert('Hello World!');
  };
  a();

  return element;
}

document.body.appendChild(component());
