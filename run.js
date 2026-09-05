
const { execSync } = require("child_process");

console.log("Test Case 1:");
console.log(
    execSync("node solution.js testcase1.json").toString().trim()
);

console.log();

console.log("Test Case 2:");
console.log(
    execSync("node solution.js testcase2.json").toString().trim()
);
