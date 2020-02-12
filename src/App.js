import React, { useState }  from 'react';
import Header from './components/Header';
import Information from './components/Information';
import SeasonalProduce from './components/SeasonalProduce';
import NewMarket from './components/NewMarket';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import './components/fonts.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  var body = {
    backgroundImage: "url(https://images.unsplash.com/photo-1529313780224-1a12b68bed16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2048&q=80)",
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  }
  const [showText, setShowText] = useState(false);
  return (
    <div style={body}>
      <Header/>
      <Switch>
        <Route exact path='/' component={Information} />
        // <Route exact path='/' component={SeasonalProduce} />
        <Route path='/newmarket' component={NewMarket} />
        <Route path='/produce' component={SeasonalProduce} />
      </Switch>
    </div>
  );
}

export default App;

// <SeasonalProduce/>
// <Information/>
