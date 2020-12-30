import React, { Component } from "react";
import Navbar from './Navbar';
import Profile from './Profile';
export default class Contact extends Component {
  
  render() {
    return (
    <div className="card" style={{margin: '0 auto'}}>
             <section>
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
                    <strong>CONTACT</strong>
                  </h6>
                  <table className="striped">
                    <thead>
                      <tr>
                        <th>Mail ID</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>kimthanh99153@gmail.com</td>
                        <td>
                          <a
                            target="blank"
                            href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=CllgCKCJDtpDcPnpczfvVmVppCXvjsMKvbzZqqvmFLPJMsXwdJPQcNcMXVqgMRGhcvrCGMqtjWL"
                            className="btn pink lighten-2 "
                          >
                            Click to send mail
                          </a>
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
