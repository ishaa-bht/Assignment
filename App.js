
import './App.css';
import React from 'react';
import Headerr from './Headerr';
import Sidenav from './Sidenav';
import MainContent from './MainContent';
import Footer from './Footer';




function App() {
  return (
    <div className="App">
      {/* <Main/> */}
      {/* <ClassParent/> */}
      {/* <myData/> */}
      {/* <Mycomponent/> */}
      <Headerr/>
      <Footer/>
      <MainContent/>
      <Sidenav/>

    </div>
  );
}

export default App;
