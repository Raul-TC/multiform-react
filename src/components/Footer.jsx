import React from 'react'
import { useStep } from '../hooks/useStep'

const Footer = () => {
  const { state: { currentStep, errors, form, completed }, handleChangeStep, handleErrors, completedForm } = useStep()

  const sizeErrors = Object.keys(errors).length === 0
  const isEmpty = form.name === '' || form.email === '' || form.phone === ''
  return (
    <footer className={`${completed ? 'bg-magnolia' : 'bg-white'} flex items-center justify-between px-4 w-full h-16 fixed  bottom-0 md:relative md:px-0 md:h-auto`}>
      <button onClick={() => handleChangeStep('prev')} className={`${currentStep === 1 ? 'opacity-0' : 'opacity-100'} ${completed ? 'hidden' : ''} text-cool-gray font-bold`} disabled={currentStep === 1}>Go back</button>
      <button
        onClick={() => {
          if (isEmpty) {
            handleErrors()
          } else {
            handleChangeStep('next')
            handleErrors()
          }

          if (currentStep === 4) {
            completedForm()
          }
        }} className={`${currentStep === 4 ? 'bg-purpish-blue' : 'bg-marine-blue'} ${completed ? 'hidden' : ''} ${!sizeErrors ? 'bg-red-400' : ''} text-white h-10 px-3 rounded-md`} disabled={!sizeErrors}
      >{currentStep === 4 ? 'Confirm' : 'Next Step'}
      </button>
    </footer>
  )
}

export default Footer
