import React from 'react';
import Login from './Login';
import Tareas from '../components/Tareas';


function Home({ loggedIn, user, login }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {loggedIn ? (
        <div>
          <h1 className="text-4xl font-bold mb-4">Tus Tareas</h1>
          <Tareas />
        </div>
      ) : (
        <div className="text-center">
          <Login user={user} login={login}/>
        </div>
      )}
    </div>
  );
}

export default Home;
