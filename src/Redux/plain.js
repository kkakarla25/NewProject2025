const initialState = {
  arrData: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      // check if item exists
      const existingItem = state.arrData.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // increase count if exists
        return {
          ...state,
          arrData: state.arrData.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // add new item with quantity = 1
        return {
          ...state,
          arrData: [...state.arrData, { ...action.payload, quantity: 1 }],
        };
      }

    case "REMOVE_ITEM":
      return {
        ...state,
        arrData: state.arrData.filter((item) => item.id !== action.payload),
      };

    case "DECREASE_ITEM":
      return {
        ...state,
        arrData: state.arrData
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0), // remove if qty becomes 0
      };

    default:
      return state;
  }
};

export default cartReducer;
