import React from 'react';
import CustomButton from '../UI/customButton/customButton';

export default function SummaryBid({ formik, handleNextStep, handleJumpStep }) {
  const { values, handleChange, errors, handleBlur, touched } = formik
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
        <p className='text2'> +91-{values.customerPhoneNumber}</p>
        <p className='text2'>{values.customerName} </p>
        <p className='text2'>{values.remarks} </p>
      </div>

      <div>
        <p className='text3'>{values.bidPrice} </p>
        <p className='text1'>{!values.isNegotiable && 'Fixed price'} </p>
      </div>
    </div>

    <div className='divider'></div>

    <CustomButton>Submit Bid</CustomButton>
  </div>;
}
