import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use();
const port = process.env.port || 5000;

app.get("/", (request, response) => {
  response.send("Hello world!");
});

app.listen(port, () => console.log(`Running on port ${port}`));
