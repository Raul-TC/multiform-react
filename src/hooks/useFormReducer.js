import { useReducer } from 'react'
import { FORM_ACTION_TYPES, formInitialState, formReducer } from '../reducers/Form'

export function useFormReducer () {
  const [state, dispatch] = useReducer(formReducer, formInitialState)

  const handleInputChange = event => dispatch({
    typeAction: FORM_ACTION_TYPES.CHANGE_INPUT_NAME,
    payload: event
  })

  const handleChangeStep = action => dispatch({
    typeAction: FORM_ACTION_TYPES.CHANGE_STEP,
    payload: action
  })
  const handleChangeMonth = () => dispatch({
    typeAction: FORM_ACTION_TYPES.CHANGE_MONTH
  })

  const handlePlan = plan => dispatch({
    typeAction: FORM_ACTION_TYPES.HANDLEPLAN,
    payload: plan
  })
  const handleUpdatePlan = plan => dispatch({
    typeAction: FORM_ACTION_TYPES.UPDATEPLAN,
    payload: plan
  })

  const handleAddPick = pick => dispatch({
    typeAction: FORM_ACTION_TYPES.ADDPICK,
    payload: pick
  })

  const handleUpdatePick = pick => dispatch({
    typeAction: FORM_ACTION_TYPES.UPDATEPICK,
    payload: pick
  })

  const handleErrors = () => dispatch({
    typeAction: FORM_ACTION_TYPES.HANDLE_ERRORS
  })
  return { state, handleInputChange, handleChangeStep, handleChangeMonth, handlePlan, handleUpdatePlan, handleAddPick, handleUpdatePick, handleErrors }
}
