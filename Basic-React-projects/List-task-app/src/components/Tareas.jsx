import React, { useState, useEffect } from 'react';
import Card from './Card';

function Tareas() {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${perPage}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          return;
        }
        setTodos(data);
      });
  }, [page, perPage]);
  return (
    <div>
      <h1 className="text-2xl font-bold">Lista de Tareas</h1>
      <div className="mb-4">
        <select
          className="selector rounded-md border border-gray-200 p-2"
          onChange={(e) => setPerPage(e.target.value)}
        >
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {todos.map((todo) => (
          <Card key={todo.id} todo={todo} />
        ))}
      </div>
      <div className="mt-4">
        <button
        type="button" 
        class="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
        onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Página Anterior
        </button>
        <span className="text-xl font-semibold">{page}</span>
        <button
        type="button" 
        class="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
        onClick={() => setPage(page + 1)}
        >
          Siguiente Página
        </button>
      </div>
    </div>
  );
}

export default Tareas;
