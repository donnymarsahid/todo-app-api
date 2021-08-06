import React from 'react';

const CardsTodo = ({ todo }) => {
  return (
    <>
      <div class="activity mb-2 ">
        <div class="learning-done d-flex justify-content-lg-between">
          <p class="m-0">{todo.activity}</p>
          <button>DONE</button>
        </div>
        <div class="schedule-edit d-flex justify-content-lg-between mt-1">
          <p class="m-0">
            schedule at {todo.date} {todo.time}
          </p>
          <i class="fas fa-edit"></i>
        </div>
      </div>
    </>
  );
};

export default CardsTodo;
