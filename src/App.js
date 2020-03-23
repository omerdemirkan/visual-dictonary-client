import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

//components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

//pages
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Contribute from './pages/Contribute/Contribute';


function App() {


  return <div className='App'>
    <Header/>

    <div className='main'>
      <Switch>
        <Route path='/search' component={Search}/>
        <Route path='/contribute' component={Contribute}/>
        <Route path='/' component={Home}/>
      </Switch>
    </div>
    <Footer/>
  </div>
}

export default App;
