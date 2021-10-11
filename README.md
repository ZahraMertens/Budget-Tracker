# PWA Budget-Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![Contributor](https://img.shields.io/badge/Contributor-1-green.svg) ![Nodejs](https://img.shields.io/badge/AppWith-NodeJS-red.svg) ![JavaScript](https://img.shields.io/badge/AppWith-ExpressJS-green.svg) ![Nodejs](https://img.shields.io/badge/Database-MongoDB-green.svg)

## General Information
 
* [Deployed Web Application](https://sheltered-mountain-98720.herokuapp.com/)
* [GitHub repository of Budget-Tracker](https://github.com/ZahraMertens/Budget-Tracker.git)


## Table of Contents
1. [General Information](#general-information)
2. [Task Description](#task-description)
3. [Mock-Up](#mock-up)
4. [Installation Instructions](#installation-instructions)
5. [Technologies Used](#technologies-used)
6. [User Story](#user-story)
7. [Business Context](#business-context)
8. [Usage](#usage)
9. [Credits](#credits)


## Task Description

The Web Application is a Budget-Tracker which allows a user to to able to keep track of their expenses. The user is able to add and substract funds into the tracker and a graph displays the progress of the users expenses. The web application is also a PWA (Progressive Web App) which allows the user to add the webpage as a bookmark on the homescreen of the phone or desktop and can operate offline.

## Mock-Up

🎥 The GIF shows the Web Applications offline functionality:

![Code-Demo](./assets/gif.gif)

![Screenshot](./assets/screenshotApp.png) ![Screenshot](./assets/screenshotApp2.png)

## Installation Instructions

* First the user must clone the [GitHub Repo](https://github.com/ZahraMertens/Fitness-Tracker.git) on its OS.

* Open the repository on your device with VS Code (or any other program)

* Open the command line at the folder location OR the integrated terminal 

* First, you MUST install the npm packages by running "npm install" in the terminal

* To initialize the database the user must have mongoDB installed and then run "mongo" and "use workout" in the terminal

* To seed the database, the user must run "node seeders/seed" in the terminal.

* To un the application on your local device the user must run "npm start" in the terminal and will see a link such as "http://localhost:27017" if the user runs the link in the browser the application should run on the local host.


## Technologies Used

* JavaScript

* Node.JS

* Express.JS

* MongoDB

* Dotenv

* Mongoose

* Morgan

* MongoDB Atlas (Cloud)

## User Story

* As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

## Business Context

A consumer will reach their fitness goals more quickly when they track their workout progress.

## Usage

* WHEN I open the application in the browser THEN I am presented with a data summary of the last workout which displays the sum of the exercises criteria such as Date, Total Workout Duration, Exercises Performed, Total Weight Lifted, Total Sets Performed and Total Reps Performed

* WHEN I see the page which summarizes the last workout data THEN I can choose to either create a New Workout Plan or Continue the last workout plan

* WHEN I click on the "new workout" button THEN I can add a new exercise

* WHEN I decide to add a new exercise I can choose from two different exercise types which are cardio and resistance

* WHEN I choose my exercise to be cardio THEN I can enter the name, distance and duration of the exercise

* WHEN I choose my exercise to be resistance THEN I can enter the name, weight, sets, reps and duration of the exercise

* WHEN I insert all values in the input fields THEN I can choose to complete the workout plan and the exercise gets added to the workout and I will be redirected to the page where the workout summary is displayed. I can then see that my new exercise has been added to the workout. If I choose to add an exercise than I stay on the same page in order to be able to add more exercises to the workout and my exercise I have created gets added to the workout plan

* WHEN I click in the Dashboard Navbar element THEN I am taken to a page which shows to graphs. The first graph shows the Workout durations in minutes for the past 7 days and the second graph shows the weight lifted over the past 7 days. 


## Credits

* https://www.mongodb.com/
* https://docs.mongodb.com/manual/tutorial/query-documents/
* https://mongoosejs.com/docs/
* https://mongoosejs.com/docs/api.html#aggregate_Aggregate
* https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/
* https://docs.mongodb.com/manual/reference/operator/aggregation/sum/


© 2021 Zahra Mertens, Fitness-Tracker