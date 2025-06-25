import React, { useState } from 'react';

function Card({ todo }) {
  const [isCompleted, setIsCompleted] = useState(todo.completed);

  const handleCompleteToggle = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <a
      key={todo.id}
      href="#"
      className="block max-w-sm p-6 border border-gray-600 rounded-lg shadow hover:bg-gray-700 relative"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight">
        {todo.title}
      </h5>
      <p className="font-normal">
        {isCompleted ? 'Completado' : 'Incompleto'}
      </p>
      <br />
      <button 
        onClick={handleCompleteToggle}
        type="button" 
        class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        {isCompleted ? 'Incompleto' : 'Completado'}
      </button>
      <p
        className="font-normal text-xs absolute bottom-2 right-2 text-gray-600"
      >
        UserID: {todo.userId}
      </p>
    </a>
  );
}

export default Card;

