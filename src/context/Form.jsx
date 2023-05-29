import { createContext } from 'react'
import { useFormReducer } from '../hooks/useFormReducer'
// import { FORM_ACTION_TYPES, formInitialState, formReducer } from '../reducers/Form'

export const FormContext = createContext()

// function useFormReducer () {
//   const [state, dispatch] = useReducer(formReducer, formInitialState)

//   const changeStep = typeAction => dispatch({
//     typeAction: FORM_ACTION_TYPES.CHANGE_STEP,
//     payload: typeAction
//   })

//   const handleInputChange = event => dispatch({
//     typeAction: FORM_ACTION_TYPES.CHANGE_INPUT_NAME,
//     payload: event
//   })

//   return { state, changeStep, handleInputChange }
// }

export function FormProvider ({ children }) {
  const { state, handleInputChange, handleChangeStep, handleChangeMonth, handlePlan, handleUpdatePlan, handleAddPick, handleUpdatePick } = useFormReducer()
  return (
    <FormContext.Provider value={{ state, handleInputChange, handleChangeStep, handleChangeMonth, handlePlan, handleUpdatePlan, handleAddPick, handleUpdatePick }}>
      {children}
    </FormContext.Provider>
  )
}
