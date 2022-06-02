import { h } from 'preact';
import { useState } from 'preact/hooks'

const State = () => {
  const [state, setState] = useState(0);
  return <button onClick={() => setState(state => state +1)}></button>
}

export default State;
