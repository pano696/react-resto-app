const initialState = {
  menu: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_LOADED':
      return {
        menu: action.payloaded
      };
    default:
      return state;
  }
}

export default reducer;
