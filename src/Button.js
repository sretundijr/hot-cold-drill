
import React from 'react';

export default function Button(props) {
  return (
    <div>
      <button type={props.type} onClick={props.onClick} >{props.value}</button>
    </div>
  );
}