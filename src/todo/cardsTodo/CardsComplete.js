import React from 'react';
import api from '../../api/server';

const CardsComplete = ({ todo, index }) => {
  if (todo.complete === '') {
    return <div></div>;
  }
  const deleteTodoActivity = () => {
    const idUser = localStorage.getItem('idUser');
    api
      .delete(`/todo/delete/${idUser}`, { indexUserActivity: index })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div class={`activity`}>
        <div class="learning-done d-flex justify-content-lg-between">
          <p class="m-0">{todo.activity}</p>
          <i class="fas fa-trash-alt" onClick={deleteTodoActivity}></i>
        </div>
        <div class="schedule-edit d-flex justify-content-lg-between mt-1">
          <p class="m-0">{todo.complete}</p>
        </div>
      </div>
    </>
  );
};

export default CardsComplete;
