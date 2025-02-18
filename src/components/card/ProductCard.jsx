import { useProducts } from '../../context/ProductContext'
import review from '../../assets/review.png'
import { Button } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
// eslint-disable-next-line react/prop-types
const ProductCard = ({ id, name, price, img }) => {
	const { dispatch } = useProducts()

	return (
		<div className='bg-white shadow-md rounded-lg p-4 flex flex-col items-center border border-gray-200 gap-2'>
			<img src={img} alt={name} className='w-40 h-40 object-contain mb-4' />
			<div className='flex items-center justify-between w-full'>
				<p className='text-[10px]'>Артикул: 153789</p>
				<div>
					<img src={review} alt='review' />
				</div>
			</div>
			<h2 className='font-semibold text-start'>{name}</h2>
			<div className='flex items-center justify-between w-full'>
				<p className='flex items-start text-black font-bold text-2xl gap-x-3'>
					{price}₽
					<span className='text-gray-400 line-through text-base font-normal'>
						{' '}
						2 864 ₽
					</span>
				</p>
				<Button
					style={{
						width: '50px',
						height: '40px',
						border: '1px solid #8022FE',
						backgroundColor: 'transparent',
						color: '#8022FE',
					}}
					onMouseEnter={e => {
						e.currentTarget.style.backgroundColor = '#8B5CF6'
						e.currentTarget.style.color = 'white'
					}}
					onMouseLeave={e => {
						e.currentTarget.style.backgroundColor = 'transparent'
						e.currentTarget.style.color = '#8022FE'
					}}
					onClick={() =>
						dispatch({ type: 'ADD_TO_CART', payload: { id, name, price, img } })
					}
				>
					<ShoppingCartOutlined className='!text-2xl' />
				</Button>
			</div>
		</div>
	)
}

export default ProductCard
