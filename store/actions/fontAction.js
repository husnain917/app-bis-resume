export const CUSTOM_FONT = 'CUSTOM_FONT';
export const customFont = (data) => {
  console.log('action:', data);
  return {
    type: CUSTOM_FONT,
    payload: data,
  };
};
