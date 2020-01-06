import React from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
