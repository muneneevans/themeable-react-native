import { base, darkTheme, lightTheme, colorOptions } from "./theme";
// blue
const initialState = {
  theme: { ...base, ...lightTheme, ...colorOptions.blue }
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ACTION_TYPE":
      return;
    default:
      return state;
  }
};

export default themeReducer;
