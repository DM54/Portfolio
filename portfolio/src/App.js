import React from 'react';
import './App.css';
import './styles/styles.css'
import Header from './components/Header';
import About from './pages/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Contact from './pages/Contact';
import Footer from './components/footer';
import Work from './pages/Work';

function App() {
  return (

      <div className="container ">
        <Router>
        {/*This is where it can be share with all paths, the same content in each page. */}
            <Footer></Footer>
          <Switch>
          <Header></Header>
            {/**the exact is for the path so, to match only the path that has the empty slash. so don't need to change the order of the paths
             * and each page will be unquie path.
             */}
            <Route path='/' exact>
           {/*} <Resources></Resources>*/}
            </Route>
            <Route path='/resources/new'>
            {/* <ResourceNew></ResourceNew>*/}
            </Route>
            {/*:id is to show in all path ids the same info. Also it will help resourcedetails params to identify which id we are refering to. */}
            <Route path='/resources/:id'>
            {/*  <ResourceDetails></ResourceDetails> */}
            </Route>
            <Route path='/work'>
            <Work></Work>
            </Route>

            <Route path='/about'>
            <About></About>
            </Route>
            <Route path='/contact'>
            <Contact></Contact>
            </Route>
          </Switch>
        </Router>

       </div>

  );
}

export default App;
