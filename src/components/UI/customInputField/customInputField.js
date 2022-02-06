import React from 'react';
import '../../../styles/sass/customInputField.scss'
export default function CustomInputField(props) {
  return (
    <div className={`input-container input-container-${props.size} input-container-${props.helperText && 'helper'}`}>
      <input className="input" {...props} />
      <span className={`label label-${props.helperText && 'helper'}`}>{props.label}</span>
      <p className='helper-text'>{props.helperText}</p>
    </div>
  );
}
