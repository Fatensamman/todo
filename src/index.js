import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginProvider from './components/auth/context.js';

import App from './App.js';

function Main() {
  return(
  <LoginProvider>
    <App />;
  </LoginProvider>
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
