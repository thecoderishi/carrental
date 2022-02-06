import React, { useState } from 'react';
import CustomInputField from '../UI/customInputField/customInputField';
import CustomButton from '../UI/customButton/customButton';
export default function BidDetails({ formik, handleNextStep, handleJumpStep }) {
  const { values, handleChange, errors, handleBlur, touched } = formik

  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  return <div>
    <div className='details-wrapper'>
      <div >
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

    <div className='bid-container'>
      <div className='bid-price-container'>
        <p className='ruppe-symbol'>₹</p>
        <input
          onkeypress="this.style.width = ((this.value.length + 1) * 8) + 'px';"
          className='bid-price'
          type="text"
          id='bidPrice'
          name='bidPrice'
          placeholder='0'
          value={values.bidPrice}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <div className='negotiable'>
        <input
          type="checkbox"
          id="isNegotiable"
          name="isNegotiable"
          value={values.isNegotiable}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label for="vehicle1"> Rate Negotiable</label>
      </div>
    </div>
    {!isDetailsVisible && <CustomButton disabled={values.bidPrice === ''} onClick={() => setIsDetailsVisible(true)} >Next</CustomButton>}

    {isDetailsVisible && <>
      <CustomInputField
        type="text"
        id='customerPhoneNumber'
        name='customerPhoneNumber'
        label='Enter your 10 digit mobile number'
        placeholder=' '
        size='large'
        helperText={(errors.customerPhoneNumber && touched.customerPhoneNumber) && errors.customerPhoneNumber}
        value={values.customerPhoneNumber}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <div className='whatsapp-update-container'>
        <input
          type="checkbox"
          id="getWhatsappUpdate"
          name="getWhatsappUpdate"
          value={values.getWhatsappUpdate}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label className='whatsapp-label' for="getWhatsappUpdate">Get update on <span className='whatsapp-green'><i class="fab fa-whatsapp"></i> Whatsapp</span></label>
      </div>

      <CustomInputField
        type="text"
        id='customerName'
        name='customerName'
        label='Enter your name'
        placeholder=' '
        size='large'
        helperText={(errors.customerName && touched.customerName) && errors.customerName}
        value={values.customerName}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <CustomInputField
        type="text"
        id='remarks'
        name='remarks'
        label='Enter Remarks(optional)'
        placeholder=' '
        size='large'
        value={values.remarks}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <CustomButton
        onClick={handleNextStep}
        disabled={
          (values.customerPhoneNumber === '' || values.customerName === '' || values.bidPrice === '') ||
          (errors.customerPhoneNumber || errors.customerName || errors.bidPrice)
        }
      >Verify via otp</CustomButton>
    </>
    }
  </div>;
}
