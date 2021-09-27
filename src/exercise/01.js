// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

/**
 * Counter Reducer. Increments the count.
 * @param state
 * @param action
 * @returns {*}
 */
const counterReducer = (state, action) => {
  return {...state, ...action};
}

function Counter({initialCount = 0, step = 1}) {
  const [state, setState] = React.useReducer(counterReducer, {
    count: initialCount,
  });
  const {count} = state;
  const increment = () => setState({count: count + step});
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
