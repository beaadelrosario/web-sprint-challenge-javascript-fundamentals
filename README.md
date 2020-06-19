# Sprint Challenge - JavaScript Fundamentals

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in project. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied array methods, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL if you need direction. 

_You have **three hours** to complete this challenge. Plan your time accordingly._


## Introduction

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. Briefly compare and contrast `.forEach` & `.map` (2-3 sentences max)
// .forEach()
  // must iterate through every item in the array without stopping
  // so kinda like a loop but a loop we have to give a condition to, forEach HAS to iterate through every single item in the array without stopping.
  // a little more memory intensive. forEach will work with most things except for massive amount of data.
  // for loop is better than forEach when working with very large data sets
  // forEach does not return a new array
  // the return statement is optional
  // syntax:  arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
  // forEach is the higher order function
  //the callback is anonomyous 

// .map()
  // returns a new array to us
  // it doesnt manipulate the original array
  // used for converting data
  // needs the return keyword


2. Explain the difference between a callback and a higher order function.

// higher order functions can receive other functions as parameters
// callback function are the functions that are passed into other functions as arguements
// callback functions are passed in // HOF receive 

3. What is closure?

//When a function is declared and created, a new scope is also created. Any variables declared within that function’s scope will be enclosed in a lexical/private scope that belongs to that function. Also, it is important to remember that functions look outward for context. If some variable isn’t defined in a function’s scope, the function will look outside the scope chain and search for a variable being referenced in the outer scope.

//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

4. Describe the four rules of the 'this' keyword.

  1. Global/Window Binding - when in the global scope, the value of THIS will be the window or console object
  2. Implicit Binding - implied that if you're using a method on an object that the context that you want is bound to what is left of the dot. Whenever a function is called by a preceding dot, the object left of the dot gets THIS
  3. New Binding - has to do with constructor functions - whenever a constructor function is used, THIS refers to the specific instance of the object that is created and returned by the constructor function
  4. Explicit Binding - [.bind .call .apply] binding objects together - whenever JavaScripts .call or .apply method is used, THIS  is explicitly defined


5. Why do we need super() in an extended class?
super() tells a parent’s constructor to be concerned with the child’s attributes and abstracts away the Object.create(this, Class) syntax that is trickier to understand.

You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade. 

## Instructions

### Task 1: Project Set Up

> This section should include instruction for the sprint challenge. These should only cover things that are _not_ being evaluated by the challenge itself, e.g. environment/project setup, link to a starter project, etc. In general, this will be the following Git fork, clone, branch, commit, push, create pull request flow, though may need to be adapted for some specific challenges.

- [X] Create a forked copy of this project
- [X] Add your team lead as collaborator on Github
- [X] Clone your OWN version of the repository (Not Lambda's by mistake!)
- [X] Create a new branch: git checkout -b `<firstName-lastName>`.
- [X] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly
- [X] Push commits: git push origin `<firstName-lastName>`

### Task 2: Project Requirements

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

#### Task A: Objects and Arrays

Test your knowledge of advanced array methods and callbacks.
* [ ] Use the [arrays-callbacks.js](challenges/arrays-callbacks.js) link to get started.  Read the instructions carefully!

#### Task B: Closure

This challenge takes a look at closures as well as scope. 
* [ ] Use the [closure.js](challenges/closure.js) link to get started. Read the instructions carefully!

#### Task C: Prototypes

Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

#### Task D: Classes

Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals 

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!

## Submission format

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
- [ ] Add your team lead as a reviewer on the pull-request
- [ ] Your team lead will count the project as complete after receiving your pull-request


