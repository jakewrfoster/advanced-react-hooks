// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

/**
 * Counter Reducer. Increments the count.
 * @param previousCount
 * @param changeBy
 * @returns {*}
 */
const counterReducer = (previousCount, changeBy) => {
  return previousCount + changeBy;
}

function Counter({initialCount = 0, step = 1}) {
  const [count, changeCount] = React.useReducer(counterReducer, initialCount);
  const increment = () => changeCount(step);
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
