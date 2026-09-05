# Polynomial Interpolation Assignment

## Overview

This project solves the polynomial interpolation problem using JavaScript and Node.js.

The input is provided in JSON format.
Each root contains a value represented in a different numerical base.
The program converts these values to decimal and finds the constant term of the polynomial using Lagrange interpolation.

## Technologies Used

- JavaScript
- Node.js
- JSON
- BigInt

## Input

The input JSON contains:

- n - Number of roots provided
- k - Minimum number of roots required
- base - Base in which the value is represented
- value - Encoded value of the root

The polynomial degree is:
m = k - 1

## Method

The program performs the following steps:

1. Reads the JSON input.
2. Reads n and k.
3. Extracts the root coordinates.
4. Converts each value from its given base to decimal.
5. Uses BigInt to handle large numbers accurately.
6. Uses Lagrange interpolation.
7. Evaluates the polynomial at x = 0.
8. P(0) gives the constant term of the polynomial.

## Files


solution.js

Main program that performs the calculation.

run.js


Runs both test cases.
testcase1.json
Contains the first test case.


testcase2.json
Contains the second test case.

## How to Run

### Test Case 1
node solution.js testcase1.json

Output:
3

### Test Case 2

node solution.js testcase2.json


Output:


-6290016743746469796

### Run Both Test Cases


node run.js


Output:

text
Test Case 1:
3

Test Case 2:
-6290016743746469796


## Results

| Test Case   | Constant Term        |
| ----------- | -------------------- |
| Test Case 1 | 3                    |
| Test Case 2 | -6290016743746469796 |

## Author

Placement Assignment Submission

```
```
