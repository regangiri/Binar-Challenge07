const initialState = {
  carData: [],
  carId: [],
  showAlert: false,
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetchCarData":
      return {
        ...state,
        carData: action.payload,
      };
    case "fetchCarById":
      return {
        ...state,
        carId: action.payload,
      };
    case "showAlert":
      return {
        ...state,
        showAlert: action.payload,
      };
    case "turnOffAlert":
      return {
        ...state,
        showAlert: action.payload,
      };
    default:
      return state;
  }
};

export default carReducer;
