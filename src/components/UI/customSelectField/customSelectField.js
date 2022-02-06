import React from 'react';
import '../../../styles/sass/customInputField.scss'
export default function CustomSelectField(props) {
  return (
    <div className={`input-container input-container-${props.size} input-container-${props.helperText && 'helper'}`}>
      <select className="input" {...props} ></select>
      <p className='helper-text'>{props.helperText}</p>
    </div>
  );
}
