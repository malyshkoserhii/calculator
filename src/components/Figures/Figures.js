import { useState } from 'react';

const figures = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const Figures = () => {
  const [figure, setFigure] = useState(0);

  const getFigure = figure => {
    setFigure(figure);
  };

  console.log(figure);

  return figures.map((figure, id) => (
    <button
      key={id}
      type="button"
      className="figure-btn"
      onClick={() => getFigure(figure)}
    >
      {figure}
    </button>
  ));
};

export default Figures;
