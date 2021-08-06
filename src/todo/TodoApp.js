import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './assets/css/style.css';
import Footer from './components/Footer';
import { Redirect } from 'react-router-dom';
import api from '../api/server';
import CardsTodo from './cardsTodo/CardsTodo';

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: '',
      date: '',
      time: '',
      image: '',
      dataUser: [],
    };
  }

  handlerSubmit = (e) => {
    e.preventDefault();
    const id = localStorage.getItem('idUser');
    api
      .post('todo/' + id, this.state)
      .then((res) => {
        this.setState({
          activities: res.data.activities,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    const id = localStorage.getItem('idUser');

    api.get('/todo/' + id).then((res) => {
      this.setState({
        image: res.data.image,
        dataUser: res.data.activities,
      });
      console.log(this.state);
    });
  }

  componentDidUpdate() {
    const id = localStorage.getItem('idUser');

    api.get('/todo/' + id).then((res) => {
      this.setState({
        image: res.data.image,
        dataUser: res.data.activities,
      });
    });
  }

  render() {
    const token = localStorage.getItem('token');
    if (!token) {
      return <Redirect to="/login" />;
    }

    const cardsTodo = this.state.dataUser.map((data) => {
      return <CardsTodo todo={data} />;
    });

    return (
      <>
        <title>Todo App</title>
        <Navbar image={this.state.image} />
        <main>
          <div class="container">
            <div class="results">
              <div class="box">
                <h2>Your Activity Today</h2>
                {cardsTodo}
              </div>
            </div>
            <div class="input-todo">
              <div class="box">
                <h2>Enter your activity here</h2>
                <form onSubmit={this.handlerSubmit}>
                  <input
                    type="text"
                    name="activity"
                    placeholder="Playing Mobile Legend ..."
                    id="activities"
                    required
                    onChange={(e) => {
                      this.setState({ activity: e.target.value });
                    }}
                  />
                  <br />
                  <input
                    type="date"
                    name="date"
                    id="date"
                    required
                    onChange={(e) => {
                      this.setState({ date: e.target.value });
                    }}
                  />
                  <br />
                  <input
                    type="time"
                    name="time"
                    id="date"
                    required
                    onChange={(e) => {
                      this.setState({ date: e.target.value });
                    }}
                  />
                  <br />
                  <button type="submit">ADD ACTIVITY</button>
                </form>
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
