import React from 'react';
import '../../../styles/sass/customButton.scss'
export default function CustomButton(props) {
  return (
    <>
      <button className={`button button-${props.variant}`} {...props} ></button>
    </>
  );
}
