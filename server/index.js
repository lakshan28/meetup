import express from "express";
import dbConfig from "./config/db";
import middlewaresConfig from "./config/middlewares";
import { MeetupRoutes, GroupRoutes } from "./modules";

const app = express();

// DataBase
dbConfig();
//Middlewars
middlewaresConfig(app);

app.use("/api", [MeetupRoutes, GroupRoutes]);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`App listen to port: ${PORT}`);
  }
});
