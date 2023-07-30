import { useState } from 'react';
import FadeLoader from 'react-spinners/FadeLoader';

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

export const Spinner = () => {
  let [loading] = useState(true);
  let [color] = useState('#8d7272');

  return (
    <div className="sweet-loading">
      <FadeLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={25}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
