import { createContext } from 'react'
import { useFormReducer } from '../hooks/useFormReducer'

export const FormContext = createContext()
export function FormProvider ({ children }) {
  const { state, handleInputChange, handleChangeStep, handleChangeMonth, handlePlan, handleUpdatePlan, handleAddPick, handleUpdatePick, handleErrors, completedForm, handleChangePlan } = useFormReducer()
  return (
    <FormContext.Provider value={{ state, handleInputChange, handleChangeStep, handleChangeMonth, handlePlan, handleUpdatePlan, handleAddPick, handleUpdatePick, handleErrors, completedForm, handleChangePlan }}>
      {children}
    </FormContext.Provider>
  )
}
