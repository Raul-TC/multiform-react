export const formInitialState = {
  currentStep: 1,
  form: {
    name: '',
    email: '',
    phone: '',
    plan: { name: 'Arcade', price: 9 },
    isMonth: true,
    picks: []
  },
  errors: {},
  completed: false
}

export const FORM_ACTION_TYPES = {
  CHANGE_STEP: 'CHANGE_STEP',
  CHANGE_INPUT_NAME: 'CHANGE_INPUT_NAME',
  CHANGE_MONTH: 'CHANGE_MONTH',
  HANDLEPLAN: 'HANDLE_PLAN',
  UPDATEPLAN: 'UPDATE_PLAN',
  ADDPICK: 'ADDPICK',
  UPDATEPICK: 'UPDATEPICK',
  HANDLE_ERRORS: 'HANDLE_ERRORS',
  COMPLETED: 'COMPLETED',
  CHANGEPLAN: 'CHANGE_PLAN'
}

export const formReducer = (state, action) => {
  const { typeAction, payload } = action

  switch (typeAction) {
    case FORM_ACTION_TYPES.CHANGE_STEP: {
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
          form: { ...state.form, picks: [...state.form.picks, { name, value: currentPrice }] }
        }
        return newState
      }
    }

    case FORM_ACTION_TYPES.UPDATEPICK: {
      const { name, currentPrice } = payload

      const filtro = state.form.picks.map(el => el.name === name ? { name, value: currentPrice } : el)
      const newState = {
        ...state,
        form: { ...state.form, picks: filtro }
      }

      return newState
    }

    case FORM_ACTION_TYPES.HANDLE_ERRORS: {
      const errors = {}
      const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
      const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      const regexTelefono = /^[0-9]{10}/

      if (!regexName.test(state.form.name.trim())) {
        errors.name = 'El campo Nombre solo acepta letras y espacios en blanco.'
      }
      if (!state.form.name.trim()) {
        errors.name = 'This field is required'
      }

      if (!regexEmail.test(state.form.email.trim())) {
        errors.email = 'El campo Correo es incorrecto.'
      }
      if (!state.form.email.trim()) {
        errors.email = 'This field is required'
      }
      if (!regexTelefono.test(state.form.phone.trim())) {
        errors.phone = 'El campo Teléfono solo acepta 10 números'
      }
      if (!state.form.phone.trim()) {
        errors.phone = 'This field is required'
      }

      return { ...state, errors }
    }

    case FORM_ACTION_TYPES.COMPLETED: {
      return {
        ...state,
        completed: true
      }
    }
    case FORM_ACTION_TYPES.CHANGEPLAN: {
      return {
        ...state,
        currentStep: 2
      }
    }
  }
  return state
}
