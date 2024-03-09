import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/Home';
import User from "./Pages/Users"
import GlobalStyles from "./styles/globalStyles"
import Routes from './routes';


ReactDOM.render(  
  <>
    <Routes />
    <GlobalStyles/>
  </>,

document.getElementById("root"));
