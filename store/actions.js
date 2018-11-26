export const changeBaseTheme = BaseTheme => {
  //dispatch an action to change light or dark theme
  return dispatch => {
    dispatch({
      type: "CHANGE_BASE_THEME",
      baseTheme: BaseTheme
    });
  };
};

export const changeColorTheme = ColorTheme => {
  //dispatch an action to change accent color theme theme
  return dispatch => {
    dispatch({
      type: "CHANGE_COLOR_THEME",
      colorTheme: ColorTheme
    });
  };
};
