import React, { useState, useEffect } from 'react'
import '../../App.css'
import { GetInfo } from '../../Context/Context'
import FilterAccordion from '../Filtering/FilterAccordion'
import SmallFilter from '../Filtering/SmallFilter'
import LinkingNavbar from '../../NavbarFolder/LinkingNavbar'
import TrendProducts from '../AllProducts/TrendProducts'
import AffordabledProducts from '../AllProducts/AffordabledProducts'



import Footer from '../../MainComponents/Footer'
import DiscountedProducts from '../AllProducts/DiscountedProducts'
import AllProducts from '../AllProducts/AllProducts'
const FilteredCollections = () => {


	const [openSmallFilter, setOpenSmallFilter] = useState(false)
	const [lgFilter, setLgFilter] = useState(false)


	if (openSmallFilter) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'auto';
	}


	const { openAllPs, openAffordablePs, openTrendPs, openDiscountPs } = GetInfo()


	return (
		<div className='relative'>
			<LinkingNavbar />
			<div className={lgFilter ? 'flex items-start pt-20 bg-red-400 md:pr-4' : 'flex items-start pt-20 bg-red-400 px-4'}>
				<div className={lgFilter ? 'hidden md:block stickyAside text-xl min-w-[20%] bg-white rounded-xl' : 'hidden'}>
					<FilterAccordion />
				</div>
				<div className={openSmallFilter ? 'absolute top-[75px] left-0 bg-white rounded-xl w-full transition-all duration-500 px-14 text-xl' : 'md:hidden absolute top-[-500px] left-0 bg-white rounded-xl w-full transition-all duration-500 px-14'}>
					<SmallFilter setOpenSmallFilter={setOpenSmallFilter} openSmallFilter={openSmallFilter} />
				</div>
				<div className='w-full'>
					<div className='flex justify-between text-2xl mt-4 mx-4 py-4 px-4 bg-blue-500 rounded-xl shadow-lg'>
						<button onClick={() => { setLgFilter(!lgFilter) }} className='hidden md:flex items-center space-x-2'><h1 className={lgFilter ? 'hidden' : 'flex'}>Filterlash</h1><h1 className={lgFilter ? 'flex' : 'hidden'}>Filterlashni yopish</h1></button>
						<button onClick={() => { setOpenSmallFilter(!openSmallFilter) }} className='md:hidden flex items-center space-x-2'>Filterlash</button>
						<h1 className={openAllPs ? '' : 'hidden'}>Barcha to'plamlar</h1>
						<h1 className={openAffordablePs ? '' : 'hidden'}>Ommabop to'plamlar</h1>
						<h1 className={openDiscountPs ? '' : 'hidden'}>Chegirmali to'plamlar</h1>
						<h1 className={openTrendPs ? '' : 'hidden'}>Trend to'plamlar</h1>
					</div>

					<div className={openAllPs ? '' : 'hidden'}>
						<AllProducts />
					</div>
					<div className={openTrendPs ? '' : 'hidden'}>
						<TrendProducts />
					</div>
					<div className={openDiscountPs ? '' : 'hidden'}>
						<DiscountedProducts />
					</div>
					<div className={openAffordablePs ? '' : 'hidden'}>
						<AffordabledProducts />
					</div>
				</div>
			</div>
			<Footer />
		</div>

	)
}
export default FilteredCollections