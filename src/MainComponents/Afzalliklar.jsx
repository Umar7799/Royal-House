import React from 'react'
import ImgPng from '../pics/category.png'
import DeliveryPic from '../pics/shipped.png'
import LowPricePic from '../pics/handshake.png'
import highQualityPic from '../pics/high-quality.png'
import consultingPic from '../pics/brainstorming.png'
import AssortmentPic from '../pics/choice.png'

import '../App.css'


const Afzalliklar = () => {
	return (
		<div id='afzalliklar' className='pt-10 pb-20 px-12  bg-gradient-to-r from-[#F7F8F8] to-[#ACBB78]'>

			<h1 className='text-3xl lg:text-4xl font-bold pb-8 pl-8'>Afzalliklarimiz</h1>
			<div className='flex justify-center'>
				<div className='md:flex px-4 md:space-x-5 md:space-y-0 space-y-8'>
					<div className='bg-white p-6 rounded-xl shadowBoxes text-center'>
						<div className='flex justify-center items-center py-6 rounded-xl'>
							<img className='w-16' src={DeliveryPic} alt="" />
						</div>
						<div className='flex justify-center text-lg font-bold'>
							<h1>Yetkazib berish</h1>
						</div>
					</div>
					<div className='bg-white p-6 rounded-xl shadowBoxes text-center'>
						<div className='flex justify-center items-center py-6 rounded-xl'>
							<img className='w-16' src={LowPricePic} alt="" />
						</div>
						<div className='flex justify-center text-lg font-bold'>
							<h1>Hamyonbop narxlar</h1>
						</div>
					</div>
					<div className='bg-white p-6 rounded-xl shadowBoxes text-center'>
						<div className='flex justify-center items-center py-6 rounded-xl'>
							<img className='w-16' src={highQualityPic} alt="" />
						</div>
						<div className='flex justify-center text-lg font-bold'>
							<h1>Yuqori sifat</h1>
						</div>
					</div>
					<div className='bg-white p-6 rounded-xl shadowBoxes text-center'>
						<div className='flex justify-center items-center py-6 rounded-xl'>
							<img className='w-16' src={consultingPic} alt="" />
						</div>
						<div className='flex justify-center text-lg font-bold'>
							<h1>Bepul konsultatsiya</h1>
						</div>
					</div>
					<div className='bg-white p-6 rounded-xl shadowBoxes text-center'>
						<div className='flex justify-center items-center py-6 rounded-xl'>
							<img className='w-16' src={AssortmentPic} alt="" />
						</div>
						<div className='flex justify-center text-lg font-bold'>
							<h1>Keng assortiment</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Afzalliklar