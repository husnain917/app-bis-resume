export const THEME_MODE = 'THEME_MODE';
export const themeMode = (data) => {
  return {
    type: THEME_MODE,
    payload: data,
  };
};
