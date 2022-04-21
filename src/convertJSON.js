import { checkType } from "./checkType";

export const convertJSON = (data) => {
  return Object.entries(data).reduce((obj, [key, value]) => {
    return {
      ...obj,
      [key]: checkType(value),
    }
  }, {})
};
