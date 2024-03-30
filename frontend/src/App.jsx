import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Recipes from "./pages/recipes/Recipes";
import Recipe from "./pages/recipe/Recipe";
import AddNewRecipe from "./pages/addnewrecipe/AddNewRecipe";

function App() {
	return (
		<Routes>
			<Route
				path='/'
				element={<Home />}
			/>
			<Route
				path='/recipes'
				element={<Recipes />}
			/>
			<Route
				path='/recipes/:id'
				element={<Recipe />}
			/>
			<Route
				path='/recipes/add'
				element={<AddNewRecipe />}
			/>
		</Routes>
	);
}

export default App;

