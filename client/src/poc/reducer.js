export function globalReducer(state, action) {
  switch (action.type) {
    case 'field': {
      return {
        ...state,
        [action.fieldName]: action.payload
      };
    }

    case 'reset': {
      return {
        ...state,
        title: '',
        tag: ''
      };
    }

    case 'submit': {
      return {
        ...state,
        titles: [...state.titles, { title: state.title, tag: state.tag }],
        title: '',
        tag: ''
      };
    }

    case 'LOAD_SUCCESS': {
      return {
        ...state,
        titles: action.payload
      };
    }

    default:
      return state;
  }
}
