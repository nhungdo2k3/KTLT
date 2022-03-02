const defaultState = {
  name: "Name Default",
  img: "http://placeimg.com/640/480/nightlife",
};

export const carDetailReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "XEM_CHI_TIET": {
      state = action.carDetail;
      return { ...state };
    }
    default:
      return state;
  }
  // return state;
};
