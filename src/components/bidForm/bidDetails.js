import React, { useState } from 'react';

export default function BidDetails({ formik, handleNextStep, handleJumpStep }) {
  const { values, handleChange, errors, handleBlur, touched } = formik

  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  return <div>
    <p>JOURNY DETAILS</p>
    <h6>{values.source} - {values.destination}</h6>
    <h6>{values.numOfTravellers} persons, {values.carType}</h6>

    <button onClick={() => handleJumpStep(0)} >edit journy</button>

    <input
      type="number"
      id='bidPrice'
      name='bidPrice'
      placeholder='0'
      value={values.bidPrice}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    {(errors.bidPrice && touched.bidPrice) ? <p>{errors.bidPrice}</p> : null}

    <input
      type="checkbox"
      id="isNegotiable"
      name="isNegotiable"
      value={values.isNegotiable}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    <label for="vehicle1"> Rate Negotiable</label><br />
    {!isDetailsVisible && <button disabled={values.bidPrice === ''} onClick={() => setIsDetailsVisible(true)} >Next</button>}

    {isDetailsVisible && <> <input
      type="number"
      id='customerPhoneNumber'
      name='customerPhoneNumber'
      placeholder='9876543210'
      value={values.customerPhoneNumber}
      onChange={handleChange}
      onBlur={handleBlur}
    />
      {(errors.customerPhoneNumber && touched.customerPhoneNumber) ? <p>{errors.customerPhoneNumber}</p> : null}

      <input
        type="checkbox"
        id="getWhatsappUpdate"
        name="getWhatsappUpdate"
        value={values.getWhatsappUpdate}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <label for="vehicle1">Get update on Whatsapp</label><br />

      <input
        type="text"
        id='customerName'
        name='customerName'
        placeholder='name'
        value={values.customerName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {(errors.customerName && touched.customerName) ? <p>{errors.customerName}</p> : null}

      <input
        type="text"
        id='remarks'
        name='remarks'
        placeholder='remark'
        value={values.remarks}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button onClick={handleNextStep} >Verify via otp</button>
    </>
    }
  </div>;
}
