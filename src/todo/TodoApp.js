import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './assets/css/style.css';
import Footer from './components/Footer';
import { Redirect } from 'react-router-dom';
import api from '../api/server';
import CardsTodo from './cardsTodo/CardsTodo';
import CardsComplete from './cardsTodo/CardsComplete';

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

  handlerLogout = () => {
    if (window.confirm('Are You Sure ?')) {
      localStorage.clear();
    }
  };

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
    e.target.reset();
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
    const idUser = localStorage.getItem('idUser');
    if (!token || !idUser) {
      return <Redirect to="/login" />;
    }

    const cardsTodo = this.state.dataUser.map((data) => {
      return <CardsTodo todo={data} />;
    });
    const cardsComplete = this.state.dataUser.map((data, index) => {
      return <CardsComplete todo={data} index={index} />;
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
                    placeholder="Ngoding Santuyy ..."
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
                      this.setState({ time: e.target.value });
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
                {cardsComplete}
              </div>
            </div>
          </div>
        </main>
        <div className="d-flex justify-content-center m-2">
          <button className="btn btn-primary" onClick={this.handlerLogout}>
            Logout ?
          </button>
        </div>
        <Footer />
      </>
    );
  }
}
