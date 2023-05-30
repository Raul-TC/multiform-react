import React from 'react'
import { useStep } from '../hooks/useStep'
import Plan from './Plan'
import { usePlan } from '../hooks/usePlan'
import Picks from './Picks'
import { usePicks } from '../hooks/usePicks'
import FinishPage from './FinishPage'

const FormLayout = () => {
  const { state: { currentStep, form, errors }, handleInputChange, handleChangeMonth, handleErrors } = useStep()
  const { plans } = usePlan()
  const { picks } = usePicks()
  const isMonth = form.isMonth
  return (
    <form action='' className='w-[90%] m-auto bg-white rounded-md py-5 px-4 -mt-[60px]'>
      {/* {currentStep === 1 && ( */}
      <div className={`${currentStep === 1 ? 'flex' : 'hidden'} flex flex-col gap-3`}>
        <h1 className='text-2xl font-bold text-marine-blue'>Personal Info</h1>
        <h2 className='text-cool-gray'>Personal info Please provide your name, email address, and phone number.</h2>
        <label htmlFor='name' className='flex flex-col text-marine-blue font-medium'>
          Name
          <input
            onChange={(e) => {
              handleInputChange(e)
              handleErrors()
            }} type='text' id='name' name='name' placeholder='e.g. Stephen King' className='border-light-gray border-2 rounded-md pl-2 py-2 text-sm' value={form.value} required
          />
        </label>
        {errors.name && <p>{errors.name}</p>}
        <label htmlFor='email' className='flex flex-col text-marine-blue font-medium'>
          Email Address
          <input
            onChange={(e) => {
              handleInputChange(e)
              handleErrors()
            }} type='email' id='email' name='email' placeholder='e.g. stephenking@lorem.com' className='border-light-gray border-2 rounded-md pl-2 py-2 text-sm' value={form.email} required
          />
        </label>
        {errors.email && <p>{errors.email}</p>}

        <label htmlFor='phone' className='flex flex-col text-marine-blue font-medium'>
          Phone Number
          <input
            onChange={(e) => {
              handleInputChange(e)
              handleErrors()
            }} type='tel' id='phone' name='phone' placeholder='e.g. +52 1234567890' className='border-light-gray border-2 rounded-md pl-2 py-2 text-sm' value={form.phone} required
          />
        </label>
        {errors.phone && <p>{errors.phone}</p>}

      </div>
      {/* )} */}
      {/* {currentStep === 2 && ( */}
      <div className={`${currentStep === 2 ? 'flex' : 'hidden'} flex flex-col gap-3`}>
        <h1 className='text-2xl font-bold text-marine-blue'>Select you Plan</h1>
        <h2 className='text-cool-gray'>You have the option of monthle or year billing.</h2>

        {currentStep === 2 && plans.map(plan =>
          <Plan key={plan.type} plan={form.plan} name={plan.type} period={plan.period} isMonth={isMonth} url={plan.image} picks={form.picks} />
        )}
        <div className='flex items-center justify-center gap-3 w-full'>
          <p className={` ${isMonth ? 'font-bold' : ''} text-marine-blue`}> Monthly</p>
          <div onClick={handleChangeMonth} className='bg-marine-blue w-12 h-6 rounded-full relative flex items-center'>
            <span className={`bg-white absolute w-4 h-4 rounded-full ml-1 mr-1  ${form.isMonth ? 'left-0 ' : 'right-0 '}`} />
          </div>
          <p className={` ${!isMonth ? 'font-bold' : ''} text-marine-blue`}>Yearly</p>
        </div>
      </div>
      {/* )} */}
      {/* {currentStep === 3 && ( */}
      <div className={`${currentStep === 3 ? 'flex' : 'hidden'} flex flex-col gap-3`}>
        <h1 className='text-2xl font-bold text-marine-blue'>Pick add-ons</h1>
        <h2 className='text-cool-gray'>Add-ons help enhance your gaming experience. </h2>

        {currentStep === 3 && picks.map(el => <Picks key={el.name} name={el.name} description={el.description} price={el.price} isMonth={isMonth} addOns={form.picks} />)}
      </div>
      {/* )} */}
      {/* {currentStep === 4 && ( */}

      <div className={`${currentStep === 4 ? 'flex' : 'hidden'} flex flex-col gap-3`}>
        <h1 className='text-2xl font-bold text-marine-blue'>Finishing up</h1>
        <h2 className='text-cool-gray'>Double-check everything looks OK before confirming.</h2>
        <FinishPage isMonth={isMonth} />

      </div>
      {/* )} */}
    </form>
  )
}

export default FormLayout
