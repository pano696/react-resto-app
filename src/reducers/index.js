const initialState = {
  menu: [],
  loading: true,
  error: false,
  items: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_LOADED':
      return {
        ...state,
        menu: action.payload,
        loading: false,
        error: false
      };
    case 'MENU_REQUSTED':
      return {
        ...state,
        menu: state.menu,
        loading: true,
        error: false
      };
    case 'MENU_ERROR':
      return {
        ...state,
        menu: [],
        loading: false,
        error: true
      };
    case 'ITEM_ADD_TO_CART':
      const id = action.payload;
      let newItems = [];
      const itemIndex = state.items.findIndex(item => item.id === id);
      if (itemIndex >= 0) {
        newItems = state.items.slice();
        newItems[itemIndex].num += 1;
      } else {
        const item = state.menu.find(item => item.id === id);
        const newItem={
          title: item.title,
          price: item.price,
          url: item.url,
          id: item.id,
          num: 1
        }
        newItems = [...state.items, newItem]
      };
      return {
        ...state,
        items: newItems
      };
    case 'ITEM_REMOVE_FROM_CART':
      const idRemove = action.payload;
      const newItemsAfterRemove = state.items.filter(item => item.id !== idRemove);
      return {
        ...state,
        items: newItemsAfterRemove
      }
    case 'SEND_CART_REQUSTED':
      return {
        ...state,
        loading: true
      }
    case 'SEND_CART':
      return {
        ...state,
        items: [],
        loading: false,
        error: false
      }
    default:
      return state;
  }
}

export default reducer;
