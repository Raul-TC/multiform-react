import { useContext } from 'react'
import { FormContext } from '../context/Form'

export function usePlan () {
  const { handlePlan, handleUpdatePlan } = useContext(FormContext)
  const plans = [
    {
      type: 'Arcade',
      period: [{
        type: 'month',
        short: 'mo',
        price: 9,
        montsFree: 0
      },
      {
        type: 'year',
        short: 'yr',
        price: 90,
        montsFree: 2
      }],
      image: './src/images/icon-arcade.svg'
    },
    {
      type: 'Advanced',
      period: [{
        type: 'month',
        short: 'mo',
        price: 12,
        montsFree: 0
      },
      {
        type: 'year',
        short: 'yr',
        price: 120,
        montsFree: 2
      }],
      image: './src/images/icon-advanced.svg'

    },
    {
      type: 'Pro',
      period: [{
        type: 'month',
        short: 'mo',
        price: 15,
        montsFree: 0
      },
      {
        type: 'year',
        short: 'yr',
        price: 150,
        montsFree: 2
      }],
      image: './src/images/icon-pro.svg'

    }
  ]
  return { handlePlan, plans, handleUpdatePlan }
}
