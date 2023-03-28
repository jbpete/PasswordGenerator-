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






1. Header and Navaigation Links
![image](https://user-images.githubusercontent.com/126288123/226207743-d319f1bd-5c13-4456-8f70-3312ce7b5afe.png)

I created a header with my name and navigation links to each of the content sections. The links work and will scroll down to the relevant location.

2. About Me
 ![image](https://user-images.githubusercontent.com/126288123/226207820-a9aff971-3c8a-4266-b576-7fba728e7b54.png)

I created an "About Me" section that is complete with a recent picture as well of a descripting of my schooling, my experience, and the purpose of this site.

3. Work 
![image](https://user-images.githubusercontent.com/126288123/226207864-15a44295-2639-4c0c-b01f-21f43c539e95.png)

I created a section for the work I have accomplished. Currently I have just used placeholders until I can replace with real deployed applications.

4. Contact Info and Footer
![image](https://user-images.githubusercontent.com/126288123/226208089-8f6ec06e-8e5c-4038-9273-0e9c7896e091.png)

Lastly, I created a contact me section complete with my phone number and email.

Deployed Application Link: https://jbpete.github.io/Challenge2/

