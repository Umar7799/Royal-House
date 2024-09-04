import { list } from 'postcss'
import React, { createContext, useContext, useState, useEffect } from 'react'

export const InfoContext = createContext()

export function GetInfo() {
	return useContext(InfoContext)
}

export function InfoProvider({ children }) {



	const [openAllPs, setOpenAllPs] = useState(true)
	const [openAffordablePs, setOpenAffordablePs] = useState(false)
	const [openTrendPs, setOpenTrendPs] = useState(false)
	const [openDiscountPs, setOpenDiscountPs] = useState(false)



	return (
		<InfoContext.Provider value={{

			setOpenAllPs, openAllPs, setOpenAffordablePs, openAffordablePs, setOpenTrendPs, openTrendPs, setOpenDiscountPs, openDiscountPs
		}}>
			{children}
		</InfoContext.Provider>
	)
}