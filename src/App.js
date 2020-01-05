import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/navbar/Navbar';
import Instructions from './components/instructions/Instructions';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Instructions />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
