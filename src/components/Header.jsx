import React from 'react'
import { useStep } from '../hooks/useStep'
import { steps } from '../mocks/data'

const Header = () => {
  const { state: { currentStep } } = useStep()
  return (
    <div className='bg-mobile md:bg-desktop bg-no-repeat bg-cover h-40 w-full md:flex md:flex-col md:h-[568px] md:w-[273px]'>

      <div className='flex justify-center items-center gap-4 my-4 fixed top-6 left-0 right-0 md:relative md:flex-col md:w-full md:h-full md:m-0 md:top-0 md:items-start md:ml-10 md:justify-start md:mt-10'>
        {steps.map(el =>
          <div key={el.id} className='md:flex md:items-center md:gap-4'>
            <span className={`${currentStep === el.id ? 'bg-light-blue text-marine-blue' : 'bg-transparent text-white'} font-bold border-[1px] border-light-gray w-8 h-8 b-marine-blue rounded-full flex items-center justify-center`}>{el.step}</span>
            <div className='hidden md:block'>
              <p className='uppercase text-light-gray'>Step {el.id}</p>
              <p className='text-white font-bold'>{el.name}</p>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default Header
