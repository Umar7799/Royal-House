import React from 'react'
import '../App.css'

import InstagramPic from '../pics/instagram.png'
import TelegramPic from '../pics/telegram.png'
import FacebookPic from '../pics/facebook.png'
import TwitterPic from '../pics/twitter.png'



const Footer = () => {
	return (
		<div id='footer' className='space-y-8 md:space-y-0 text-center md:text-start md:flex px-0 py-8 justify-evenly bg-[#405855] bg-opacity-30 backdrop-blur-md rounded drop-shadow-lg shadowBoxes z-[100]'>
			<div className='leading-8 text-lg'>
				<h1 className='text-2xl py-2 font-bold'>Telefon raqamlar</h1>
				<h1 className='cursor-pointer'>+998941241241</h1>
				<h1 className='cursor-pointer'>+998941241241</h1>
				<h1 className='text-2xl py-2 font-bold'>Elektron Manzil</h1>
				<h1 className='cursor-pointer'>www.bjeesfs@mail.ru</h1>
			</div>
			<div className='leading-8 text-lg'>
				<h1 className='text-2xl py-2 font-bold'>Kategoriyalar</h1>
				<h1 className='cursor-pointer'>Gilamlar</h1>
				<h1 className='cursor-pointer'>Kovrolin</h1>
				<h1 className='cursor-pointer'>Gazon</h1>
				<h1 className='cursor-pointer'>Premium</h1>
			</div>
			<div className='leading-8 text-lg'>
				<h1 className='text-2xl py-2 font-bold'>Ma`lumotlar</h1>
				<h1 className='cursor-pointer'>Manzil</h1>
				<h1 className='cursor-pointer'>Biz haqimizda</h1>
				<h1 className='cursor-pointer'>Ko`p beriladigan savollar</h1>
				<h1 className='cursor-pointer'>Foydalanish shartlari</h1>
			</div>
			<div>
				<h1 className='text-2xl py-2 pb-4 font-bold'>Ijtimoiy tarmoq</h1>
				<div className='flex justify-center space-x-4'>
					<img className='w-7 cursor-pointer' src={InstagramPic} alt="" />
					<img className='w-7 cursor-pointer' src={TelegramPic} alt="" />
					<img className='w-7 cursor-pointer' src={FacebookPic} alt="" />
					<img className='w-7 cursor-pointer' src={TwitterPic} alt="" />
				</div>
			</div>
		</div>
	)
}

export default Footer