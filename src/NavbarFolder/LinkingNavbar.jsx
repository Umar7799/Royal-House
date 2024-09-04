import React, { useState } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'
import CategoriesIcon from '../pics/category.png'
import ContactIcon from '../pics/contactIcon.png'
import AfzalliklarImg from '../pics/yes.png'
import { Link } from 'react-router-dom'
import InstagramPic from '../pics/instagram.png'
import TelegramPic from '../pics/telegram.png'
import FacebookPic from '../pics/facebook.png'
import TwitterPic from '../pics/twitter.png'

const LinkingNavbar = () => {
	const [isOpen, setOpen] = useState(false)


	let prevScrollpos = window.pageYOffset;
	window.onscroll = function () {
		let currentScrollPos = window.pageYOffset;
		if (prevScrollpos > currentScrollPos) {
			document.getElementById("navbar").style.top = "0px";
		} else {
			document.getElementById("navbar").style.top = "-80px";
			setOpen(false)
		}
		prevScrollpos = currentScrollPos;
	}

	return (

		<div id='navbar' className='fixed top-0 w-full duration-500 rounded-b-md flex justify-between px-4 md:px-8 py-3 sm:py-4 bg-[#405855] bg-opacity-30 backdrop-blur-md rounded drop-shadow-lg shadowBoxes z-[100]'>

			<div className='flex justify-around items-center w-full text-xl'>

				<div className='flex space-x-8 sm:hidden'>
					<Link to='/' smooth={true} spy={true} offset={20} duration={500}><img className='w-7 h-fit cursor-pointer' src={CategoriesIcon} alt="" /></Link>
					<Link to='/' smooth={true} spy={true} duration={500} className='cursor-pointer'><img className='w-7 h-fit cursor-pointer' src={AfzalliklarImg} alt="" /></Link>
				</div>

				<div className='hidden sm:flex space-x-7 md:space-x-14'>
					<Link to='/' smooth={true} spy={true} offset={20} duration={500} className='cursor-pointer'>Kategoriyalar</Link>
					<Link to='/' smooth={true} spy={true} duration={500} className='cursor-pointer'>Afzalliklarimiz</Link>
				</div>
				<div className='z-[104] transition-all duration-500'>
					<Link to='/' smooth={true} spy={true} duration={500} className={isOpen ? 'logoName text-white text-4xl transition-all duration-500cursor-pointer ' : 'cursor-pointer logoName text-4xl'}>RH</Link>
				</div>
				<div className='hidden sm:flex space-x-7 md:space-x-14'>
					<Link to='/' smooth={true} spy={true} duration={500} className='cursor-pointer'>Chegirmalar</Link>
					<Link to='/' smooth={true} spy={true} duration={500} className='cursor-pointer'>Bog'lanish</Link>
				</div>
				<div className='sm:hidden flex items-center space-x-6'>
				<Link to='/' smooth={true} spy={true} duration={500} className='cursor-pointer'><img className='w-8 h-fit cursor-pointer' src={ContactIcon} alt="" /></Link>
					<div className='z-[104]'>
						<Hamburger color='black' size={29} toggled={isOpen} toggle={setOpen} />
					</div>
				</div>
			</div>

			{/* HAMBURGER MENU */}
			<div className={isOpen ? 'absolute bg-white bg-opacity-80 backdrop-blur-sm drop-shadow-lg w-[100vw] h-[100vh] top-0 left-0 duration-500 rounded-r' : 'mt-[-100rem] absolute w-[100vw] h-[100vh] left-0 duration-1000'}>
				<div className='flex justify-center items-center pt-36'>
					<div className='text-3xl space-y-6 mb-28 text-center'>
						<h1 className='brandName text-white bg-[#555557] bg-opacity-60 text-[50px] sm:text-[60px] py-6 px-6 rounded-2xl cursor-pointer'><Link onClick={() => setOpen(false)} to='/' smooth={true} spy={true} duration={500}>Royal House</Link></h1>
						<h1><Link onClick={() => setOpen(false)} to='/' smooth={true} spy={true} duration={500} className='cursor-pointer'>Kategoriyalar</Link></h1>
						<h1><Link onClick={() => setOpen(false)} to='/' smooth={true} spy={true} duration={500} className='cursor-pointer'>Chegirmalar</Link></h1>
						<h1><Link onClick={() => setOpen(false)} to='/' smooth={true} spy={true} duration={500} className='cursor-pointer'>Afzalliklarimiz</Link></h1>
						<h1><Link onClick={() => setOpen(false)} to='/' smooth={true} spy={true} offset={50} duration={500} className='cursor-pointer'>Bog'lanish</Link></h1>
					</div>

				</div>
				<div>
					<div className='flex justify-center'>
						<h1 className='text-2xl py-2 pb-4 font-bold'>Ijtimoiy tarmoq</h1>
					</div>
					<div className='flex justify-center space-x-4'>
						<img className='w-7 cursor-pointer' src={InstagramPic} alt="" />
						<img className='w-7 cursor-pointer' src={TelegramPic} alt="" />
						<img className='w-7 cursor-pointer' src={FacebookPic} alt="" />
						<img className='w-7 cursor-pointer' src={TwitterPic} alt="" />
					</div>
				</div>
			</div>
		</div >

	)
}

export default LinkingNavbar