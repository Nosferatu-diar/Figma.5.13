import { createContext, useReducer, useContext, useEffect } from 'react'
import axios from 'axios'

const ProductContext = createContext()

const initialState = {
	products: [],
	loading: true,
	error: null,
}

const productReducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_SUCCESS':
			return { ...state, products: action.payload, loading: false }
		case 'FETCH_ERROR':
			return { ...state, products: [], loading: false, error: action.payload }
		default:
			return state
	}
}

// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {
	const [state, dispatch] = useReducer(productReducer, initialState)

	useEffect(() => {
		axios
			.get(import.meta.env.VITE_BASE_URL)
			.then(response => {
				dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
			})
			.catch(error => {
				dispatch({ type: 'FETCH_ERROR', payload: error.message })
			})
	}, [])

	return (
		<ProductContext.Provider value={{ state, dispatch }}>
			{children}
		</ProductContext.Provider>
	)
}

// eslint-disable-next-line react-refresh/only-export-components
export const useProducts = () => {
	return useContext(ProductContext)
}
