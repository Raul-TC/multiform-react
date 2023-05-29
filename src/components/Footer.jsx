import React from 'react'
import { useStep } from '../hooks/useStep'

const Footer = () => {
  const { state: { currentStep }, handleChangeStep } = useStep()
  return (
    <footer className='flex items-center justify-between px-4 w-full bg-white h-16 absolute bottom-0'>
      <button onClick={() => handleChangeStep('prev')} className={`${currentStep === 1 ? 'opacity-0' : 'opacity-100'} text-cool-gray font-bold`} disabled={currentStep === 1}>Go back</button>
      <button onClick={() => handleChangeStep('next')} className={`${currentStep === 4 ? 'bg-purpish-blue' : 'bg-marine-blue'} text-white h-10 px-3 rounded-md`}>{currentStep === 4 ? 'Confirm' : 'Next Step'}</button>
    </footer>
  )
}

export default Footer
