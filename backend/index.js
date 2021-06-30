import express from "express";
const port = process.env.port || 5000;
import mongoose from "mongoose";
import cors from "cors";
const app = express();

app.use(express.json());

import postRoutes from "./routes/posts.js";

app.use("/posts", postRoutes);

const CONNECTION_URL = `mongodb+srv://ajt:Admin123$@cluster0.g3jvr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose
    .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port, () => console.log(`Server running on port ${port}`)))
    .catch(error => console.log(error.message));
