import React from 'react'
import { useStep } from '../hooks/useStep'

const FinishPage = ({ isMonth }) => {
  const { state: { form }, handleChangePlan } = useStep()
  const price01 = form.picks[0] ? form.picks[0].value : 0
  const price02 = form.picks[1] ? form.picks[1].value : 0
  const price03 = form.picks[2] ? form.picks[2].value : 0
  const pricePlan = form.plan.value

  const total = price01 + price02 + price03 + pricePlan
  return (
    <>
      <div className='bg-magnolia rounded-md p-4'>
        <div className='flex justify-between items-center border-b-[1px] border-light-gray pb-4'>
          <div>
            <h1 className='font-bold text-marine-blue'>{form.plan.name} ({isMonth ? 'Monthly' : 'Yearly'})</h1>
            <span className='underline text-cool-gray font-bold cursor-pointer' onClick={handleChangePlan}>Change</span>
          </div>
          <span className='font-bold text-marine-blue mb-4'>${form.plan.value}/{isMonth ? 'mo' : 'yr'}</span>
        </div>
        <div className='pt-4'>
          {form.picks.map((el, index) => <div key={el + index} className='flex justify-between items-center text-cool-gray'><p>{el.name}</p> <span>${el.value}/{isMonth ? 'mo' : 'yr'}</span></div>)}
        </div>

      </div>
      <div className='flex justify-between items-center mt-12 px-4 mb-4'>
        <p className='text-cool-gray'>
          Total({isMonth ? 'per month' : 'per yearly'})
        </p>
        <p className='text-purpish-blue font-bold md:text-xl'>+${total}/{isMonth ? 'mo' : 'yr'}</p>
      </div>
    </>
  )
}
export default FinishPage
