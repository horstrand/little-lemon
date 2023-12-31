import React from 'react';
import './Button.css';

function Button(props) {
  return (
    <button className="custom-btn" onClick={props.onClick} style={{
        padding: props.padding ?? "5px 15px",
        margin: props.margin ?? "5px 5px",
    }}>{props.title}</button>
  )
}

export default Button