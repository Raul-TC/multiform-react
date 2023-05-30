import { useContext } from 'react'
import { FormContext } from '../context/Form'

export function useForm () {
  const { state: { form, errors } } = useContext(FormContext)

  return { form, errors }
}
