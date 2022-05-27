# World Bank Data

Welcome to Rulers-Lite Week 10 project:

The brief was to create a prototype data visualisation dashboard for The World Bank that displays graphical data on World Development Indicators. 
We were tasked to include as a minimum viable product:
 - Log In Feature
 - Search Functionality (One indicator, one country)
 - Search History Functionality
In addition to these core features, we were given a number of other User Stories to fulfil and the goal was to create the best possible application within one week. 


## Contents

 - [Objective](#Objective)
 - [Our Team](#Our-Team)
 - [Database](#Database)
 - [User Manual](#User-Manual)
 - [Technical Manual](#Technical-Manual)


## Objective

There were 1344 unique indicators available in the database from The World Bank, resulting in 5.66m rows of data. The main focus of the project was to return a visual data consturcted using the raw data given in the database. 

Being able to select different countries to see what the regional differences are as well selecting different indicators based on your query. 

## Our Team

**Daniel - Project Manager**<br />
<br />
**Kamilah - Dev Ops/Software Architecture**<br />
<br />
**Milan - QA Tester**<br />

## Database

Our Database is based on the World Development Indicators data from The World Bank, which contain over a thousand annual indicators of
economic development from hundreds of countries around the world. 
The database source can be found [here!](https://www.kaggle.com/kaggle/world-development-indicators)

## User Manual

The Home page contains the general information about the website, each page has a navigation bar at the top of the website containing 3 buttons allowing you to navigate across our website, the first 2 buttons are the History and Search button, and the last button is to Log Out of the page .<br /><br />
First we will register a new account so that we can make the most of the website, by clicking on the register button shown, you can navigate to the Register page. <br /><br />

The Register page lets you register a new account with us!<br />
The Register form requires 4 fields:
- E-Mail
- Username
- Password
- Comfirm you Password

These 4 fields each have validation to make sure your username and email is unique and that your passwords are matching! <br/>
If you don't follow the rules when creating an account, you will be met with an error.

- Your Password should match the confirmation password

- Your Password must be at least 6 characters, failing to do so will show this message...

- When you successfully fill out the registration form you will be redirected to our log in page to get signed in.

- The Log in page lets you log in to an account <br />

- The Log in page requires 2 fields:
Username:
Password:

- The username needs to match a username in the database, an error will appear if the username doesn't exist

- If the password isn't correct for that user, this error will appear

- When you successfully log in, you will you will be redirected to the search page

- You need to fill ALL input fields that are available so that the search knows what it's looking for, otherwise a graph will not be shown. 
**At the moment auto-fill is not a feature and indicators must be typed out perfectly but this is something we plan to work on in the future**
<br/><br/>
**Also adding multiple countries against one indicator or multiple indicators against one country has not yet been implemented, please do not use the add country/indicator buttons** 
<br />

When filling in the search form with the correct information, a graph will appear that will display the country's data on that indicator point
<br />

The history page is found when you click on the history button displayes on the Navigation bar.

- Here it will show you all of your previous searches that have been successful and have produced a graph, including the date that you made the search and the countires and indicators you used.<br/>

-And finally if you wish to log out, click on the log out button and you will be logged out of your account <br/><br/>


## Technical Manual

**Currently in progress...**



