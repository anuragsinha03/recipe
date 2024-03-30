import express from "express";
import Recipe from "./../models/recipeModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const recipes = await Recipe.find({});
		res.status(200).json({
			success: true,
			length: recipes.length,
			data: recipes,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			success: false,
			message: err.message,
		});
	}
});

router.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;

		const recipe = await Recipe.findById(id);

		if (recipe != null) {
			return res.status(200).json({
				success: true,
				data: recipe,
			});
		}

		res.status(404).json({
			success: false,
			message: `Recipe with ID ${id} not found`,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			success: false,
			message: err.message,
		});
	}
});

router.post("/", async (req, res) => {
	try {
		if (
			!req.body.dishName ||
			!req.body.cuisineName ||
			!req.body.stepsToCook
		) {
			res.status(500).json({
				success: true,
				message:
					"Enter all details with Dish name, cuisine name and steps to cook it!",
			});
		}

		const newRecipe = {
			dishName: req.body.dishName,
			cuisineName: req.body.cuisineName,
			stepsToCook: req.body.stepsToCook,
		};

		const recipe = await Recipe.create(newRecipe);
		res.status(200).json(recipe);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: err.message });
	}
});

router.patch("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const recipe = await Recipe.findByIdAndUpdate(id, req.body);
		res.status(200).json({
			success: true,
			message: "Recipe updated successfully",
			data: recipe,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			success: false,
			message: err.message,
		});
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const recipe = await Recipe.findByIdAndDelete(id);
		res.status(201).json({
			success: true,
			message: "Recipe deleted successfully",
			data: recipe,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			success: false,
			message: err.message,
		});
	}
});

export default router;
