import React, { useState } from 'react'
import './App.css';
import Navbar from './componenets/Navbar';
import News from './componenets/News';
import {
  BrowserRouter as
  Router,
  Routes,
  Route,
  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = ()=> {


const [progress, setProgress] = useState(0)
  return (
 <>
    <Router>
    <Navbar/>
    <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
    <Routes>
    <Route  path="/"  element={<News setProgress={setProgress} key ="general" pageSize={10} country="in" category="general"/>}/>
    <Route  path="/business"   element={<News setProgress={setProgress} key ="business" pageSize={10} country="in" category="business"/>}/>
    <Route  path="/entertainment"  element={<News setProgress={setProgress} key ="entertainment" pageSize={10} country="in" category="entertainment"/>}/>
    <Route  path="/general"  element={<News setProgress={setProgress} key ="general" pageSize={10} country="in" category="general"/>}/>
    <Route  path="/health" element={<News setProgress={setProgress}  key ="health" pageSize={10} country="in" category="health"/>}/>
    <Route  path="/sports" element={<News setProgress={setProgress} key ="sports"  pageSize={10} country="in" category="sports"/>}/>
    <Route  path="/technology"  element={<News  setProgress={setProgress}key ="technology" pageSize={10} country="in" category="technology"/>}/>
    <Route  path="/science"  element={<News setProgress={setProgress} key ="science" pageSize={10} country="in" category="science"/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
