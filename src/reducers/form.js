export const formInitialState = {
  currentStep: 1,
  form: {
    name: '',
    email: '',
    phone: '',
    plan: { name: 'Arcade', price: 9 },
    isMonth: true,
    picks: []
  }
}

export const FORM_ACTION_TYPES = {
  CHANGE_STEP: 'CHANGE_STEP',
  CHANGE_INPUT_NAME: 'CHANGE_INPUT_NAME',
  CHANGE_MONTH: 'CHANGE_MONTH',
  HANDLEPLAN: 'HANDLE_PLAN',
  UPDATEPLAN: 'UPDATE_PLAN',
  ADDPICK: 'ADDPICK',
  UPDATEPICK: 'UPDATEPICK'
}

export const formReducer = (state, action) => {
  const { typeAction, payload } = action

  switch (typeAction) {
    case FORM_ACTION_TYPES.CHANGE_STEP: {
      console.log(payload)
      if (payload === 'next') {
        if (state.currentStep < 4) {
          const newState = {
            ...state,
            currentStep: state.currentStep + 1
          }
          return newState
        }
      }

      if (payload === 'prev') {
        const newState = {
          ...state,
          currentStep: state.currentStep - 1
        }
        return newState
      }
      return state
    }

    case FORM_ACTION_TYPES.CHANGE_INPUT_NAME: {
      const { target } = payload

      const newState = {
        ...state,
        form: { ...state.form, [target.name]: target.value }
      }

      return newState
    }

    case FORM_ACTION_TYPES.CHANGE_MONTH: {
      const newState = {
        ...state,
        form: { ...state.form, isMonth: !state.form.isMonth }
      }

      return newState
    }

    case FORM_ACTION_TYPES.HANDLEPLAN: {
      const { name, currentPrice } = payload

      const newState = {
        ...state,
        form: { ...state.form, plan: { name, value: currentPrice } }
      }

      return newState
    }
    case FORM_ACTION_TYPES.UPDATEPLAN: {
      const { name, currentPrice } = payload

      const newState = {
        ...state,
        form: { ...state.form, plan: state.form.plan.name === name ? { name, value: currentPrice } : state.form.plan }
      }

      return newState
    }

    case FORM_ACTION_TYPES.ADDPICK: {
      const { name, currentPrice } = payload

      const filter = state.form.picks.filter(el => el.name === name)

      if (filter.length > 0) {
        const filt = state.form.picks.filter(el => el.name !== name)

        const newState = {
          ...state,
          form: { ...state.form, picks: filt }
        }

        return newState
      } else {
        const newState = {
          ...state,
          form: { ...state.form, picks: [...state.form.picks, { name, currentPrice }] }
        }
        return newState
      }
    }

    case FORM_ACTION_TYPES.UPDATEPICK: {
      console.log(payload)

      const { name, currentPrice } = payload

      const filtro = state.form.picks.map(el => el.name === name ? { name, value: currentPrice } : el)
      const newState = {
        ...state,
        form: { ...state.form, picks: filtro }
      }

      return newState
    }
  }
  return state
}
