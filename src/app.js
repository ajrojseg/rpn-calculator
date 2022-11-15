import { Utils, stack } from "./utils.js";
import * as CONSTANTS from "./constants.js";

let shouldDisplayResult = false;

export const rpnCalculator = (data) => {
  try {
    data = data.toString().trim();
    const values = data.split(" ");

    for (let currentValue of values) {
      if (
        Utils.isNotArithmeticOperation(currentValue) &&
        Utils.containsOnlyNumbers(currentValue)
      ) {
        stack.push(currentValue);
        console.log(">", currentValue);
      } else {
        const secondValue = stack.pop();
        const firstValue = stack.pop();
        Utils.doArithmeticCalculation(currentValue, firstValue, secondValue);
        shouldDisplayResult = true;
      }
    }

    if (shouldDisplayResult) {
      console.log("result", stack.toString());
      shouldDisplayResult = false;
    }
  } catch (e) {
    console.error(CONSTANTS.ERRORS.GENERIC_ERROR);
    stack.splice(0, stack.length);
  }
};
