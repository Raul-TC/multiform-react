import React, { useEffect } from 'react'
import { usePlan } from '../hooks/usePlan'

const Plan = ({ name, url, period, plan, isMonth }) => {
  const { handlePlan, handleUpdatePlan } = usePlan()
  const currentPrice = period[isMonth ? 0 : 1].price

  useEffect(() => {
    // change.current = true
    // if (change) {
    // }
    handleUpdatePlan({ name, currentPrice })
  }, [isMonth])

  return (
    <div className={`${plan.name === name ? ' border-marine-blue bg-blue-50' : 'border-cool-gray'} flex  items-center justify-start gap-4 py-3 pl-2 rounded-md border-[1px] cursor-pointer`} onClick={() => handlePlan({ name, currentPrice })}>
      <img src={url} alt={name} />
      <div className='self-start'>
        {/* <input type='checkbox' name='plan' id='plan' className='hidden' /> */}
        <h3 className='font-bold text-marine-blue'>{name}</h3>
        <p className='text-cool-gray'>${currentPrice}/{period[isMonth ? 0 : 1].short}</p>
        {!isMonth && <p className='text-marine-blue'>{period[1].montsFree} months free</p>}
      </div>
    </div>
  )
}

export default Plan
