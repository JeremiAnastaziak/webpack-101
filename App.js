import React from 'react';
import ReactDOM from 'react-dom';

const renderText = () => {
  console.log('renderText', new Date().getTime());
  return 'React app loaded';
}

export default function App() {
  ReactDOM.render(
    React.createElement(
      'div',
      {
        children: renderText()
      }
    ),
    document.getElementById('root')
  )
}
