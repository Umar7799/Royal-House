import React from 'react'
import '../../App.css'

import Pic2 from '../../pics/randd.jpg'

const AllProducts = () => {
	return (
		<div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8 px-16 py-10 sm:px-10 sm:py-6 md:px-4">

				{/* 1 */}
				<div className='filteredProductImage text-center rounded-xl bg-gray-200 shadowBoxes hover:shadow-xl duration-300'>
					<img className='rounded-xl' src={Pic2} alt="" />
					<div className=''>
						<div className='flex pl-4'>
							<h1>AllProducts</h1>
						</div>
						<div className='flex'>
							<button className='brandName bg-gray-400 text-4xl m-2 px-4 rounded-lg'>Aurora</button>
						</div>
						<div className='flex justify-between px-4 items-end pb-4 sm:pb-2'>
							<h1 className='font-bold'>4.990.000</h1>
							<button className='text-lg rounded-lg p-1 px-2 bg-green-700  text-white font-bold'>Batafsil</button>
						</div>
					</div>
				</div>

				{/* 2 */}
				<div className='filteredProductImage text-center rounded-xl bg-gray-200 shadowBoxes hover:shadow-xl duration-300'>
					<img className='rounded-xl' src={Pic2} alt="" />
					<div className=''>
						<div className='flex pl-4'>
							<h1>Ommabop</h1>
						</div>
						<div className='flex'>
							<button className='brandName bg-gray-400 text-4xl m-2 px-4 rounded-lg'>Aurora</button>
						</div>
						<div className='flex justify-between px-4 items-end pb-4 sm:pb-2'>
							<h1 className='font-bold'>4.990.000</h1>
							<button className='text-lg rounded-lg p-1 px-2 bg-green-700  text-white font-bold'>Batafsil</button>
						</div>
					</div>
				</div>

				{/* 3 */}
				<div className='filteredProductImage text-center rounded-xl bg-gray-200 shadowBoxes hover:shadow-xl duration-300'>
					<img className='rounded-xl' src={Pic2} alt="" />
					<div className=''>
						<div className='flex pl-4'>
							<h1>Discount</h1>
						</div>
						<div className='flex'>
							<button className='brandName bg-gray-400 text-4xl m-2 px-4 rounded-lg'>Aurora</button>
						</div>
						<div className='flex justify-between px-4 items-end pb-4 sm:pb-2'>
							<h1 className='font-bold'>4.990.000</h1>
							<button className='text-lg rounded-lg p-1 px-2 bg-green-700  text-white font-bold'>Batafsil</button>
						</div>
					</div>
				</div>

				<div className='filteredProductImage text-center rounded-xl bg-gray-200 shadowBoxes hover:shadow-xl duration-300'>
					<img className='rounded-xl' src={Pic2} alt="" />
					<div className=''>
						<div className='flex pl-4'>
							<h1>Trend</h1>
						</div>
						<div className='flex'>
							<button className='brandName bg-gray-400 text-4xl m-2 px-4 rounded-lg'>Aurora</button>
						</div>
						<div className='flex justify-between px-4 items-end pb-4 sm:pb-2'>
							<h1 className='font-bold'>4.990.000</h1>
							<button className='text-lg rounded-lg p-1 px-2 bg-green-700  text-white font-bold'>Batafsil</button>
						</div>
					</div>
				</div>

				<div className='filteredProductImage text-center rounded-xl bg-gray-200 shadowBoxes hover:shadow-xl duration-300'>
					<img className='rounded-xl' src={Pic2} alt="" />
					<div className=''>
						<div className='flex pl-4'>
							<h1>Trend</h1>
						</div>
						<div className='flex'>
							<button className='brandName bg-gray-400 text-4xl m-2 px-4 rounded-lg'>Aurora</button>
						</div>
						<div className='flex justify-between px-4 items-end pb-4 sm:pb-2'>
							<h1 className='font-bold'>4.990.000</h1>
							<button className='text-lg rounded-lg p-1 px-2 bg-green-700  text-white font-bold'>Batafsil</button>
						</div>
					</div>
				</div>

				<div className='filteredProductImage text-center rounded-xl bg-gray-200 shadowBoxes hover:shadow-xl duration-300'>
					<img className='rounded-xl' src={Pic2} alt="" />
					<div className=''>
						<div className='flex pl-4'>
							<h1>Trend</h1>
						</div>
						<div className='flex'>
							<button className='brandName bg-gray-400 text-4xl m-2 px-4 rounded-lg'>Aurora</button>
						</div>
						<div className='flex justify-between px-4 items-end pb-4 sm:pb-2'>
							<h1 className='font-bold'>4.990.000</h1>
							<button className='text-lg rounded-lg p-1 px-2 bg-green-700  text-white font-bold'>Batafsil</button>
						</div>
					</div>
				</div>




				{/* <div className='bg-blue-500 text-center flex justify-center items-center rounded-xl'>3</div>
				<div className="row-start-2 bg-blue-500 text-center flex justify-center items-center rounded-xl">4</div>
				<div className="row-start-2 bg-blue-500 text-center flex justify-center items-center rounded-xl">5</div>
				<div className="row-start-2 bg-blue-500 text-center flex justify-center items-center rounded-xl">6</div>
				<div className="row-start-3 bg-blue-500 text-center flex justify-center items-center rounded-xl">10</div>
				<div className="row-start-3 bg-blue-500 text-center flex justify-center items-center rounded-xl">11</div>
				<div className="row-start-3 bg-blue-500 text-center flex justify-center items-center rounded-xl">12</div> */}
			</div>
		</div >
	)
}

export default AllProducts


// bg-no-repeat bg-cover bg-center bg-fixed 