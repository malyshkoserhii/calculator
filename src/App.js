import { useState } from 'react';
// import Figures from './components/Figures/Figures';
// import Actions from './components/Actions/Actions';

const figures = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const actions = ['+', '-', '/', '*', '.', '='];
const actionType = {
  plus: '+',
  minus: '-',
  multiplication: '*',
  division: '/',
  equal: '=',
};

function App() {
  const [initialValue, setInitialValue] = useState(true);
  const [figure, setFigure] = useState('');
  const [action, setActions] = useState('');

  const getFigure = figure => {
    setFigure(state => state.concat(figure));
    setInitialValue(false);
  };

  const getAction = action => {
    setActions(action);
  };

  const onClear = () => {
    setInitialValue(true);
  };

  return (
    <div className="container">
      <p className="table">{initialValue ? '0' : figure}</p>
      <div className="flex">
        <div className="figures-wrapper">
          {figures.map((figure, id) => (
            <button
              key={id}
              type="button"
              className="figure-btn"
              onClick={() => getFigure(figure)}
            >
              {figure}
            </button>
          ))}
          <button type="button" className="figure-btn" onClick={onClear}>
            C
          </button>
        </div>
        <div className="actions-wrapper">
          {actions.map((action, id) => (
            <button
              key={id}
              type="button"
              className="figure-btn"
              onClick={() => getAction(action)}
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
