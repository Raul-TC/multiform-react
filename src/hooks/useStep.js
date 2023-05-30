import { useContext } from 'react'
import { FormContext } from '../context/Form'

export function useStep () {
  const { state, changeStep, handleInputChange, handleChangeStep, handleChangeMonth, handleErrors } = useContext(FormContext)

  return { state, changeStep, handleInputChange, handleChangeStep, handleChangeMonth, handleErrors }
}
