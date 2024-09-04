import React, { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css'

const DiscountProducts = () => {

	const [sliderRef, setSliderRef] = useState(null);

	const sliderSettings = {
		dots: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		// autoplay: true,
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
		<div id='discountProducts' className='flex justify-center bg-gradient-to-r from-[#F7F8F8] to-[#ACBB78] py-10'>

			<section className='w-[90vw] px-1 pb-8'>
				<div className='flex justify-between px-4 mb-10 items-center transition-all duration-500'>
					<h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>Chegirmali to'plamlar</h1>
					<h1 className='text-center border border-black px-2 sm:px-4 py-1 rounded-lg shadow-lg cursor-pointer'>Barchasini ko'rish</h1>
				</div>

				<Slider ref={setSliderRef} {...sliderSettings} className=''>

					{/* 1 */}
					<div className='affordableProduct rounded-xl cursor-pointer mb-4'>
						<div className='aPImg1 h-[350px] w-full rounded-xl'>
							<div className='flex space-x-4 items-center p-2'>
								<h1 className='rounded-lg p-1 bg-teal-600 text-white font-bold'>Trendda</h1>
								<h1 className='rounded-lg p-1 bg-teal-600 text-white font-bold'>Yangilik</h1>
							</div>
						</div>
						<button className='brandName bg-gray-200 text-4xl m-2 px-4 rounded-lg'>Aurora</button>
						<div className='flex justify-between px-4 items-end pb-2'>
							<h1 className='font-bold'>4.990.000</h1>
							<button className='text-lg rounded-lg p-1 px-2 bg-green-700  text-white font-bold'>Batafsil</button>
						</div>
					</div>

					{/* 2*/}
					<div className='affordableProduct rounded-xl cursor-pointer'>
						<div className='aPImg2 h-[350px] w-full rounded-xl'>
							<div className='flex space-x-4 items-center p-2'>
								<h1 className='rounded-lg p-1 bg-teal-600 text-white font-bold'>Trendda</h1>
								<h1 className='rounded-lg p-1 bg-teal-600 text-white font-bold'>Yangilik</h1>
							</div>
						</div>
						<button className='brandName bg-gray-200 text-4xl m-2 px-4 rounded-lg'>Aurora</button>
						<div className='flex justify-between px-4 items-end pb-2'>
							<h1 className='font-bold'>4.990.000</h1>
							<button className='text-lg rounded-lg p-1 px-2 bg-green-700  text-white font-bold'>Batafsil</button>
						</div>
					</div>

					{/* 3 */}
					<div className='affordableProduct rounded-xl cursor-pointer mb-4'>
						<div className='aPImg1 h-[350px] w-full rounded-xl'>
							<div className='flex space-x-4 items-center p-2'>
								<h1 className='rounded-lg p-1 bg-teal-600 text-white font-bold'>Trendda</h1>
								<h1 className='rounded-lg p-1 bg-teal-600 text-white font-bold'>Yangilik</h1>
							</div>
						</div>
						<button className='brandName bg-gray-200 text-4xl m-2 px-4 rounded-lg'>Aurora</button>
						<div className='flex justify-between px-4 items-end pb-2'>
							<h1 className='font-bold'>4.990.000</h1>
							<button className='text-lg rounded-lg p-1 px-2 bg-green-700  text-white font-bold'>Batafsil</button>
						</div>
					</div>

					{/* 4 */}
					<div className='affordableProduct rounded-xl cursor-pointer'>
						<div className='aPImg2 h-[350px] w-full rounded-xl'>
							<div className='flex space-x-4 items-center p-2'>
								<h1 className='rounded-lg p-1 bg-teal-600 text-white font-bold'>Trendda</h1>
								<h1 className='rounded-lg p-1 bg-teal-600 text-white font-bold'>Yangilik</h1>
							</div>
						</div>
						<button className='brandName bg-gray-200 text-4xl m-2 px-4 rounded-lg'>Aurora</button>
						<div className='flex justify-between px-4 items-end pb-2'>
							<h1 className='font-bold'>4.990.000</h1>
							<button className='text-lg rounded-lg p-1 px-2 bg-green-700  text-white font-bold'>Batafsil</button>
						</div>
					</div>

				</Slider>
			</section>
		</div>
	)
}


export default DiscountProducts