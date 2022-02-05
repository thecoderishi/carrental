import React, { useState } from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import TravelDetails from './travelDetails';
import BidDetails from './bidDetails';
import OTPVerification from './otpVerification';
import SummaryBid from './summaryBid';

export default function BidFormHome() {

  const [currentStep, setCurrentStep] = useState(0);

  const formik = useFormik({
    initialValues: {
      source: '',
      destination: '',
      carType: '',
      numOfTravellers: '',
      bidPrice: '',
      isNegotiable: false,
      customerPhoneNumber: '',
      getWhatsappUpdate: false,
      customerName: '',
      remarks: '',
      otp: '',
    },
    validationSchema: Yup.object({
      source: Yup.string().required('Source is required'),
      destination: Yup.string().required('Destination is required'),
      carType: Yup.string().required('Car type is required'),
      numOfTravellers: Yup.number().when('carType', {
        is: value => value && value === 'SUV',
        then: Yup.number().max(6, 'Maximum 6 travellers are allowed for SUV'),
        otherwise: Yup.number().max(4, 'Maximum 4 travellers are allowed for HatchBack/Sedan')
      }),
      bidPrice: Yup.number().required('Bid price is required'),
      customerPhoneNumber: Yup.string()
        .max(9999999999)
        .required('Mobile number is required'),
      customerName: Yup.string().required('Name is required'),
      remarks: Yup.string(),
      otp: Yup.number().required('OTP is required')
    })
  })

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const handleJumpStep = (step) => {
    setCurrentStep(step)
  }

  return <div>
    <div>
      <h1>
        {(currentStep === 0 || currentStep === 1) && `Place your Bid (${currentStep + 1}/4 step)`}
        {currentStep === 2 && `Verify OTP (${currentStep + 1}/4 step)`}
        {currentStep === 3 && `Summary and Submit Bid (${currentStep + 1}/4 step)`}
      </h1>
    </div>
    <form action="">
      {currentStep === 0 && <TravelDetails formik={formik} handleNextStep={handleNextStep} />}
      {currentStep === 1 && <BidDetails formik={formik} handleNextStep={handleNextStep} handleJumpStep={handleJumpStep} />}
      {currentStep === 2 && <OTPVerification formik={formik} handleNextStep={handleNextStep} handleJumpStep={handleJumpStep} />}
      {currentStep === 3 && <SummaryBid formik={formik} handleNextStep={handleNextStep} handleJumpStep={handleJumpStep} />}
      {/* <button type="submit">submit</button> */}
    </form>
  </div>;
}