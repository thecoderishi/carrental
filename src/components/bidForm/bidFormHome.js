import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import TravelDetails from './travelDetails';
import BidDetails from './bidDetails';
import OTPVerification from './otpVerification';
import SummaryBid from './summaryBid';
import Logo from '../../images/logo.png'
export default function BidFormHome() {

  const [currentStep, setCurrentStep] = useState(0);

  const checkPhone = /^[0-9]{10}$/

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
      isLogedin: false
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
        .matches(checkPhone, 'Number should be of 10 digit')
        .required('Mobile number is required'),
      customerName: Yup.string().required('Name is required'),
      remarks: Yup.string(),
      otp: Yup.number().required('OTP is required')
    })
  })

  useEffect(() => {
    if (localStorage.getItem('isLogedIn') !== null && Boolean(localStorage.getItem('isLogedIn')) === true) {
      formik.setFieldValue('isLogedin', true)
    }
  }, [])

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const handleJumpStep = (step) => {
    setCurrentStep(step)
  }

  return <div style={{ width: '100%' }}>
    <div className='logo-container'>
      <img className='logo' src={Logo} alt="logo" />
    </div>
    <div className='header-container'>
      <p className='header'>
        {(currentStep === 0 || currentStep === 1) && `Place your Bid (${currentStep + 1}/4 step)`}
        {currentStep === 2 && `Verify OTP (${currentStep + 1}/4 step)`}
        {currentStep === 3 && `Summary and Submit Bid (${currentStep + 1}/4 step)`}
      </p>
    </div>
    <div className='div-center-container'>
      <div className='div-center'>
        <form action="">
          {currentStep === 0 && <TravelDetails formik={formik} handleNextStep={handleNextStep} />}
          {currentStep === 1 && <BidDetails formik={formik} handleNextStep={handleNextStep} handleJumpStep={handleJumpStep} />}
          {currentStep === 2 && <OTPVerification formik={formik} handleNextStep={handleNextStep} handleJumpStep={handleJumpStep} />}
          {currentStep === 3 && <SummaryBid formik={formik} handleNextStep={handleNextStep} handleJumpStep={handleJumpStep} />}
        </form>
      </div>
    </div>
  </div>;
}