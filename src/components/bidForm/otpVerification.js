import React, { useEffect } from 'react';
import CustomButton from '../UI/customButton/customButton';

export default function OTPVerification({ formik, handleNextStep, handleJumpStep }) {
  const { values, handleChange, errors, handleBlur, touched } = formik

  useEffect(() => {
    if (values.otp.toString().length === 4 && values.otp.toString() === '1234') {
      handleNextStep()
      formik.setFieldValue(values.isLogedin, true, false)
    }
  }, [values.otp]);


  return <div>

    <div className='details-wrapper'>
      <div>
        <p className='text1'>JOURNY DETAILS</p>
        <p className='text2'>{values.source} - {values.destination}</p>
        <p className='text2'>{values.numOfTravellers} persons, {values.carType}</p>
      </div>
      <div>
        <i class="fas fa-pencil-alt"></i>
        <button className='edit-button' onClick={() => handleJumpStep(0)} >Edit</button>
      </div>
    </div>

    <div className='divider'></div>

    <div className='details-wrapper'>
      <div>
        <p className='text1'>JOURNY DETAILS</p>
        <p className='text2'>+91-{values.customerPhoneNumber}</p>
        <p className='text2'>{values.customerName} </p>
        <p className='text2'>{values.remarks} </p>
      </div>


      <div>
        <h5 className='text3'>{values.bidPrice} </h5>
        <p className='text1'>{!values.isNegotiable && 'Fixed price'} </p>
      </div>
    </div>

    <div className='divider'></div>

    <div className='otp-message-container'>
      <p className='text4'>
        We've sent an OTP to your mobile number, please enter it below to submit your bid
        <b> {values.customerPhoneNumber}</b>
        <i class="fas fa-pencil-alt"></i>
        <button className='edit-button' onClick={() => handleJumpStep(1)} >Edit</button>
      </p>
    </div>

    <div className='otp-container'>
      <input
        className='otp-field'
        type="text"
        id='otp'
        name='otp'
        maxlength="4"
        value={values.otp}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
    {(values.otp.toString().length === 4 && values.otp.toString() !== '1234') ? <p>invalid otp</p> : null}
    <CustomButton variant='text' >Resent otp Again</CustomButton>
    <CustomButton disabled={values.otp.toString().length < 4} onClick={handleNextStep} >Verify via otp</CustomButton>
  </div >;
}
