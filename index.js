import { rpnCalculator } from "./src/app.js";
import * as CONSTANTS from "./src/constants.js";

(function () {
  console.log(CONSTANTS.TITLE);
  console.log(CONSTANTS.INSTRUCTIONS_TITLE);
  console.log(CONSTANTS.INSTRUCTIONS);
})();

process.stdin.on("data", (data) => {
  rpnCalculator(data);
});
