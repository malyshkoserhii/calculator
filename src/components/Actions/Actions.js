import { useState } from 'react';
const actions = ['+', '-', '/', '*', '.', '='];

const Actions = () => {
  const [action, setActions] = useState(null);

  const getAction = action => {
    setActions(action);
  };
  console.log(action);

  return actions.map((action, id) => (
    <button
      key={id}
      type="button"
      className="figure-btn"
      onClick={() => getAction(action)}
    >
      {action}
    </button>
  ));
};

export default Actions;
