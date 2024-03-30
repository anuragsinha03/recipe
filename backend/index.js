import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import recipeRoutes from "./routes/recipeRoutes.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.status(200).send("Welcome User");
});

app.use("/recipes", recipeRoutes);

mongoose
	.connect(process.env.MONGOURL)
	.then(() => {
		console.log("MongoDB connected");
	})
	.catch(err => {
		console.log("Err: ", err);
	});

app.listen(process.env.PORT, () => {
	console.log(`Server is running on PORT ${process.env.PORT}`);
});
