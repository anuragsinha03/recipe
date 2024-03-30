import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import RecipeCard from "../../components/RecipeCard";

function Recipes() {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3000/recipes")
			.then(res => {
				setRecipes(res.data.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<h1 className='text-3xl text-center my-8'>Recipes</h1>
			<Link
				to={"/recipes/add"}
				className='px-4 py-2 w-[80px] bg-slate-300 font-semibold'>
				Add +
			</Link>
			<div className='flex justify-start flex-wrap gap-4 my-8 mx-8'>
				{recipes.map((recipe, index) => {
					return (
						<RecipeCard
							key={index}
							recipe={recipe}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Recipes;
