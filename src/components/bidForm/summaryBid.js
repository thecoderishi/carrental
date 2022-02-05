import React from 'react';

export default function SummaryBid({ formik, handleNextStep, handleJumpStep }) {
  const { values, handleChange, errors, handleBlur, touched } = formik
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

    <button >Submit Bid</button>
  </div>;
}
