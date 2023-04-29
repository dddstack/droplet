import chalk from "chalk";
import gradientString from "gradient-string";

export const gradient = () =>
  console.log(
    chalk.bold(
      gradientString(["#33FFDC", "#33EAFF"])("💧 DROPLET")
    )
  );
