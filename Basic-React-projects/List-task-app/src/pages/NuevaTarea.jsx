import React from 'react';
import TareaForm from '../components/TareaForm';

const Nueva_tarea = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Nueva Tarea</h1>
      <TareaForm/>
    </div>
  );
};

export default Nueva_tarea;