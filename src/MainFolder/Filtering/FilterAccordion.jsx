import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";
import ChevronPic from '../../pics/chevron.png'
import '../../App.css'
import { GetInfo } from "../../Context/Context";

import { Link } from "react-router-dom";

const FilterAccordion = () => {
	const [activeElement, setActiveElement] = useState("");

	const handleClick = (value) => {
		if (value === activeElement) {
			setActiveElement("");
		} else {
			setActiveElement(value);
		}
	};

	// The reason why I created states for each checkboxes is I may add different things to its fucntions

	// COLLECTION FILTER
	const [isCheckedSamarkand, setIsCheckedSamarkand] = useState(false);
	const [isCheckedRoyal, setIsCheckedRoyal] = useState(false);
	const [isCheckedModern, setIsCheckedModern] = useState(false);
	const [isCheckedMovarounnahr, setIsCheckedMovarounnahr] = useState(false);

	// STYLES FILTER
	const [isCheckedMilliy, setIsCheckedMilliy] = useState(false)
	const [isCheckedZamonaviy, setIsCheckedZamonaviy] = useState(false)
	const [isCheckedKlassik, setIsCheckedKlassik] = useState(false)

	// ROOMS FILTER
	const [isCheckedMehmonxona, setIsCheckedMehmonxona] = useState(false)
	const [isCheckedYotoqxona, setIsCheckedYotoqxona] = useState(false)
	const [isCheckedOshxona, setIsCheckedOshxona] = useState(false)
	const [isCheckedBolalarXonasi, setIsCheckedBolalarXonasi] = useState(false)

	// SHAPES FILTER
	const [isCheckedTortburchak, setIsCheckedTortburchak] = useState(false)
	const [isCheckedDoira, setIsCheckedDoira] = useState(false)
	const [isCheckedMetrik, setIsCheckedMetrik] = useState(false)
	const [isCheckedKvadrat, setIsCheckedKvadrat] = useState(false)
	const [isCheckedOval, setIsCheckedOval] = useState(false)
	const [isCheckedUslubiy, setIsCheckedUslubiy] = useState(false)

	// COLORS FILTER
	const [isCheckedBlack, setIsCheckedBlack] = useState(false)
	const [isCheckedRed, setIsCheckedRed] = useState(false)

	const handleChecked = (event) => {
		// COLLECTION
		if (event.target.id === 'samarkand') {
			setIsCheckedSamarkand(event.target.checked)
		}
		if (event.target.id === 'royal') {
			setIsCheckedRoyal(event.target.checked)
		}
		if (event.target.id === 'modern') {
			setIsCheckedModern(event.target.checked)
		}
		if (event.target.id === 'movarounnahr') {
			setIsCheckedMovarounnahr(event.target.checked)
		}

		// STYLES
		if (event.target.id === 'milliy') {
			setIsCheckedMilliy(event.target.checked)
		}
		if (event.target.id === 'zamonaviy') {
			setIsCheckedZamonaviy(event.target.checked)
		}
		if (event.target.id === 'klassik') {
			setIsCheckedKlassik(event.target.checked)
		}

		// ROOMS
		if (event.target.id === 'mehmonxona') {
			setIsCheckedMehmonxona(event.target.checked)
		}
		if (event.target.id === 'yotoqxona') {
			setIsCheckedYotoqxona(event.target.checked)
		}
		if (event.target.id === 'oshxona') {
			setIsCheckedOshxona(event.target.checked)
		}
		if (event.target.id === 'bolalarXonasi') {
			setIsCheckedBolalarXonasi(event.target.checked)

		}

		// SHAPES
		if (event.target.id === 'tortburchak') {
			setIsCheckedTortburchak(event.target.checked)
		}
		if (event.target.id === 'doira') {
			setIsCheckedDoira(event.target.checked)
		}
		if (event.target.id === 'metrik') {
			setIsCheckedMetrik(event.target.checked)
		}
		if (event.target.id === 'kvadrat') {
			setIsCheckedKvadrat(event.target.checked)
		}
		if (event.target.id === 'oval') {
			setIsCheckedOval(event.target.checked)
		}
		if (event.target.id === 'uslubiy') {
			setIsCheckedUslubiy(event.target.checked)
		}

		// COLORS
		if (event.target.id === 'black') {
			setIsCheckedBlack(event.target.checked)
		}
		if (event.target.id === 'red') {
			setIsCheckedRed(event.target.checked)
		}
		// LEFT UNDONE THE SIZE AND PRICE ))
	}

	const { setOpenAllPs, setOpenAffordablePs, setOpenTrendPs, setOpenDiscountPs } = GetInfo()



	const handleProducts = (event) => {
		if (event.target.id === 'allPs') {
			setOpenAllPs(true)
			setOpenAffordablePs(false)
			setOpenTrendPs(false)
			setOpenDiscountPs(false)
		}
		if (event.target.id === 'affordablePs') {
			setOpenAffordablePs(true)
			setOpenTrendPs(false)
			setOpenDiscountPs(false)
			setOpenAllPs(false)
		}
		if (event.target.id === 'discountPs') {
			setOpenDiscountPs(true)
			setOpenAffordablePs(false)
			setOpenTrendPs(false)
			setOpenAllPs(false)
		}
		if (event.target.id === 'trendPs') {
			setOpenTrendPs(true)
			setOpenDiscountPs(false)
			setOpenAffordablePs(false)
			setOpenAllPs(false)
		}
	}


	return (
		<>

			{/* 1 COLLECTION */}
			<div className="rounded-xl">
				<div className="border border-neutral-200 rounded-xl">
					<button
						className={`${activeElement === "Collection" && ``} rounded-xl group relative flex w-full items-center bg-white px-5 py-2 hover:z-[2] focus:z-[3] focus:outline-none`}
						onClick={() => handleClick("Collection")}>
						Kolleksiyalar
						<img className={`${activeElement === "Collection" ? `rotate-[270deg]` : `rotate-[90deg]`}  ml-auto h-5 w-5 transition-transform duration-500`} src={ChevronPic} alt="" />
					</button>
					<TECollapse show={activeElement === "Collection"} className="!mt-0 !rounded-b-none !shadow-none transition-all duration-500">
						<div className="px-5 py-4">
							<div class={isCheckedSamarkand ? "flex items-center mb-4 font-bold text-2xl text-blue-900 transition-all duration-200" : "flex items-center mb-4 transition-all duration-200"}>
								<input checked={isCheckedSamarkand} onChange={handleChecked} id="samarkand" type="checkbox" value="" class="w-4 h-4 focus:outline-none cursor-pointer" />
								<label for="default-checkbox" class="ms-2">Samarkand</label>
							</div>
							<div class={isCheckedRoyal ? "flex items-center mb-4 font-bold text-2xl text-blue-900 transition-all duration-200" : "flex items-center mb-4 transition-all duration-200"}>
								<input checked={isCheckedRoyal} onChange={handleChecked} id="royal" type="checkbox" value="" class="w-4 h-4 focus:outline-none cursor-pointer" />
								<label for="default-checkbox" class="ms-2">Royal</label>
							</div>
							<div class={isCheckedModern ? "flex items-center mb-4 font-bold text-2xl text-blue-900 transition-all duration-200" : "flex items-center mb-4 transition-all duration-200"}>
								<input checked={isCheckedModern} onChange={handleChecked} id="modern" type="checkbox" value="" class="w-4 h-4 focus:outline-none cursor-pointer" />
								<label for="default-checkbox" class="ms-2">Modern</label>
							</div>
							<div class={isCheckedMovarounnahr ? "flex items-center mb-4 font-bold text-2xl text-blue-900 transition-all duration-200" : "flex items-center mb-4 transition-all duration-200"}>
								<input checked={isCheckedMovarounnahr} onChange={handleChecked} id="movarounnahr" type="checkbox" value="" class="w-4 h-4 focus:outline-none cursor-pointer" />
								<label for="default-checkbox" class="ms-2">Movarounnahr</label>
							</div>
						</div>
					</TECollapse>
				</div>
			</div>

			{/* 2 STYLES */}
			<div>
				<div className="border border-neutral-200">
					<button
						className={`${activeElement === "Stillar" && ``} group relative flex w-full items-center bg-white px-5 py-2 hover:z-[2] focus:z-[3] focus:outline-none`}
						onClick={() => handleClick("Stillar")}>
						Stillar
						<img className={`${activeElement === "Stillar" ? `rotate-[270deg]` : `rotate-[90deg]`}  ml-auto h-5 w-5 transition-transform duration-500`} src={ChevronPic} alt="" />
					</button>
					<TECollapse show={activeElement === "Stillar"} className="!mt-0 !rounded-b-none !shadow-none transition-all duration-500">
						<div className="px-5 py-4">
							<div class={isCheckedMilliy ? "flex items-center mb-4 font-bold text-2xl text-blue-900 transition-all duration-200" : "flex items-center mb-4 transition-all duration-200"}>
								<input checked={isCheckedMilliy} onChange={handleChecked} id="milliy" type="checkbox" value="" class="w-4 h-4 focus:outline-none cursor-pointer" />
								<label for="default-checkbox" class="ms-2">Milliy</label>
							</div>
							<div class={isCheckedZamonaviy ? "flex items-center mb-4 font-bold text-2xl text-blue-900 transition-all duration-200" : "flex items-center mb-4 transition-all duration-200"}>
								<input checked={isCheckedZamonaviy} onChange={handleChecked} id="zamonaviy" type="checkbox" value="" class="w-4 h-4 focus:outline-none cursor-pointer" />
								<label for="default-checkbox" class="ms-2">Zamonaviy</label>
							</div>
							<div class={isCheckedKlassik ? "flex items-center mb-4 font-bold text-2xl text-blue-900 transition-all duration-200" : "flex items-center mb-4 transition-all duration-200"}>
								<input checked={isCheckedKlassik} onChange={handleChecked} id="klassik" type="checkbox" value="" class="w-4 h-4 focus:outline-none cursor-pointer" />
								<label for="default-checkbox" class="ms-2">Klassik</label>
							</div>
						</div>
					</TECollapse>
				</div>
			</div>

			{/* 3 XONALAR */}
			<div>
				<div className="border border-neutral-200">
					<button
						className={`${activeElement === "Xonalar" && ``} group relative flex w-full items-center bg-white px-5 py-2 hover:z-[2] focus:z-[3] focus:outline-none`}
						onClick={() => handleClick("Xonalar")}>
						Xonalar
						<img className={`${activeElement === "Xonalar" ? `rotate-[270deg]` : `rotate-[90deg]`}  ml-auto h-5 w-5 transition-transform duration-500`} src={ChevronPic} alt="" />
					</button>
					<TECollapse show={activeElement === "Xonalar"} className="!mt-0 !rounded-b-none !shadow-none transition-all duration-500">
						<div className="px-5 py-4">
							<div class={isCheckedMehmonxona ? "flex items-center mb-4 font-bold text-2xl text-blue-900 transition-all duration-200" : "flex items-center mb-4 transition-all duration-200"}>
								<input checked={isCheckedMehmonxona} onChange={handleChecked} id="mehmonxona" type="checkbox" value="" class="w-4 h-4 focus:outline-none cursor-pointer" />
								<label for="default-checkbox" class="ms-2">Mehmonxona</label>
							</div>
							<div class={isCheckedYotoqxona ? "flex items-center mb-4 font-bold text-2xl text-blue-900 transition-all duration-200" : "flex items-center mb-4 transition-all duration-200"}>
								<input checked={isCheckedYotoqxona} onChange={handleChecked} id="yotoqxona" type="checkbox" value="" class="w-4 h-4 focus:outline-none cursor-pointer" />
								<label for="default-checkbox" class="ms-2">Yotoqxona</label>
							</div>
							<div class={isCheckedOshxona ? "flex items-center mb-4 font-bold text-2xl text-blue-900 transition-all duration-200" : "flex items-center mb-4 transition-all duration-200"}>
								<input checked={isCheckedOshxona} onChange={handleChecked} id="oshxona" type="checkbox" value="" class="w-4 h-4 focus:outline-none cursor-pointer" />
								<label for="default-checkbox" class="ms-2">Oshxona</label>
							</div>
							<div class={isCheckedBolalarXonasi ? "flex items-center mb-4 font-bold text-2xl text-blue-900 transition-all duration-200" : "flex items-center mb-4 transition-all duration-200"}>
								<input checked={isCheckedBolalarXonasi} onChange={handleChecked} id="bolalarXonasi" type="checkbox" value="" class="w-4 h-4 focus:outline-none cursor-pointer" />
								<label for="default-checkbox" class="ms-2">Bolalar xonasi</label>
							</div>
						</div>
					</TECollapse>
				</div>
			</div>

			<div>
				<div className="border border-neutral-200">
					<button
						className={`${activeElement === "Shakl" && ``} group relative flex w-full items-center bg-white px-5 py-2 hover:z-[2] focus:z-[3] focus:outline-none`}
						onClick={() => handleClick("Shakl")}>
						Shakllar
						<img className={`${activeElement === "Shakl" ? `rotate-[270deg]` : `rotate-[90deg]`}  ml-auto h-5 w-5 transition-transform duration-500`} src={ChevronPic} alt="" />
					</button>
					<TECollapse show={activeElement === "Shakl"} className="!mt-0 !rounded-b-none !shadow-none transition-all duration-500">
						<div className="px-5 py-4">
							<div class={isCheckedTortburchak ? "flex items-center mb-4 font-bold text-2xl text-blue-900 transition-all duration-200" : "flex items-center mb-4 transition-all duration-200"}>
								<input checked={isCheckedTortburchak} onChange={handleChecked} id="tortburchak" type="checkbox" value="" class="w-4 h-4 focus:outline-none cursor-pointer" />
								<label for="default-checkbox" class="ms-2">To`rtburchak</label>
							</div>
							<div class={isCheckedDoira ? "flex items-center mb-4 font-bold text-2xl text-blue-900 transition-all duration-200" : "flex items-center mb-4 transition-all duration-200"}>
								<input checked={isCheckedDoira} onChange={handleChecked} id="doira" type="checkbox" value="" class="w-4 h-4 focus:outline-none cursor-pointer" />
								<label for="default-checkbox" class="ms-2">Doira</label>
							</div>
							<div class={isCheckedMetrik ? "flex items-center mb-4 font-bold text-2xl text-blue-900 transition-all duration-200" : "flex items-center mb-4 transition-all duration-200"}>
								<input checked={isCheckedMetrik} onChange={handleChecked} id="metrik" type="checkbox" value="" class="w-4 h-4 focus:outline-none cursor-pointer" />
								<label for="default-checkbox" class="ms-2">Metrik</label>
							</div>
							<div class={isCheckedKvadrat ? "flex items-center mb-4 font-bold text-2xl text-blue-900 transition-all duration-200" : "flex items-center mb-4 transition-all duration-200"}>
								<input checked={isCheckedKvadrat} onChange={handleChecked} id="kvadrat" type="checkbox" value="" class="w-4 h-4 focus:outline-none cursor-pointer" />
								<label for="default-checkbox" class="ms-2">Kvadrat</label>
							</div>
							<div class={isCheckedOval ? "flex items-center mb-4 font-bold text-2xl text-blue-900 transition-all duration-200" : "flex items-center mb-4 transition-all duration-200"}>
								<input checked={isCheckedOval} onChange={handleChecked} id="oval" type="checkbox" value="" class="w-4 h-4 focus:outline-none cursor-pointer" />
								<label for="default-checkbox" class="ms-2">Oval</label>
							</div>
							<div class={isCheckedUslubiy ? "flex items-center mb-4 font-bold text-2xl text-blue-900 transition-all duration-200" : "flex items-center mb-4 transition-all duration-200"}>
								<input checked={isCheckedUslubiy} onChange={handleChecked} id="uslubiy" type="checkbox" value="" class="w-4 h-4 focus:outline-none cursor-pointer" />
								<label for="default-checkbox" class="ms-2">Uslubiy</label>
							</div>
						</div>
					</TECollapse>
				</div>
			</div>



			<div>
				<div className="border border-neutral-200">
					<button
						className={`${activeElement === "Rang" && ``} group relative flex w-full items-center bg-white px-5 py-2 hover:z-[2] focus:z-[3] focus:outline-none`}
						onClick={() => handleClick("Rang")}>
						Ranglar
						<img className={`${activeElement === "Rang" ? `rotate-[270deg]` : `rotate-[90deg]`}  ml-auto h-5 w-5 transition-transform duration-500`} src={ChevronPic} alt="" />
					</button>
					<TECollapse show={activeElement === "Rang"} className="!mt-0 !rounded-b-none !shadow-none transition-all duration-500">
						<div className="px-5 py-4">
							{/* BLACK */}
							<div class={isCheckedBlack ? "flex items-center justify-between mb-4 font-bold text-2xl text-blue-900 transition-all duration-200" : "flex justify-between items-center mb-4 transition-all duration-200"}>
								<div className="flex items-center">
									<input checked={isCheckedBlack} onChange={handleChecked} id="black" type="checkbox" value="" class="w-4 h-4 focus:outline-none cursor-pointer" />
									<label for="default-checkbox" class="ms-2">Qora</label>
								</div>
								<div className="flex">
									<div className="w-4 h-4 bg-black rounded-[50%]"></div>
									<div className="w-4 h-4 bg-slate-800 rounded-[50%]"></div>
								</div>
							</div>
							{/* RED */}
							<div class={isCheckedRed ? "flex items-center justify-between mb-4 font-bold text-2xl text-blue-900 transition-all duration-200" : "flex justify-between items-center mb-4 transition-all duration-200"}>
								<div className="flex items-center">
									<input checked={isCheckedRed} onChange={handleChecked} id="red" type="checkbox" value="" class="w-4 h-4 focus:outline-none cursor-pointer" />
									<label for="default-checkbox" class="ms-2">Qizil</label>
								</div>
								<div className="flex">
									<div className="w-4 h-4 bg-red-600 rounded-[50%]"></div>
									<div className="w-4 h-4 bg-pink-600 rounded-[50%]"></div>
								</div>
							</div>

						</div>
					</TECollapse>
				</div>
			</div>

			<div>
				<div className="border border-neutral-200">
					<button
						className={`${activeElement === "Size" && ``} group relative flex w-full items-center bg-white px-5 py-2 hover:z-[2] focus:z-[3] focus:outline-none`}
						onClick={() => handleClick("Size")}>
						O`lcham
						<img className={`${activeElement === "Size" ? `rotate-[270deg]` : `rotate-[90deg]`}  ml-auto h-5 w-5 transition-transform duration-500`} src={ChevronPic} alt="" />
					</button>
					<TECollapse show={activeElement === "Size"} className="!mt-0 !rounded-b-none !shadow-none transition-all duration-500">
						<div className="px-5 py-4">
							<div>
								<label for="eni" class="block">Eni:</label>
								<input type="text" id="eni" class="border border-gray-400 rounded-md w-full px-2 py-1 focus:outline-none placeholder:text-right placeholder:text-black" placeholder="sm" />
							</div>
							<div className="mt-4">
								<label for="bo`yi" class="block">Bo`yi:</label>
								<input type="text" id="bo`yi" class="border border-gray-400 rounded-md w-full px-2 py-1 focus:outline-none placeholder:text-right placeholder:text-black" placeholder="sm" />
							</div>
						</div>
					</TECollapse>
				</div>
			</div>

			<div>
				<div className="border border-neutral-200">
					<button
						className={`${activeElement === "Narx" && ``} group relative flex w-full items-center bg-white px-5 py-2 hover:z-[2] focus:z-[3] focus:outline-none`}
						onClick={() => handleClick("Narx")}>
						Narx
						<img className={`${activeElement === "Narx" ? `rotate-[270deg]` : `rotate-[90deg]`}  ml-auto h-5 w-5 transition-transform duration-500`} src={ChevronPic} alt="" />
					</button>
					<TECollapse show={activeElement === "Narx"} className="!mt-0 !rounded-b-none !shadow-none transition-all duration-500">
						<div className="px-5 py-4">
							<div class="flex items-center text-base mb-4">
								<input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 focus:outline-none" />
								<label for="default-checkbox" class="ms-2">1 - 100 000 so`m</label>
							</div>
							<div class="flex items-center text-base mb-4">
								<input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 focus:outline-none" />
								<label for="default-checkbox" class="ms-2">100 000 - 200 000 so`m</label>
							</div>
							<div class="flex items-center text-base mb-4">
								<input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 focus:outline-none" />
								<label for="default-checkbox" class="ms-2">200 000 - 300 000 so`m</label>
							</div>
							<div class="flex items-center text-base mb-4">
								<input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 focus:outline-none" />
								<label for="default-checkbox" class="ms-2">300 000 - 500 000 so`m</label>
							</div>
						</div>
					</TECollapse>
				</div>
			</div>

			<div className="">
				<div className="flex justify-center mt-4">
					<button className=" bg-blue-600 text-white rounded-2xl py-2 p-4 shadow-xl">Filterlash</button>
				</div>
				<div className="flex justify-center mt-2">
					<button className=" bg-blue-600 text-white rounded-2xl py-2 p-4 shadow-xl">O`chirish</button>
				</div>
			</div>

			<div className="flex justify-center mt-8">
				<div className="space-y-2 text-blue-600">
					<h1 className="cursor-pointer" id="allPs" onClick={handleProducts}>Barcha to'plamlar</h1>
					<h1 className="cursor-pointer" id="affordablePs" onClick={handleProducts}>Ommabop to'plamlar</h1>
					<h1 className="cursor-pointer" id="discountPs" onClick={handleProducts}>Chegirmali to'plamlar</h1>
					<h1 className="cursor-pointer" id="trendPs" onClick={handleProducts}>Trend to'plamlar</h1>
				</div>
			</div>



		</>
	)
}

export default FilterAccordion