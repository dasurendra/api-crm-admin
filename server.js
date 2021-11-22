import express from "express";
import dotnev from "dotenv";
dotnev.config();
const app = express();
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

//middleware
app.use(helmet());
app.use(cors());

app.use(morgan("tiny"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000;

app.use("/", (req, res) => {
  res.send("send throug api end point server");
});

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`server is runing at http://localhost:${PORT}`);
});
