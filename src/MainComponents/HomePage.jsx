import React from 'react'
import SliderMenu from './SliderMenu'

import Categories from './Categories'
import AffordableProducts from './AffordableProducts'
import DiscountProducts from './DiscountProducts'
import Afzalliklar from './Afzalliklar'
import Footer from './Footer'
import Navbar from '../NavbarFolder/Navbar'
import '../App.css'


const HomePage = () => {

	return (
		<>
			<Navbar />
			<div id='homePage' className='h-[100vh] bg-gradient-to-r from-[#F7F8F8] to-[#ACBB78] flex justify-center items-center'>
				<div className='mt-[4.5rem] relative h-[87vh] w-[90vw] shadowBoxes rounded-lg flex items-end'>
					<div className='absolute top-12 md:top-6 lg:top-12 w-full flex text-center justify-center items-center transition-all duration-500'>
						<div className='text-3xl sm:text-4xl space-y-8 sm:space-y-6 transition-all duration-300'>
							<h1 className='brandName shadowBoxes text-[50px] sm:text-[60px] py-5 rounded-2xl cursor-pointer'>Royal House</h1>
							<h1 className=''>GILAMLAR DO'KONI</h1>
						</div>
					</div>
					<SliderMenu />
				</div>
			</div>
			<Categories />
			<AffordableProducts />
			<DiscountProducts />
			<Afzalliklar />
			<Footer />
		</>
	)
}

export default HomePage