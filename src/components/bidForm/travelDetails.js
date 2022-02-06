import React from 'react';
import CustomInputField from '../UI/customInputField/customInputField';
import CustomSelectField from '../UI/customSelectField/customSelectField';
import CustomButton from '../UI/customButton/customButton';

export default function TravelDetails({ formik, handleNextStep }) {

  const { values, handleChange, errors, handleBlur, touched } = formik

  return <div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <CustomInputField
        type="text"
        id='source'
        name='source'
        label='source*'
        placeholder=' '
        helperText={(errors.source && touched.source) && errors.source}
        value={values.source}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <CustomInputField
        type="text"
        id='destination'
        name='destination'
        label='destination*'
        placeholder=' '
        helperText={(errors.destination && touched.destination) && errors.destination}
        value={values.destination}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
    <CustomSelectField
      name="carType"
      id="carType"
      size='large'
      helperText={(errors.carType && touched.carType) && errors.carType}
      value={values.carType}
      onBlur={handleBlur}
      onChange={handleChange}
    >
      <option value="">Select</option>
      <option value="SUV">SUV</option>
      <option value="Sedan">Sedan</option>
      <option value="HatchBack">HatchBack</option>
    </CustomSelectField>
    <CustomInputField
      type="text"
      id='numOfTravellers'
      name='numOfTravellers'
      label='Number Of Travellers'
      placeholder=' '
      size='large'
      helperText={(errors.numOfTravellers && touched.numOfTravellers) && errors.numOfTravellers}
      value={values.numOfTravellers}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    <CustomButton
      disabled={
        (values.destination === '' || values.source === '' || values.carType === '' || values.numOfTravellers === '') ||
        (errors.destination || errors.source || errors.carType || errors.numOfTravellers)
      }
      onClick={handleNextStep}
    >
      Enter bid details
    </CustomButton>
  </div>;
}
