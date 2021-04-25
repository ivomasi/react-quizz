export const shuffleArr = (array: any[]) => {
  //check  out in docs
  return [...array].sort(() => Math.random() - 0.5);
};
