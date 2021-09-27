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
  const {type, step} = action;
  switch (type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + step
      }
    default:
      return {}
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(counterReducer, {
    count: initialCount,
  });
  const {count} = state;
  const increment = () => dispatch({type: 'INCREMENT', step});
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
