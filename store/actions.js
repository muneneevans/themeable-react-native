export const changeBaseTheme = BaseTheme => {
  return dispatch => {
    dispatch({
      type: "CHANGE_BASE_THEME",
      baseTheme: BaseTheme
    });
  };
};

export const changeColorTheme = ColorTheme => {
  return dispatch => {
    dispatch({
      type: "CHANGE_COLOR_THEME",
      colorTheme: ColorTheme
    });
  };
};
