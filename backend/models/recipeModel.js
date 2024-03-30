import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
	dishName: {
		type: String,
		required: true,
	},
	cuisineName: {
		type: String,
		required: true,
	},
	stepsToCook: {
		type: String,
		required: true,
	},
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
