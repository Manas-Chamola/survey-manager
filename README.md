# Survey Manager

This is a Simple Survey manager app which can be used to generate multiple surveys, mail them to the users and get their feedbacks. 

Each survey needs a credit which can be purchased with Credit/Debit card payment.

It displays the list of surveys generated, has a survey form to create new surveys and the feedback is recorded from recipients as Yes/No.

## Screenshots

![alt text](https://github.com/Manas-Chamola/survey-manager/blob/master/demo_images/Landing.jpg?raw=true)


![alt text](https://github.com/Manas-Chamola/survey-manager/blob/master/demo_images/Payment.jpg?raw=true)


![alt text](https://github.com/Manas-Chamola/survey-manager/blob/master/demo_images/Surveys.jpg?raw=true)


![alt text](https://github.com/Manas-Chamola/survey-manager/blob/master/demo_images/NewSurvey.jpg?raw=true)


![alt text](https://github.com/Manas-Chamola/survey-manager/blob/master/demo_images/Mail.jpg?raw=true)  

## Features

* Google OAuth Authentication (Passport.js)
* Survey List
* Credits
* Credit/Debit card payment for buying credits (Stripe)
* New Survey Form
* Sending Emails (Sendgrid)
* Recording Feedback 

## Demo: [Click Here](https://lit-bastion-46156.herokuapp.com/)

## Setup

### 1.
```
git clone https://github.com/Manas-Chamola/survey-manager
``` 

### 2.
Create a new MongoDB Cloud Database, new project in Google developer console and generate Authorization keys    

### 3.
Create a new Stripe API key by registering on Stripe website

### 4.
Create a new Sendgrid API key. Go go to the mail settings and enable event webhook.
In HTTP URL, put your address generated after running npx ngrok localhost:5000 and check clicked option. 
Also, register your email under sender authentication. 

### 5.
Go to the config folder and create a file called dev.js and put all the keys there.

### 6.
```
npm start

or

yarn start
```