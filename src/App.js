import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

//components
import Header from './components/Header/Header';

//pages
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';


function App() {


  return <div className='App'>
    <Header/>

    <Switch>
      <Route path='/search' component={Search}/>
      <Route path='/' component={Home}/>
    </Switch>

  </div>
}

export default App;
