export const severity = (value: number) => {
  if (value <= 0) {
    return "None";
  }

  if (value > 0 && value < 4) {
    return "Low";
  }

  if (value > 4 && value < 7) {
    return "Medium";
  }

  return "High";
};
