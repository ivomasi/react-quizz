export const shuffleArr = (array: any[]) => {
  //check it out in docs
  return [...array].sort(() => Math.random() - 0.5);
};
