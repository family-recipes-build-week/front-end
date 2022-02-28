import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Nav from './components/Nav';
import Login from './components/Login';
import Signup from './components/SignUp';

function App() {
  return (
    <div className='App'>
        <Routes>
          <Route exact path='/' element={<Nav/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/instructor'/>
          <Route exact path='/client'/>
        </Routes>
    </div>
  );
}

export default App;