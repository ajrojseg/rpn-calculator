# RPN CALCULATOR

## Decription

Solution for an RPN calculator in NodeJS using the event emitter on the process object, which reads from the standard input and pass the users input to the main app function that will handle all the calculation.

## Reasoning behind your technical choices, including architectural

I decided to go with a stack data structured solution, by reading online I learned that an RPN calculator works by using the last 2 operands right after an arithmetic operator (+ - \* /) is entered, so there is LIFO (Last In Last Out) architecture involves, where the last number will be used as the first number in the calculation and the first one will be used as the second one. I used the process.stdin.on to make the node process stay alive waiting for user input, then I pass the data collected by the event emitter to the function that will handle all the calculations (this makes easier future modifications to the app I.e: reading from a file), I separate constants and utility functions from the main app function to standardized modularization and being able to add unit testing to these isolate functions (I went with a Utility Class solution, in case we want to mock the implementation on these methods). I also added functional testing by testing the main app function.

## Trade-offs you might have made, anything you left out, or what you might do differently if you were to spend additional time on the project

- I would've add more project configurations like linter or prettier
- I would've add a typing tool like typescript
- Restricted the node js version for local envs and other lover envs
- Add git-hooks to package json to make sure commits fail is linter/prettier or even tests failed.

## How to run

Make sure you use node version 14 or above, you can use a node version package manager like nvm
https://github.com/nvm-sh/nvm

Install all project dependencies

```
npm i
```

Start application

```
npm start
```

Run tests

```
npm test
```
