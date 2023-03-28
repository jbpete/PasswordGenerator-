# Bootcamp Challenge3

## Description
The purpose of this project was to apply what I have learned about javascript. I was given starter code for a password generator. I had to make use of the knowledge I have gained to create variables, if/else statements, and for loops to create a javascript function that could generate a random password based on certain user inputted criteria.


## Screenshots

1.

![Variables1](https://user-images.githubusercontent.com/126288123/228390166-5cdd6d8d-a789-4b65-ab53-de1577dd1457.PNG)

This picture details the first set of variables I had to create in order to store the characters of the different criteria.

2. 

![Function1](https://user-images.githubusercontent.com/126288123/228390220-b9c05162-f83a-4cd5-995e-ff7b569f5c44.PNG)

![forLoop](https://user-images.githubusercontent.com/126288123/228390319-025b2e2e-ea66-4b89-bb27-d560a653b3de.PNG)


These pictures details the first function that actually generates the password. First, we declare variables that will store the user input. We create two more variables to store the password and the criteria and we set those to empty strings. The following if statement checks to ensure that the user inputted length is within the acceptable range and each respective statement checks to see if the user selected on of the criteria. The variable "criteria" is then used to store the selected criteria.

The foor loop then takes the stored criteria, uses Math.random to create a random password based on the user inputted passLength.

3.

![writePassword1](https://user-images.githubusercontent.com/126288123/228390843-a7758837-b24f-46f9-b1ae-bff595b3428a.PNG)

This picture shows the function that actually displays the password to the screen. The function will run out generatePassword function and store it in password. We then grab the html element setting it to variable passwordText using querySelector. We then set passwordTexts value to password.

4.

![eventListener](https://user-images.githubusercontent.com/126288123/228391322-4b0d5e23-28e4-49c3-a756-6b4849ea9397.PNG)

Lastly, we create an eventListenver to run out writePassword function when the generate button is clicked.


