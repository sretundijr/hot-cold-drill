
import React from 'react';

const sendInputAndRandom = require('./determineWin');

export default function differenceFeedback(props) {
  const userInput = parseInt(props.guessInfo);
  let hint = '';
  if (userInput !== undefined) {
    hint = sendInputAndRandom(userInput, props.random);
  } else {
    hint = 'Are you ready?';
  }

  console.log(props.random);

  return (
    <p>{hint}</p>
  );
};