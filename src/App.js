import React from 'react';
import './App.css';

import Drawer from './Component/Drawer';

import {Routes ,Route} from 'react-router-dom';
import Logout from './Component/Logout';

import Homepage from './Component/Homepage';
 export default function App() {
 
  return (
  <>
  <Drawer/>
  <Routes>
  < Route path='/' element={<Homepage />} />
  < Route path='/Logout' element={<Logout />} />
  </Routes>

  </>
    
  );
}


