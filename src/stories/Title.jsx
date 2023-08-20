import { useState } from 'react';
import PropTypes from 'prop-types';
export const Title = ({ text }) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{text} + {count}</h1>
      <button onClick={() => setCount(count + 1)}>Inc</button>
    </>
  )
};

Title.propTypes = {
  text: PropTypes.string.isRequired
}


Title.defaultProps = {
  text: 'Bienvenidos'
}
