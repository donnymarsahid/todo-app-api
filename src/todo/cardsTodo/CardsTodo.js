import React, { Fragment, useState } from 'react';
import api from '../../api/server';
import moment from 'moment';
import swal from 'sweetalert';

const CardsTodo = ({ todo }) => {
  const [editActivity, setEditActivity] = useState('');
  const [editDate, setEditDate] = useState('');
  const [editTime, setEditTime] = useState('');

  const [statusUpdate, setStatusUpdate] = useState('');

  const handlerDone = () => {
    swal({
      title: 'Good job! activity completed',
      text: 'check activity history',
      icon: 'success',
      button: 'Okrayy',
    });
    const id = localStorage.getItem('idUser');

    api
      .put('todo/complete/' + id, { activity: todo.activity })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (todo.complete !== '') {
    return <div></div>;
  }

  const handlerUpdateTodo = (e) => {
    e.preventDefault();
    const id = localStorage.getItem('idUser');
    api
      .put('/todo/update/' + id, {
        idUserActivity: todo.id,
        activityUser: editActivity,
        date: editDate,
        time: editTime,
      })
      .then((res) => {
        setStatusUpdate(res.data.message);
        setTimeout(() => {
          setStatusUpdate('');
        }, 10000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const dateTodo = moment(todo.date).format('ll');
  return (
    <>
      <Fragment>
        <div class="activity mb-2 ">
          <div class="learning-done d-flex justify-content-between">
            <p class="m-0">{todo.activity}</p>
            <button onClick={handlerDone}>DONE</button>
          </div>
          <div class="schedule-edit d-flex justify-content-between mt-1">
            <p class="m-0">
              schedule at {dateTodo}, {todo.time}
            </p>
            <i class="fas fa-edit" data-bs-toggle="modal" data-bs-target={`#exampleModal${todo.id}`}></i>
          </div>
        </div>
        <div class="modal fade" id={`exampleModal${todo.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Edit Activity
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              {statusUpdate && (
                <div class="alert alert-primary d-flex" role="alert">
                  {statusUpdate}
                  <p class="text-decoration-underline" data-bs-dismiss="modal" style={{ cursor: 'pointer' }}>
                    Back
                  </p>
                </div>
              )}
              <div class="modal-body">
                <form onSubmit={handlerUpdateTodo}>
                  <input
                    type="text"
                    name="activity"
                    id="activities"
                    required
                    defaultValue={todo.activity}
                    onChange={(e) => {
                      setEditActivity(e.target.value);
                    }}
                  />
                  <br />
                  <input
                    type="date"
                    name="date"
                    id="date"
                    required
                    defaultValue={todo.date}
                    onChange={(e) => {
                      setEditDate(e.target.value);
                    }}
                  />
                  <br />
                  <input
                    type="time"
                    name="time"
                    id="date"
                    required
                    defaultValue={todo.time}
                    onChange={(e) => {
                      setEditTime(e.target.value);
                    }}
                  />
                  <br />
                  <button type="submit" id="save-change">
                    Save Change
                  </button>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </>
  );
};

export default CardsTodo;
