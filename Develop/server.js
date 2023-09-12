const express = require('express');
const routes = require('./routes');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});


// GIVEN a functional Express.js API

// WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
// ... added to .env file DONE
// THEN I am able to connect to a database using Sequelize DONE

// WHEN I enter schema and seed commands
// -- web instructions said to run the schema manually in mysql DONE
// -- "seed" command is "npm run seed" WORKS! DONE

// THEN a development database is created and is seeded with test data -- DONE!

// Instructions say to use MYSQL shell commands to run the schema.sql file.
// To start MYSQL: mysql.server start
// To login to MYSQL: mysql -u root -p .....
// To run the schema file: source [path to file]
// To "seed" use npm run seed (it is in the package.json file)

// WHEN I enter the command to invoke the application  -- npm run start
// THEN my server is started and the Sequelize models are synced to the MySQL database


// WHEN I open API GET routes in Insomnia Core for categories, products, or tags
// THEN the data for each of these routes is displayed in a formatted JSON

// WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
// THEN I am able to successfully create, update, and delete data in my database


/*
MySQL schema is created. schema.sql
Problems when attempting npm run seed:
  Sequelize is trying to drop tables, but can't due to foreign key constraints.
  Attempted a workaround by ignoring foreign key constraints during the sync step.
  Now proceeding, but sequelize isn't seeing all of the table fields
  AND is not seeding the data from the seed files.

Also, not sure how to incorporate the validation steps in the schema.sql.



*/