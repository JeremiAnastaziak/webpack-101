console.log('webpack', new Date().getMilliseconds());

const rootElement = document.createElement('div');
rootElement.id = 'root';
rootElement.innerHTML = 'Loading React App...';
document.body.appendChild(rootElement);

import(/* webpackChunkName: "app" */ './App')
  .then(({default: App}) => App())
