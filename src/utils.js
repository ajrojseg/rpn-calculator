import * as CONSTANTS from "./constants.js";

export const stack = [];

const resultMap = {
  [CONSTANTS.ADDITION]: (firstValue, secondValue) =>
    stack.push(Number(firstValue) + Number(secondValue)),
  [CONSTANTS.MULTIPLICATION]: (firstValue, secondValue) =>
    stack.push(eval(`${firstValue} * ${secondValue}`)),
  [CONSTANTS.SUBSTRACTION]: (firstValue, secondValue) =>
    stack.push(firstValue - Number(secondValue)),
  [CONSTANTS.DIVITION]: (firstValue, secondValue) =>
    stack.push(Number(firstValue) / Number(secondValue)),
};

export class Utils {
  static isNotArithmeticOperation = (value) =>
    value !== CONSTANTS.ADDITION &&
    value !== CONSTANTS.SUBSTRACTION &&
    value !== CONSTANTS.MULTIPLICATION &&
    value !== CONSTANTS.DIVITION;

  static containsOnlyNumbers = (str) => /^-?[0-9]\d*(\.\d+)?$/.test(str);

  static doArithmeticCalculation = (
    arithmeticSymbol,
    firstValue,
    secondValue
  ) => {
    if (firstValue && secondValue) {
      return resultMap[arithmeticSymbol](firstValue, secondValue);
    }

    throw CONSTANTS.ERRORS.ARITHMETIC_ERROR;
  };
}
