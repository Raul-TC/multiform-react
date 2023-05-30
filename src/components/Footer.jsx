import React from 'react'
import { useStep } from '../hooks/useStep'

const Footer = () => {
  const { state: { currentStep, errors, form }, handleChangeStep, handleErrors } = useStep()

  const sizeErrors = Object.keys(errors).length === 0

  const isEmpty = form.name === '' || form.email === '' || form.phone === ''

  console.log(isEmpty)
  return (
    <footer className='flex items-center justify-between px-4 w-full bg-white h-16 absolute bottom-0'>
      <button onClick={() => handleChangeStep('prev')} className={`${currentStep === 1 ? 'opacity-0' : 'opacity-100'} text-cool-gray font-bold`} disabled={currentStep === 1}>Go back</button>
      <button
        onClick={() => {
          if (isEmpty) {
            handleErrors()
            return null
          } else {
            handleChangeStep('next')
            handleErrors()
          }
        }} className={`${currentStep === 4 ? 'bg-purpish-blue' : 'bg-marine-blue'} ${!sizeErrors ? 'bg-red-400' : ''} text-white h-10 px-3 rounded-md`} disabled={!sizeErrors}
      >{currentStep === 4 ? 'Confirm' : 'Next Step'}
      </button>
    </footer>
  )
}

export default Footer
