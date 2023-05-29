import React, { useEffect } from 'react'
import { usePicks } from '../hooks/usePicks'

const Picks = ({ name, price, description, isMonth, addOns }) => {
  const { handleAddPick, handleUpdatePick } = usePicks()
  const currentPrice = price[isMonth ? [0] : [1]].price
  const getName = addOns.map(el => el.name)
  const includes = getName.includes(name)

  useEffect(() => {
    // change.current = true
    // if (change) {
    // }
    handleUpdatePick({ name, currentPrice })
  }, [isMonth])

  return (
    <div className={` ${includes ? 'border-marine-blue' : 'border-cool-gray'} flex items-center justify-between w-full gap-2 px-3 py-2 pl-2 rounded-md border-[1px] cursor-pointer font-bold`} onClick={() => handleAddPick({ name, currentPrice })}>
      <input type='checkbox' name='' id='' className='bg-red-300 w-6 h-6' checked={includes} readOnly />
      <div className='flex flex-col items-start justify-start w-[calc(100%-79.61px)]'>
        <p className='text-marine-blue'>{name}</p>
        <p className='font-normal text-xs text-cool-gray'>{description}</p>
      </div>
      <p className='items-end'>+${currentPrice}/{price[isMonth ? [0] : [1]].short}</p>
    </div>
  )
}

export default Picks
