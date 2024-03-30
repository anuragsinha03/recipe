/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

function Recipe() {
	const [recipe, setRecipe] = useState({});
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`http://localhost:3000/recipes/${id}`)
			.then(res => {
				setRecipe(res.data.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	const handleDeleteRecipe = () => {
		axios
			.delete(`http://localhost:3000/recipes/${id}`)
			.then(() => {
				navigate("/recipes");
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<div className='flex flex-col justify-center items-center min-h-[100vh] '>
			<div className='flex flex-col justify-around items-start border-2 border-black h-[50vh] w-[30vw] p-8 hover:shadow-lg'>
				<div className='flex flex-col gap-2'>
					<Link
						to='/recipes'
						className='bg-slate-300 px-4 py-[5px] w-[60px]'>
						👈🏻
					</Link>
					<div className='text-2xl font-semibold'>
						{recipe.dishName}
					</div>
					<div className='text-lg text-slate-600'>
						{recipe.cuisineName}
					</div>
					<div>{recipe.stepsToCook}</div>
				</div>

				<div className='flex flex-col items-start'>
					<button className='bg-yellow-400 px-4 text-xl'>Edit</button>
					<button
						onClick={handleDeleteRecipe}
						className='bg-red-400 px-4 text-xl'>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
}

export default Recipe;
