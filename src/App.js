import { useState } from 'react';
// import Figures from './components/Figures/Figures';
// import Actions from './components/Actions/Actions';

const figures = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
// const actions = ['+', '-', '/', '*', '.', '='];
const actionType = {
  plus: '+',
  minus: '-',
  multiplication: '*',
  division: '/',
  equal: '=',
};

const actions = Object.values(actionType);

function App() {
  const [initialValue, setInitialValue] = useState(true);
  const [figure, setFigure] = useState('');
  const [prevValue, setPrevValue] = useState('');
  const [action, setActions] = useState('');
  const [result, setResult] = useState(0);

  const number = Number(figure);

  const event = () => {
    if (action === actionType.plus || action === actionType.equal) {
      setPrevValue(number);
      setFigure('');
      setResult(prevValue + number);
      setActions('');
      setPrevValue(state => state + Number(result));
    }

    // if (action === actionType.minus || action === actionType.equal) {
    //   setPrevValue(number);
    //   setFigure('');
    //   setResult(prevValue - number);
    //   setActions('');
    //   setPrevValue(state => state - Number(result));
    // }

    console.log('prevValue: ', prevValue);
    console.log('result: ', Number(result));
  };

  event();

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
      <p className="table">{initialValue ? '0' : figure || result}</p>
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
