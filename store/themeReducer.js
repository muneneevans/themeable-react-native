import { base, darkTheme, lightTheme, colorOptions } from "./theme";
// blue
const initialState = {
  theme: { ...base, ...lightTheme, ...colorOptions.blue }
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_BASE_THEME":
      let newState = {
        ...state,
        theme: { ...state.theme, ...action.baseTheme }
      };
      return newState;
    case "CHANGE_COLOR_THEME":
      let newStateTheme = {
        ...state,
        theme: { ...state.theme, ...action.colorTheme }
      };
      return newStateTheme;
    default:
      return state;
  }
};

export default themeReducer;
