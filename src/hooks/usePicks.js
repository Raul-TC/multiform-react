import { useContext } from 'react'
import { FormContext } from '../context/Form'

export function usePicks () {
  const { handleAddPick, handleUpdatePick } = useContext(FormContext)
  const picks = [
    {
      name: 'Online service',
      description: 'Access to multiplayer games',
      price: [{
        type: 'month',
        price: 1,
        short: 'mo'
      },
      {
        type: 'year',
        price: 10,
        short: 'yr'
      }]
    },
    {
      name: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: [{
        type: 'month',
        price: 2,
        short: 'mo'
      },
      {
        type: 'year',
        price: 20,
        short: 'yr'
      }]
    },
    {
      name: 'Customizable profile',
      description: 'Custom theme on your profile',
      price: [{
        type: 'month',
        price: 2,
        short: 'mo'
      },
      {
        type: 'year',
        price: 20,
        short: 'yr'
      }]
    }
  ]

  return { picks, handleAddPick, handleUpdatePick }
}
