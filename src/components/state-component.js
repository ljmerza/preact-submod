import { h } from 'preact';
import { useState } from 'preact/hooks'

const State = () => {
  const [state, setState] = useState(0);
  return <button onClick={() => setState(state => state +1)}>{state}</button>
}

export default State;
