import React, { useEffect } from 'react'
import { usePlan } from '../hooks/usePlan'

const Plan = ({ name, url, period, plan, isMonth }) => {
  const { handlePlan, handleUpdatePlan } = usePlan()
  const currentPrice = period[isMonth ? 0 : 1].price

  useEffect(() => {
    handleUpdatePlan({ name, currentPrice })
  }, [isMonth])

  return (
    <div className={`${plan.name === name ? ' border-marine-blue bg-blue-50' : 'border-cool-gray'} flex  items-center justify-start gap-4 py-3 pl-2 rounded-md border-[1px] cursor-pointer md:flex-col md:w-full md:justify-center`} onClick={() => handlePlan({ name, currentPrice })}>
      <img src={url} alt={name} />
      <div className='self-start md:self-center'>
        {/* <input type='checkbox' name='plan' id='plan' className='hidden' /> */}
        <h3 className='font-bold text-marine-blue md:text-center'>{name}</h3>
        <p className='text-cool-gray md:text-center'>${currentPrice}/{period[isMonth ? 0 : 1].short}</p>
        {!isMonth && <p className='text-marine-blue md:text-center'>{period[1].montsFree} months free</p>}
      </div>
    </div>
  )
}

export default Plan
