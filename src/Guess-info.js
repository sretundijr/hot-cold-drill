
import React from 'react';
import './Guess-info.css'

export default function GuessInfo(props) {
  return (
    <h3 className='inline'> {props.guessInfo}</h3>
  );
}