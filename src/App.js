import React from 'react';
import Header from './components/Header';
import Information from './components/Information';
import SeasonalProduce from './components/SeasonalProduce';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  var body = {
    backgroundImage: "url(https://images.unsplash.com/photo-1529313780224-1a12b68bed16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2048&q=80)",
    height: 'vh100'
  }
  return (
    <div style={body}>
      <Header/>
      <Information/>
      <SeasonalProduce/>
    </div>
  );
}

export default App;
