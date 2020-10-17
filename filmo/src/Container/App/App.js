import React from 'react';

//Components
import FilmoBuilder from '../FilmoBuilder/FilmoBuilder';
import NavBar from '../../Component/Navigation/NavBar/NavBar';
import Banner from '../../Component/Banner/Banner';
import Footer from '../../Component/Navigation/Footer/Footer'
// CSS
import './App.css';

const App = () => {
  return (
    <div className="App">
     <Banner />
     <NavBar />
     {FilmoBuilder}
     <Footer />
    </div>
  );
}

export default App;
