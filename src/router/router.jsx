import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../components/mainLayout/mainLayout'
import Home from '../pages/home/home'
import LikePage from '../pages/like'
export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/like',
				element: <LikePage />,
			},
		],
	},
])
