import colors from "tailwindcss/colors";

export const getSafetyEvaluationColor = (safety: number) => {
  if (safety < 20) return colors.red[500];
  if (safety < 40) return colors.orange[500];
  if (safety < 60) return colors.yellow[500];
  if (safety < 80) return colors.green[500];
  else return colors.emerald[700];
};
