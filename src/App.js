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
const memoryType = {
  plus: 'M+',
  minus: 'M-',
  memoryResult: 'MR',
};

const actions = Object.values(actionType);
const memoryActions = Object.values(memoryType);

function App() {
  const [figure, setFigure] = useState('');
  const [action, setActions] = useState('');
  const [result, setResult] = useState(0);
  const [memoryResult, setMemoryResult] = useState(0);
  const [disaplayMemory, setDisplayMemory] = useState(false);

  let number = Number(figure);

  const event = () => {
    switch (action) {
      case actionType.plus:
        setResult(state => state + number);
        break;
      case actionType.minus:
        setResult(state => state - number);
        break;
      case actionType.multiplication:
        setResult(state => state * number);
        break;
      case actionType.division:
        setResult(state => state / number);
        break;
      case actionType.equal:
        console.log('result after =', result);
        return result;
      default:
        return;
    }

    setFigure('');
  };

  const onMemoryEvent = memoryAction => {
    let memRes = memoryResult;

    switch (memoryAction) {
      case memoryType.plus:
        memRes += result;
        onClear();
        break;

      case memoryType.minus:
        memRes -= result;
        onClear();
        break;

      case memoryType.memoryResult:
        setResult(memoryResult);
        break;

      default:
        return;
    }

    setMemoryResult(memRes);
    setDisplayMemory(true);
  };

  const onMemoryClear = () => {
    setDisplayMemory(false);
    setMemoryResult(0);
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
    setResult(0);
    setFigure('');
    setActions('');
  };

  return (
    <div className="container">
      <div className="table">
        <p className="memory">{disaplayMemory && <span>MEMORY</span>}</p>
        <p className="result">M {memoryResult}</p>
        <p className="result">R {figure || result || 0}</p>
      </div>
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
        <div className="actions-wrapper">
          {memoryActions.map((m, id) => (
            <button
              key={id}
              type="button"
              className="figure-btn"
              onClick={() => onMemoryEvent(m)}
            >
              {m}
            </button>
          ))}
          <button
            type="button"
            className="memory-clear"
            onClick={() => onMemoryClear()}
          >
            MC
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
