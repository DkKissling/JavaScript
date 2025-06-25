import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'; // Asegúrate de importar el store correctamente
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

