import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Nav from './components/Nav';
import Login from './components/Login';
import Signup from './components/SignUp';
import Recipe from './components/Recipe';
import Landing from './components/landing';

function App() {
  return (
    <div className='App'>
        <Routes>
          <Route exact path='/' element={<Nav/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/recipe' element={<Recipe/>}/>
          <Route exact path='/landing' element={<Landing/>}/>
          <Route exact path='/instructor'/>
          <Route exact path='/client'/>
        </Routes>
    </div>
  );
}

export default App;