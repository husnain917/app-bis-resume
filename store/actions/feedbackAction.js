export const FEEDBACK = 'FEEDBACK';
export const feedbackAction = (data) => {
  return {
    type: FEEDBACK,
    payload: data,
  };
};
