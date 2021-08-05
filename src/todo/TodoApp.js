import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './assets/css/style.css';
import Footer from './components/Footer';

export default class TodoApp extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);
  }

  render() {
    return (
      <>
        <title>Todo App</title>
        <Navbar image={this.props.dataUser.image} />
        <main>
          <div class="container">
            <div class="results">
              <div class="box">
                <h2>Your Activity Today</h2>
                <div class="activity">
                  <div class="learning-done d-flex justify-content-lg-between">
                    <p class="m-0">Learning</p>
                    <button>DONE</button>
                  </div>
                  <div class="schedule-edit d-flex justify-content-lg-between mt-1">
                    <p class="m-0">schedule at 15:00 AM</p>
                    <i class="fas fa-edit"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="input-todo">
              <div class="box">
                <h2>Enter your activity here</h2>
                <input type="text" placeholder="Playing Mobile Legend ..." id="activities" />
                <br />
                <input type="date" name="date" id="date" />
                <br />
                <button>ADD ACTIVITY</button>
              </div>
            </div>
            <div class="history">
              <div class="box">
                <h2>History Complete</h2>
                <div class="activity">
                  <div class="learning-done d-flex justify-content-lg-between">
                    <p class="m-0">Learning</p>
                    <i class="fas fa-trash-alt"></i>
                  </div>
                  <div class="schedule-edit d-flex justify-content-lg-between mt-1">
                    <p class="m-0">Done ! at 15:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}
