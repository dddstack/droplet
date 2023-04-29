import { version } from "../package.json";
import { log } from "./lib";

export const boxVersion = () => {
  console.log("\n");
  log.droplet(
    `${log.pink(`v${version}`)} @ddddstack/droplet initiated.`
  );
  console.log("\n");
};
