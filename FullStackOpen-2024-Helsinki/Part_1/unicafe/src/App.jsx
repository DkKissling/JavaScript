import React, { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  const sum = good + neutral + bad;
  const average = sum === 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / sum;
  const positive = sum === 0 ? '0 %' : `${(good / sum) * 100} %`;

  return (
    <div>
      <h1>Da tu feedback</h1>
      <button onClick={handleGoodClick}>bueno</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>malo</button>

      <h1>Estadísticas</h1>
      {sum === 0 ? (
        <p>No se han dado comentarios</p>
      ) : (
        <table>
          <tbody>
            <tr>
              <td>bueno</td>
              <td>{good}</td>
            </tr>
            <tr>
              <td>neutral</td>
              <td>{neutral}</td>
            </tr>
            <tr>
              <td>malo</td>
              <td>{bad}</td>
            </tr>
            <tr>
              <td>total</td>
              <td>{sum}</td>
            </tr>
            <tr>
              <td>promedio</td>
              <td>{average}</td>
            </tr>
            <tr>
              <td>positivo</td>
              <td>{positive}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;

