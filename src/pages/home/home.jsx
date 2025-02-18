import banner from '../../assets/banner.png'
import AntdCards from '../../components/antdCards/antCards'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img1.png'
import img3 from '../../assets/img1.png'
import ProductCard from '../../components/card/ProductCard'
import { useProducts } from '../../context/ProductContext'
import { Button } from 'antd'
const Home = () => {
	const { state } = useProducts()

	if (state.loading) return <p>Loading...</p>
	if (state.error) return <p>Error: {state.error}</p>

	return (
		<section className='bg-[#fafafd]'>
			<div className='w-[80%] m-auto py-5 flex flex-col items-center'>
				{/* img */}
				<div className='w-full my-10'>
					<img src={banner} alt='banner' />
				</div>
				{/*Antd cards */}
				<div className='w-full'>
					<AntdCards />
				</div>
				{/* Card swiper */}
				<div className='w-full my-10'>
					<div className='flex items-center justify-between'>
						<h1 className='text-2xl mb-5 font-semibold'>Автомасла</h1>
						<div>
							<Button>Все автомасла {' ->'}</Button>
						</div>
					</div>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
						{state.products.slice(0, 4).map(product => (
							<ProductCard key={product.id} {...product} />
						))}
					</div>
				</div>
				{/* img */}
				<div className='flex my-10 gap-7'>
					<div>
						<img src={img1} alt='img' />
					</div>
					<div>
						<img src={img2} alt='img' />
					</div>
					<div>
						<img src={img3} alt='img' />
					</div>
				</div>
				<div className='w-full'>
					<h1 className='text-2xl mb-5 font-semibold'>Рекомендуем</h1>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
						{state.products.slice(2, 6).map(product => (
							<ProductCard key={product.id} {...product} />
						))}
					</div>
				</div>
				<div className='w-full mt-5'>
					<h1 className='text-2xl my-5 font-semibold'>Часто продаваемые</h1>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
						{state.products.slice(3, 7).map(product => (
							<ProductCard key={product.id} {...product} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Home
