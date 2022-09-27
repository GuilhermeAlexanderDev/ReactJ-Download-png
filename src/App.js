import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './style.css';

export default function App() {
  const [inputText, setInputText] = useState('StackBlitz!');

  return (
    <div className="center">
      <br />
      <h1>{'Hello, ' + inputText}</h1>
      <br />

      <h2>You Name Is?</h2>

      <br />

      <input
        className="inputName"
        type="text"
        placeholder="Name"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <br />

      <button onClick={() => alert(inputText)}>Checked</button>
      <br />

      <label>
        <FontAwesomeIcon icon={faInstagram} />
        <i> Guilhermealexander_dev</i>
        <br />
        <FontAwesomeIcon icon={faGithub} />
        <i> Guilhermealexander_dev</i>
      </label>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
