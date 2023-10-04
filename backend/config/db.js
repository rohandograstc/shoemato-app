import { Sequelize } from "sequelize";
import databaseConfig from "./database.js";

const environment = process.env.NODE_ENV || "development";
const config = databaseConfig[environment];

// config.logging = (msg) => console.log(msg); // Add this line
config.logging = false;

const sequelize = new Sequelize(config);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

  // sequelize.sync({ force: true }).then(() => {
  //   console.log('Database synced (in development)');
  // });

export default sequelize;
