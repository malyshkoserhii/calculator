import { useState } from 'react';
// import Figures from './components/Figures/Figures';
// import Actions from './components/Actions/Actions';

const figures = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const actionType = {
  plus: '+',
  minus: '-',
  multiplication: '*',
  division: '/',
  equal: '=',
};

const actions = Object.values(actionType);

function App() {
  const [figure, setFigure] = useState('');
  const [action, setActions] = useState('');
  const [result, setResult] = useState(0);

  const number = Number(figure);

  const event = () => {
    let res = result;

    switch (action) {
      case actionType.plus:
        res = result + number;
        break;
      case actionType.minus:
        res = result - number;
        break;
      case actionType.multiplication:
        res = result * number;
        break;
      case actionType.division:
        res = result / number;
        break;
      default:
        return;
    }
    setResult(res);
    setFigure('');
  };

  const getFigure = figure => {
    setFigure(state => {
      if (state === '' && figure === '0') {
        return state;
      }

      return state.concat(figure);
    });
  };

  const getAction = a => {
    if (action) {
      event();
    } else {
      setResult(number);
      setFigure('');
    }

    setActions(a);
  };

  const onClear = () => {
    setResult('');
    setFigure('');
    setActions('');
  };

  return (
    <div className="container">
      <p className="table">{figure || result || 0}</p>
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
          {actions.map((a, id) => (
            <button
              key={id}
              type="button"
              className="figure-btn"
              onClick={() => getAction(a)}
            >
              {a}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
