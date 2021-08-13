import React from 'react';
import api from '../../api/server';
import swal from 'sweetalert';

const CardsComplete = ({ todo, index }) => {
  if (todo.complete === '') {
    return <div></div>;
  }
  const deleteTodoActivity = () => {
    const idUser = localStorage.getItem('idUser');
    swal({
      title: 'Are you sure?',
      buttons: true,
    }).then((willDelete) => {
      if (willDelete) {
        api
          .delete(`/todo/delete/${idUser}`, { indexUserActivity: index })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        swal('your activity has been deleted');
      } else {
        swal('history activity is save');
      }
    });
  };

  return (
    <>
      <div class="activity mb-2">
        <div class="learning-done d-flex justify-content-between">
          <p class="m-0">{todo.activity}</p>
          <i class="fas fa-trash-alt" onClick={deleteTodoActivity}></i>
        </div>
        <div class="schedule-edit d-flex justify-content-between mt-1">
          <p class="m-0">{todo.complete}</p>
        </div>
      </div>
    </>
  );
};

export default CardsComplete;
