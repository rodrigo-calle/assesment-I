// eslint-disable-next-line import/prefer-default-export
export const timerSecond = () => {
  const seconds = Math.floor(Math.random() * (59 - 0) + 0);
  return seconds;
};

export const timerMinute = () => {
  const minutes = Math.floor(Math.random() * (3 - 1) + 1);
  return minutes;
};
