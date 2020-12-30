import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import About from './About';
import Navbar from './Navbar';
import Profile from './Profile';
import HomePage from './homePage';

export default class Home extends Component {
  
  render() {
    return (
      <section> 
          <div className="card" style={{margin: "0 auto"}}>
                <Navbar />
                <div className="row" >
                    <div className="col s4"> 
                      <Profile />
                    </div>
                    <div className="col s8">
                      <About />
                    </div>
                    <div className="col s12">
                    <HomePage />
                    </div>
                </div>
          </div>
     </section>
    );
  }
}
