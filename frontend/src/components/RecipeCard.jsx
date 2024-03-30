/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
	return (
		<div className='w-[45vh] border-2 px-6 py-8 hover:shadow-lg'>
			<h2 className='text-2xl font-semibold'>{recipe.dishName}</h2>

			<h3 className=' font-semibold'>{recipe.cuisineName}</h3>

			<h3>
				<span className='font-semibold'>Instructions:</span>{" "}
				{recipe.stepsToCook}
			</h3>

			<Link
				className='text-blue-700'
				to={`/recipes/${recipe._id}`}>
				View More
			</Link>
		</div>
	);
}

export default RecipeCard;
