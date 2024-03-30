import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AddNewRecipe() {
	const [dishName, setDishName] = useState("");
	const [cuisineName, setCuisineName] = useState("");
	const [stepsToCook, setStepsToCook] = useState("");

	const handleAddNewRecipe = () => {
		console.log("object");
	};

	return (
		<div className='h-[100vh] flex justify-center items-center'>
			<div className='flex flex-col justify-center items-center gap-8 border-2 border-black p-8'>
				<Link
					to='/recipes'
					className='bg-slate-300 px-4 py-[5px] w-[60px]'>
					👈🏻
				</Link>
				<div className='text-2xl font-semibold'>Add New Recipe</div>
				<form onSubmit={handleAddNewRecipe}>
					<div className='flex flex-col gap-4 w-[30vw]'>
						<div className='flex flex-col'>
							<label htmlFor=''>DishName</label>
							<input
								className='border-2 border-black h-[40px] '
								type='text'
								value={dishName}
								onChange={e => setDishName(e.target.value)}
							/>
						</div>

						<div className='flex flex-col'>
							<label htmlFor=''>CuisineName</label>
							<input
								className='border-2 border-black h-[40px] '
								type='text'
								value={cuisineName}
								onChange={e => setCuisineName(e.target.value)}
							/>
						</div>

						<div className='flex flex-col'>
							<label htmlFor=''>StepsToCook</label>
							<input
								className='border-2 border-black h-[40px] '
								type='text'
								value={stepsToCook}
								onChange={e => setStepsToCook(e.target.value)}
							/>
						</div>

						<div>
							<input
								className='border-black border-2 py-2 px-4'
								type='submit'
								value='Submit'
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default AddNewRecipe;
