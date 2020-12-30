import React, { Component } from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import apiCaller from './../utils/apiCaller';
export default class Skills extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }
  componentDidMount() {
    apiCaller('skills', 'GET', null).then(response => {
      this.setState({ items: response.data })
    })
  }
  render() {
    var items = this.state.items;
    return (
      <div className="card" style={{margin: "0 auto"}}>
        <section className="">
          <Navbar />
          <div className="">
            <div className="row">
              <div className="col s4">
                <Profile />
              </div>
              <div className="col s8">
                <div className="">
                  <div className="card-content">
                    <h6 className="mt-button">
                      <strong>PROFESSION SKILLS</strong>
                    </h6>
                    <div className="row mt-top">
                      {items.map(item => (
                        <div className="col s6" key={item.id}>
                          <p>{item.skills}</p>
                          <div className="progress grey lighten-1">
                            <div className="determinate pink lighten-3" style={{ width: item.completed }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    );
  }
}
