// import logo from './logo.svg';
import React from 'react';
import Header from './Header';
import AccordionWithData from './Accordion';


import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <h1>Preguntas Frecuentes</h1>
      <AccordionWithData />
    </div>
  );
};  

export default App;
