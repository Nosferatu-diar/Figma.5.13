import { Outlet } from 'react-router-dom'
import Header from '../header/header'
import Footer from '../../pages/footer/footer'

const MainLayout = () => {
	return (
		<div>
			<header className='sticky top-0 z-999'>
				<Header />
			</header>
			<main>
				<Outlet />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	)
}

export default MainLayout
