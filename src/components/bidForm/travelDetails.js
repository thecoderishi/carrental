import React from 'react';


export default function TravelDetails({ formik, handleNextStep }) {

  const { values, handleChange, errors, handleBlur, touched } = formik

  return <div>
    <input
      type="text"
      id='source'
      name='source'
      placeholder='source'
      value={values.source}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    {(errors.source && touched.source) ? <p>{errors.source}</p> : null}
    <input
      type="text"
      id='destination'
      name='destination'
      placeholder='destination'
      value={values.destination}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    {(errors.destination && touched.destination) ? <p>{errors.destination}</p> : null}
    <select
      name="carType"
      id="carType"
      value={values.carType}
      onBlur={handleBlur}
      onChange={handleChange}
    >
      <option value="">Select</option>
      <option value="SUV">SUV</option>
      <option value="Sedan">Sedan</option>
      <option value="HatchBack">HatchBack</option>
    </select>
    {(errors.carType && touched.carType) ? <p>{errors.carType}</p> : null}
    <input
      type="number"
      id='numOfTravellers'
      name='numOfTravellers'
      placeholder='Number Of Travellers'
      value={values.numOfTravellers}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    {(errors.numOfTravellers && touched.numOfTravellers) ? <p>{errors.numOfTravellers}</p> : null}
    <button onClick={handleNextStep}>
      Enter bid details
    </button>
  </div>;
}
