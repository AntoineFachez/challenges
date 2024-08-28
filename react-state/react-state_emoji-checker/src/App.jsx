import { useState } from 'react';
import './App.css';

export default function App() {
  const [reset, setReset] = useState(false);
  const [code, setCode] = useState('');

  const validCode = '🐡🐠🐋';

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            setCode(code + '🐡');
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            setCode(code + '🐠');
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            setCode(code + '🐋');
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{' '}
      </div>

      <button
        type="button"
        onClick={() => {
          setReset(!reset);
          setCode('');
        }}
      >
        {reset ? 'Reset' : 'Reset'}
      </button>
      <h2>{code}</h2>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
