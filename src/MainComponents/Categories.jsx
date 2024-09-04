import React, { useState } from 'react'
import '../App.css'
import ArrowRight from '../pics/arrow-right.png'

const Categories = () => {

	const [activeCategory1, setActiveCategory1] = useState(false)
	const [activeCategory2, setActiveCategory2] = useState(false)
	const [activeCategory3, setActiveCategory3] = useState(false)
	const [activeCategory4, setActiveCategory4] = useState(false)

	return (
		<div id='categories' className='bg-gradient-to-r from-[#F7F8F8] to-[#ACBB78] py-10'>
			<div className='flex justify-center'>

				{/* FRAME */}
				<div className='p-8 shadowBoxes rounded-lg w-[90vw]'>
					<h1 className='text-3xl font-bold pb-8 pt-2'>Kategoriyalar</h1>

					{/* GRID */}
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-white text-center gap-y-6 gap-x-6 px-2">
						
						<div className='flex justify-center shadowBoxes rounded-xl'>
							<div onMouseEnter={() => setActiveCategory1(true)} onMouseLeave={() => setActiveCategory1(false)} className='category1 h-[250px] w-full rounded-xl'>
								<div className={activeCategory1 ? 'opacity-0 absolute top-0 transition-all duration-500' : 'h-full flex items-end transition-all duration-500'}>
									<div className='flex justify-between w-full text-white text-2xl font-bold py-4 px-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-b-xl'>
										<h1>Gilamlar</h1>
										<img className='w-8 h-8 arrows shadow-xl rounded-xl' src={ArrowRight} alt="" />
									</div>
								</div>
								<div className={activeCategory1 ? 'cursor-pointer h-full flex justify-center items-center bg-[#405855] bg-opacity-20 backdrop-blur-sm rounded-xl opacity-100 transition-all duration-500' : 'opacity-0 absolute top-0'}>
									<img className='w-12 h-12 arrows shadow-xl rounded-xl' src={ArrowRight} alt="" />
								</div>
							</div>
						</div>

						<div className='flex justify-center shadowBoxes rounded-xl'>
							<div onMouseEnter={() => setActiveCategory2(true)} onMouseLeave={() => setActiveCategory2(false)} className='category1 h-[250px] w-full rounded-xl'>
								<div className={activeCategory2 ? 'opacity-0 absolute top-0 transition-all duration-500' : 'h-full flex items-end transition-all duration-500'}>
									<div className='flex justify-between w-full text-white text-2xl font-bold py-4 px-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-b-xl'>
										<h1>Kovrolin</h1>
										<img className='w-8 h-8 arrows shadow-xl rounded-xl' src={ArrowRight} alt="" />
									</div>
								</div>
								<div className={activeCategory2 ? 'cursor-pointer h-full flex justify-center items-center bg-[#405855] bg-opacity-20 backdrop-blur-sm rounded-xl opacity-100 transition-all duration-500' : 'opacity-0 absolute top-0'}>
									<img className='w-14 h-14 arrows shadow-xl rounded-xl' src={ArrowRight} alt="" />
								</div>
							</div>
						</div>


						<div className='flex justify-center shadowBoxes rounded-xl'>
							<div onMouseEnter={() => setActiveCategory3(true)} onMouseLeave={() => setActiveCategory3(false)} className='category1 h-[250px] w-full rounded-xl'>
								<div className={activeCategory3 ? 'opacity-0 absolute top-0 transition-all duration-500' : 'h-full flex items-end transition-all duration-500'}>
									<div className='flex justify-between w-full text-white text-2xl font-bold py-4 px-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-b-xl'>
										<h1>Gazon</h1>
										<img className='w-8 h-8 arrows shadow-xl rounded-xl' src={ArrowRight} alt="" />
									</div>
								</div>
								<div className={activeCategory3 ? 'cursor-pointer h-full flex justify-center items-center bg-[#405855] bg-opacity-20 backdrop-blur-sm rounded-xl opacity-100 transition-all duration-500' : 'opacity-0 absolute top-0'}>
									<img className='w-14 h-14 arrows shadow-xl rounded-xl' src={ArrowRight} alt="" />
								</div>
							</div>
						</div>
						{/* 4 */}
						<div className='flex justify-center shadowBoxes rounded-xl'>
							<div onMouseEnter={() => setActiveCategory4(true)} onMouseLeave={() => setActiveCategory4(false)} className='category1 h-[250px] w-full rounded-xl'>
								<div className={activeCategory4 ? 'opacity-0 absolute top-0 transition-all duration-500' : 'h-full flex items-end transition-all duration-500'}>
									<div className='flex justify-between w-full text-white text-2xl font-bold py-4 px-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-b-xl'>
										<h1>Modern</h1>
										<img className='w-8 h-8 arrows shadow-xl rounded-xl' src={ArrowRight} alt="" />
									</div>
								</div>
								<div className={activeCategory4 ? 'cursor-pointer h-full flex justify-center items-center bg-[#405855] bg-opacity-20 backdrop-blur-sm rounded-xl opacity-100 transition-all duration-500' : 'opacity-0 absolute top-0'}>
									<img className='w-14 h-14 arrows shadow-xl rounded-xl' src={ArrowRight} alt="" />
								</div>
							</div>
						</div>




					</div>







					<div className='sm:flex justify-center sm:space-x-6 space-y-6 sm:space-y-0'>
						{/* 1 */}
						{/* <div className='flex justify-center shadowBoxes rounded-xl'>
							<div onMouseEnter={() => setActiveCategory1(true)} onMouseLeave={() => setActiveCategory1(false)} className='category1 h-[330px] w-[85vw] sm:w-[44vw] rounded-xl'>
								<div className={activeCategory1 ? 'opacity-0 absolute top-0 transition-all duration-500' : 'h-full flex items-end transition-all duration-500'}>
									<div className='flex justify-between w-full text-white text-2xl font-bold py-4 px-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-b-xl'>
										<h1>Gilamlar</h1>
										<img className='w-8 h-8 arrows shadow-xl rounded-xl' src={ArrowRight} alt="" />
									</div>
								</div>
								<div className={activeCategory1 ? 'cursor-pointer h-full flex justify-center items-center bg-[#405855] bg-opacity-20 backdrop-blur-sm rounded-xl opacity-100 transition-all duration-500' : 'opacity-0 absolute top-0'}>
									<img className='w-14 h-14 arrows shadow-xl rounded-xl' src={ArrowRight} alt="" />
								</div>
							</div>
						</div> */}
						{/* 2 */}
						{/* <div className='flex justify-center shadowBoxes rounded-xl'>
							<div onMouseEnter={() => setActiveCategory2(true)} onMouseLeave={() => setActiveCategory2(false)} className='category1 h-[330px] w-[85vw] sm:w-[44vw] rounded-xl'>
								<div className={activeCategory2 ? 'opacity-0 absolute top-0 transition-all duration-500' : 'h-full flex items-end transition-all duration-500'}>
									<div className='flex justify-between w-full text-white text-2xl font-bold py-4 px-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-b-xl'>
										<h1>Kovrolin</h1>
										<img className='w-8 h-8 arrows shadow-xl rounded-xl' src={ArrowRight} alt="" />
									</div>
								</div>
								<div className={activeCategory2 ? 'cursor-pointer h-full flex justify-center items-center bg-[#405855] bg-opacity-20 backdrop-blur-sm rounded-xl opacity-100 transition-all duration-500' : 'opacity-0 absolute top-0'}>
									<img className='w-14 h-14 arrows shadow-xl rounded-xl' src={ArrowRight} alt="" />
								</div>
							</div>
						</div> */}
					</div>
					<div className='sm:flex justify-center sm:space-x-6 space-y-6 sm:space-y-0'>
						{/* 3 */}
						{/* <div className='flex justify-center shadowBoxes rounded-xl'>
							<div onMouseEnter={() => setActiveCategory3(true)} onMouseLeave={() => setActiveCategory3(false)} className='category1 h-[330px] w-[85vw] sm:w-[44vw] rounded-xl'>
								<div className={activeCategory3 ? 'opacity-0 absolute top-0 transition-all duration-500' : 'h-full flex items-end transition-all duration-500'}>
									<div className='flex justify-between w-full text-white text-2xl font-bold py-4 px-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-b-xl'>
										<h1>Gazon</h1>
										<img className='w-8 h-8 arrows shadow-xl rounded-xl' src={ArrowRight} alt="" />
									</div>
								</div>
								<div className={activeCategory3 ? 'cursor-pointer h-full flex justify-center items-center bg-[#405855] bg-opacity-20 backdrop-blur-sm rounded-xl opacity-100 transition-all duration-500' : 'opacity-0 absolute top-0'}>
									<img className='w-14 h-14 arrows shadow-xl rounded-xl' src={ArrowRight} alt="" />
								</div>
							</div>
						</div> */}
						{/* 4 */}
						{/* <div className='flex justify-center shadowBoxes rounded-xl'>
							<div onMouseEnter={() => setActiveCategory4(true)} onMouseLeave={() => setActiveCategory4(false)} className='category1 h-[330px] w-[85vw] sm:w-[44vw] rounded-xl'>
								<div className={activeCategory4 ? 'opacity-0 absolute top-0 transition-all duration-500' : 'h-full flex items-end transition-all duration-500'}>
									<div className='flex justify-between w-full text-white text-2xl font-bold py-4 px-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-b-xl'>
										<h1>Modern</h1>
										<img className='w-8 h-8 arrows shadow-xl rounded-xl' src={ArrowRight} alt="" />
									</div>
								</div>
								<div className={activeCategory4 ? 'cursor-pointer h-full flex justify-center items-center bg-[#405855] bg-opacity-20 backdrop-blur-sm rounded-xl opacity-100 transition-all duration-500' : 'opacity-0 absolute top-0'}>
									<img className='w-14 h-14 arrows shadow-xl rounded-xl' src={ArrowRight} alt="" />
								</div>
							</div>
						</div> */}
					</div>

				</div>
			</div>

		</div>
	)
}

export default Categories