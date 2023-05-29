import React from 'react'
import { useStep } from '../hooks/useStep'
import { steps } from '../mocks/data'

const Header = () => {
  const { state: { currentStep } } = useStep()
  return (
    <div className='bg-mobile md:bg-desktop h-40 w-full'>

      <div className='flex justify-center items-center gap-4 my-4 fixed top-6 left-0 right-0'>
        {steps.map(el => <span key={el.id} className={`${currentStep === el.id ? 'bg-light-blue text-marine-blue' : 'bg-transparent text-white'} font-bold border-[1px] border-light-gray w-8 h-8 b-marine-blue rounded-full flex items-center justify-center`}>{el.step}</span>)}
      </div>

    </div>
  )
}

export default Header
