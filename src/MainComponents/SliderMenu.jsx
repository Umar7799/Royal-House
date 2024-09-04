import React, { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css'
import { Link } from 'react-router-dom';


const SliderMenu = () => {
	const [sliderRef, setSliderRef] = useState(null);

	const sliderSettings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2500,
		autoplaySpeed: 2500,
		cssEase: "linear",
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				},
			},

			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 3000,
					autoplaySpeed: 3000,
				},
			},
		],
	}

	return (

		<section className='w-[90vw] px-2 pb-8'>
			<div className='flex justify-between px-4 mb-4 sm:mb-2 md:mb-0 items-center transition-all duration-500'>
				<h1 className='text-2xl md:text-3xl lg:text-4xl text-gray-800 font-bold'>Trend to'plamlar</h1>
				<Link to='FilteredCollections'><h1 className='text-center border border-black shadow-xl px-2 sm:px-4 py-1 rounded-lg cursor-pointer'>Barchasini ko'rish</h1></Link>

			</div>
			<Slider ref={setSliderRef} {...sliderSettings} className=''>

				{/* 1 */}
				<div className='relative gilam1 h-[310px] md:h-[340px] sm:mt-8'>
					<div className='absolute top-2 left-2'>
						<div className='flex space-x-4 items-center'>
							<h1 className='text-lg rounded-lg p-1 bg-teal-600 text-white font-bold'>Trendda</h1>
							<button className='brandName bg-gray-200 text-4xl px-4 rounded-lg'>Aurora</button>
						</div>
					</div>
					<div className='flex space-x-4 items-end pl-4 pb-2 h-full'>
						<h1 className='text-md md:text-gray-800 font-bold'>4.990.000</h1>
						<button className='text-lg rounded-lg p-1 bg-green-700  text-white font-bold'>Batafsil</button>
					</div>
				</div>

				{/* 2 */}
				<div className='relative gilam2 h-[310px] md:h-[340px] sm:mt-8'>
					<div className='absolute top-2 left-2'>
						<div className='flex space-x-4 items-center'>
							<h1 className='text-lg rounded-lg p-1 bg-teal-600 text-white font-bold'>Trendda</h1>
							<button className='brandName bg-gray-200 text-4xl px-4 rounded-lg'>Aurora</button>
						</div>
					</div>
					<div className='flex space-x-4 items-end pl-4 pb-2 h-full'>
						<h1 className='text-md md:text-gray-800 font-bold'>4.990.000</h1>
						<button className='text-lg rounded-lg p-1 bg-green-700  text-white font-bold'>Batafsil</button>
					</div>
				</div>

				{/* 3 */}
				<div className='relative gilam1 h-[310px] md:h-[340px] sm:mt-8'>
					<div className='absolute top-2 left-2'>
						<div className='flex space-x-4 items-center'>
							<h1 className='text-lg rounded-lg p-1 bg-teal-600 text-white font-bold'>Trendda</h1>
							<button className='brandName bg-gray-200 text-4xl px-4 rounded-lg'>Aurora</button>
						</div>
					</div>
					<div className='flex space-x-4 items-end pl-4 pb-2 h-full'>
						<h1 className='text-md md:text-gray-800 font-bold'>4.990.000</h1>
						<button className='text-lg rounded-lg p-1 bg-green-700  text-white font-bold'>Batafsil</button>
					</div>
				</div>

				{/* 4 */}
				<div className='relative gilam2 h-[310px] md:h-[340px] sm:mt-8'>
					<div className='absolute top-2 left-2'>
						<div className='flex space-x-4 items-center'>
							<h1 className='text-lg rounded-lg p-1 bg-teal-600 text-white font-bold'>Trendda</h1>
							<button className='brandName bg-gray-200 text-4xl px-4 rounded-lg'>Aurora</button>
						</div>
					</div>
					<div className='flex space-x-4 items-end pl-4 pb-2 h-full'>
						<h1 className='text-md md:text-gray-800 font-bold'>4.990.000</h1>
						<button className='text-lg rounded-lg p-1 bg-green-700  text-white font-bold'>Batafsil</button>
					</div>
				</div>

				{/* 5 */}
				<div className='relative gilam1 h-[310px] md:h-[340px] sm:mt-8'>
					<div className='absolute top-2 left-2'>
						<div className='flex space-x-4 items-center'>
							<h1 className='text-lg rounded-lg p-1 bg-teal-600 text-white font-bold'>Trendda</h1>
							<button className='brandName bg-gray-200 text-4xl px-4 rounded-lg'>Aurora</button>
						</div>
					</div>
					<div className='flex space-x-4 items-end pl-4 pb-2 h-full'>
						<h1 className='text-md md:text-gray-800 font-bold'>4.990.000</h1>
						<button className='text-lg rounded-lg p-1 bg-green-700  text-white font-bold'>Batafsil</button>
					</div>
				</div>

				{/* 6 */}
				<div className='relative gilam2 h-[310px] md:h-[340px] sm:mt-8'>
					<div className='absolute top-2 left-2'>
						<div className='flex space-x-4 items-center'>
							<h1 className='text-lg rounded-lg p-1 bg-teal-600 text-white font-bold'>Trendda</h1>
							<button className='brandName bg-gray-200 text-4xl px-4 rounded-lg'>Aurora</button>
						</div>
					</div>
					<div className='flex space-x-4 items-end pl-4 pb-2 h-full'>
						<h1 className='text-md md:text-gray-800 font-bold'>4.990.000</h1>
						<button className='text-lg rounded-lg p-1 bg-green-700  text-white font-bold'>Batafsil</button>
					</div>
				</div>
			</Slider>
		</section>

	)
}

export default SliderMenu