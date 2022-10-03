This is the README.md file for Beelancer's backend system!

Prerequesites to test the system:

1. Postman: to test the API.
2. MongoDB Compass: to view data collections.

- Assumed that your computer has already install node module and mongodb.

1. Open "Beelancer_main" folder with IDE.
2. "cd backend" in the terminal to change directory.
3. run "npm i nodemon mongoose express cors dotenv jsonwebtoken bcryptjs joi @hapi/joi multer fs --save" (copy and paste this command into the terminal)
4. run the command "npm start".

- Steps to test on Postman:

1. Sign up by access this link with Postman using method POST "localhost:8080/api/user/signup".
2. Sign in by access this link with Postman using method POST "localhost:8080/api/user/signin".
3. Copy the token return by the system and paste it into the value of the "auth-token" key on Postman's headers tab.
4. Enter bodies to test the API which can be found in PostmanBodiesForTest.txt.
5. Browse the APIpaths.txt and PostmanBodiesForTest.txt to test others API.

- To view data collection use the following URI with DB compass: "mongodb+srv://mythael0902:myth090298@democluster.u5r7xf4.mongodb.net/test".
