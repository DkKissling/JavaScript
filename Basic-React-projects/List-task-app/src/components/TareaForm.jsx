import React from 'react';

function TareaForm() {
  return (
    <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Agregar Tarea</h2>
      <div className="flex">
        <input
          type="text"
          placeholder="Ingrese el título de la tarea"
          className="flex-1 w-full p-2 rounded-l-md border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:outline-none text-gray-500"
        />
      </div>
      <br />
      <button
        className="bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 text-gray-900 font-medium rounded-r-md px-4"
      >
        Agregar
      </button>
    </div>
  );
}

export default TareaForm;
