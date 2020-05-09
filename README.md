# Random-Password-Generator

This app should randomly generate a password with char set that we choose to use,
and leave out char set that we decline to use.

Logic :

   Clicking on generate password button
    -we should get a prompt about length
      -we should create our char set criterias
      -we should put  event listener on the generate btn
      
    -upon deciding about our password length we should get a series of prompt about what we want to use 
    in our password
    -we should put a condition that password length should not be less than 8 char ant do not exceed 128 char
       -we can use if statement to check if user input falls within our condition
       
    -if we select a certain criteria that we want in our password then inculde that criteria in our password
    -if we do not select a certain criteria then leave that criteria out
       -we can use IF statemnt to check which of our criteria is selected/true
       
    -if we dont select any criteria  then alert us to use at least one criteria to enable password generation
    -when criteria is selected we should randomly pick a char from that set
    -when the password is generated 
    -then display password on the page
