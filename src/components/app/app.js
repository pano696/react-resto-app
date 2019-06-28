import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import {BrowserRouter as Router,  Route, Switch} from 'react-router-dom';

import Background from './food-bg.jpg';

const App = () => {
    return (
        <Router>
          <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Switch>
              <Route
                path='/'
                component={MainPage}
                exact/>
              <Route
                path='/cart'
                component={CartPage}
                exact/>
            </Switch>
          </div>
        </Router>
    )
}

export default App;
