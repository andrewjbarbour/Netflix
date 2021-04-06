import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import FrontCarousel from './components/FrontCarousel';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Api from './components/Api';


class App extends React.Component {
  constructor(props){
    super(props); 
  }
  
  render(){
    return (  
      <div className="App">
         <header>  
          <Navbar />
        </header>
        <main id="Main" >
            <Hero />
            <FrontCarousel />   
        </main>
        <footer>
            <Footer />
        </footer>
      </div>
    );
  }
}

export default App;