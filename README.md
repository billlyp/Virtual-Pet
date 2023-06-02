<h1 align="center">Virtual pet coursework</h1>

<h3 align="center">This document goes over:</h3>

- The core functionalities and features within this project
- How to setup and start the project
- The design and implentation choices for this project
- Future development ideas for this project

## Table of contents

- [Quick start](#quick-start)
- [How to play](#how-to-play)
- [Game design](#game-design)
- [Future development](#future-development)

## Quick start

To install the project, run the following:
```bash 
npm i
```
To setup the project, run the following:
```bash
npm run setup
```
To start the project, run the following:
```bash
npm start
```
For the project to be able to run correctly ensure that the local storage for your local host page has been cleared.

<br>The project can be launched within a browser of your choice on ``` localhost:8080``` or on a mobile device by launching ```x.x.x.x:8080``` replacing the ```x.x.x.x``` with the IP address of the device running the node project.

<br>- To get the IP of a Windows device on the command line run the following command: ```ipconfig``` and it will be next to IPv4 address.

<br>- To get the IP of a Apple device on the command line run the following command: ```ifconfig | grep "inet " | grep -v 127.0.0.1``` and will be next to inet.

## How to play
Providing that local storage for ``` localhost:8080``` is cleared, you will be presented with a screen which will prompt the user to create a pet. Once the user has made their choices they are able to confirm their choices and the game begins!
<br>The screen will then present the user with the pet they just created and a variety of options they can make to interact with their pet.
- Edit their pet, lets the user edit their pet
- Feed their pet, increases the pets hunger value by a number between 0 and 10
- Sleep their pet, the pet will sleep, which increases the sleep value but reduces the other values of the pet, and will be greater the longer the pet is left asleep.
- Clean their pet, sets the cleanliness of the pet to 100.
- Play with their pet, plays a minigame which the user can interact with.

Once a value reaches 0 the pet will die and the user will then have to create a new pet.

## Game design

<b>Index</b>
<br>When the page is initially loaded the ``` init``` function is run. The first function that is ``` setupDisplay```.
<br>```setupDisplay``` is the function which start to create the UI for the user. The IF statement is for checking whether the user has a pet currently alive. If the local storage is empty the user is then prompted to create a pet. If there is 2 items is local storage the only way this would be possible is the user closes the game whilst on the edit pet page, this is why the pet from local storage is removed, and then local storage will only have the ID of the pet on the database and it can be loaded.
<br>```loadPet``` is a asynchronous function which loads the users pet from a postgres database. The function uses a POST method which sends the ID to the server and on the server runs a function on the database to load the pet object. This is then returned into the original loadPet function which is then returned and stored as a global variable, pet.
<br>Within the ``` game``` function the IF statement for stopGameRunning is there because the sleepPet function is within the main page. Therefore, how I  stopped the values being reduced whilst the pet is asleep is set stopGameRunning to true, which will stop the game function from running.
<br>
Text
## Future development
- The user will be able to have multiple pets at once, this can be done by giving the user a unique ID which is stored in local storage then within have a database which contains user ID's and PetID's.
- A leaderboard of pets which have lived for the longest, this can be done implemented within the code when the pets dies.
- A few more minigames, for example tug of war.
## References
- Catalyststuff. (n.d.). Cute dog sticking her tongue out cartoon icon illustration [Vector Image]. https://www.freepik.com/free-vector/cute-dog-sticking-her-tongue-out-cartoon-icon-illustration_12681147.htm#query=puppy&position=2&from_view=keyword&track=robertav1_2_sidr