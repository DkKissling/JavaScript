import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login({ user, login, loggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  if (loggedIn) {
    navigate('/');
  }

  const handleLogin = () => {
    if (username === user.username && password === user.password) {
      login();
      navigate('/');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" p-8 rounded shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Iniciar Sesión</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded p-2 text-black	"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded p-2 text-black	"
          />
        </div>
        <button
          onClick={handleLogin}
          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"        >
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
}

export default Login;
