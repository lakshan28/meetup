import express from "express";
import dbConfig from "./config/db";
import middlewaresConfig from "./config/middlewares";
import { MeetupRoutes } from "./modules/meetups";

const app = express();

// DataBase
dbConfig();
//Middlewars
middlewaresConfig(app);

app.use("/api", [MeetupRoutes]);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`App listen to port: ${PORT}`);
  }
});
