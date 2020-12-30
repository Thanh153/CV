import React, { Component } from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
export default class Educations extends Component {
  render() {
    return (
      <div className='card' style={{ margin: '0 auto' }}>
        <section>
          <Navbar />
          <div className="">
            <div className="row">
              <div className="col s4">
                <Profile />
              </div>
              <div className="col s8">
                <div className=''>
                  <div className="card-content">
                    <h6 className="mt-button">
                      <strong>EDUCATIONS</strong>
                    </h6>
                    <table className="striped">
                      <thead>
                        <tr>
                          <th>Certificate</th>
                          <th>Date</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Danang University - University of Education</td>
                          <td>2017 - Present</td>
                          <td>
                            <a href="https://ued.udn.vn/" target="blank" className="btn pink lighten-2 ">View</a>
                          </td>
                        </tr>
                        <tr>
                          <td>Athena English Center</td>
                          <td>2018 - 2019</td>
                          <td>
                            <a href="https://anhnguathena.vn/" target="blank" className="btn pink lighten-2 ">View</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
