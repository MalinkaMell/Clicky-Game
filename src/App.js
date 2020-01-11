import React from 'react';
import './App.css';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

//all the good stuff is going to happen in components/body/Body.js!
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
