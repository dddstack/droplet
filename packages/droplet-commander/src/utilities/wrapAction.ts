import { gradient } from "@dddstack/droplet-gradient";

export const wrapAction = (action: Function) => {
  gradient();
  action();
};
