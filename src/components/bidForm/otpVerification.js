import React, { useEffect } from 'react';

export default function OTPVerification({ formik, handleNextStep, handleJumpStep }) {
  const { values, handleChange, errors, handleBlur, touched } = formik

  useEffect(() => {
    if (values.otp.toString().length === 4 && values.otp.toString() === '1234') {
      handleNextStep()
    }
  }, [values.otp]);


  return <div>

    <p>JOURNY DETAILS</p>
    <h6>{values.source} - {values.destination}</h6>
    <h6>{values.numOfTravellers} persons, {values.carType}</h6>
    <button onClick={() => handleJumpStep(0)} >edit journy</button>
    <br />

    <p>JOURNY DETAILS</p>
    <h6>{values.customerPhoneNumber}</h6>
    <h6>{values.customerName} </h6>
    <h6>{values.remarks} </h6>
    <h5>{values.bidPrice} </h5>
    <p>{!values.isNegotiable && 'Fixed price'} </p>

    <br />
    <br />
    <p>{values.customerPhoneNumber} </p>
    <button onClick={() => handleJumpStep(1)} >edit bid details</button>

    <input
      type="number"
      id='otp'
      name='otp'
      placeholder='0'
      value={values.otp}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    {(values.otp.toString().length === 4 && values.otp.toString() !== '1234') ? <p>invalid otp</p> : null}
    {console.log(values.otp.toString().length)}
    <button disabled={values.otp.toString().length < 4} onClick={handleNextStep} >Verify via otp</button>
  </div>;
}
