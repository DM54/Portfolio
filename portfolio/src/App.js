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
import Home from './pages/Home';


export default function App() {

  return (

      <div className="container ">
        <Router>
        {/*This is where it can be share with all paths, the same content in each page. */}
            <Footer></Footer>

          <Switch>

            {/**the exact is for the path so, to match only the path that has the empty slash. so don't need to change the order of the paths
             * and each page will be unquie path.
             */}

             <Route path='/' exact component={Home}></Route>

            <Route path='/work' component={Work}>

            </Route>

            <Route path='/about' component={About}>

            </Route>
            <Route path='/contact' component={Contact}>

            </Route>
          </Switch>
        </Router>

       </div>

  );

}

