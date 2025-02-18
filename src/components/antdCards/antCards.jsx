import card1 from '../../assets/card1.svg'
import card2 from '../../assets/card2.svg'
import card3 from '../../assets/card3.svg'
import ctegory from '../../assets/category.png'
import { Card } from 'antd'
const gridStyle = {
	width: 'full',
	textAlign: 'center',
}
const AntdCards = () => (
	<Card title=''>
		<Card.Grid className='cursor-pointer' style={gridStyle}>
			{
				<div className='flex items-center gap-5'>
					<div>
						<img src={card1} alt='card' />
					</div>
					<div className='text-start'>
						<p className='text-[16px] font-medium'>Оригинальные запчасти</p>
						<p className='text-[12px] opacity-70'>730 товаров</p>
					</div>
				</div>
			}
		</Card.Grid>
		<Card.Grid className='cursor-pointer' style={gridStyle}>
			{
				<div className='flex items-center gap-5'>
					<div>
						<img src={card2} alt='card' />
					</div>
					<div className='text-start'>
						<p className='text-[16px] font-medium'>Неоригинальные запчасти</p>
						<p className='text-[12px] opacity-70'>278 товаров</p>
					</div>
				</div>
			}
		</Card.Grid>
		<Card.Grid className='cursor-pointer' style={gridStyle}>
			{
				<div className='flex items-center gap-5'>
					<div>
						<img src={card3} alt='card' />
					</div>
					<div className='text-start'>
						<p className='text-[16px] font-medium'>Запчасти ВАЗ, ГАЗ, КАМАЗ</p>
						<p className='text-[12px] opacity-70'>730 товаров</p>
					</div>
				</div>
			}
		</Card.Grid>
		<Card.Grid className='cursor-pointer' style={gridStyle}>
			{
				<div className='flex items-center gap-5'>
					<div>
						<img src={card1} alt='card' />
					</div>
					<div className='text-start'>
						<p className='text-[16px] font-medium'>Оригинальные запчасти</p>
						<p className='text-[12px] opacity-70'>730 товаров</p>
					</div>
				</div>
			}
		</Card.Grid>
		<Card.Grid className='cursor-pointer' style={gridStyle}>
			{
				<div className='flex items-center gap-5'>
					<div>
						<img src={card2} alt='card' />
					</div>
					<div className='text-start'>
						<p className='text-[16px] font-medium'>Неоригинальные запчасти</p>
						<p className='text-[12px] opacity-70'>278 товаров</p>
					</div>
				</div>
			}
		</Card.Grid>
		<Card.Grid className='cursor-pointer' style={gridStyle}>
			{
				<div className='flex items-center gap-5'>
					<div>
						<img src={card3} alt='card' />
					</div>
					<div className='text-start'>
						<p className='text-[16px] font-medium'>Запчасти ВАЗ, ГАЗ, КАМАЗ</p>
						<p className='text-[12px] opacity-70'>730 товаров</p>
					</div>
				</div>
			}
		</Card.Grid>
		<Card.Grid className='cursor-pointer' style={gridStyle}>
			{
				<div className='flex items-center gap-5'>
					<div>
						<img src={card1} alt='card' />
					</div>
					<div className='text-start'>
						<p className='text-[16px] font-medium'>Оригинальные запчасти</p>
						<p className='text-[12px] opacity-70'>730 товаров</p>
					</div>
				</div>
			}
		</Card.Grid>
		<Card.Grid className='cursor-pointer' style={gridStyle}>
			{
				<div className='flex items-center gap-5'>
					<div>
						<img src={card2} alt='card' />
					</div>
					<div className='text-start'>
						<p className='text-[16px] font-medium'>Неоригинальные запчасти</p>
						<p className='text-[12px] opacity-70'>278 товаров</p>
					</div>
				</div>
			}
		</Card.Grid>
		<Card.Grid className='cursor-pointer' style={gridStyle}>
			{
				<div className='flex items-center gap-5'>
					<div>
						<img src={card3} alt='card' />
					</div>
					<div className='text-start'>
						<p className='text-[16px] font-medium'>Запчасти ВАЗ, ГАЗ, КАМАЗ</p>
						<p className='text-[12px] opacity-70'>730 товаров</p>
					</div>
				</div>
			}
		</Card.Grid>
		<Card.Grid className='cursor-pointer' style={gridStyle}>
			{
				<div className='flex items-center gap-5'>
					<div>
						<img src={card1} alt='card' />
					</div>
					<div className='text-start'>
						<p className='text-[16px] font-medium'>Оригинальные запчасти</p>
						<p className='text-[12px] opacity-70'>730 товаров</p>
					</div>
				</div>
			}
		</Card.Grid>
		<Card.Grid className='cursor-pointer' style={gridStyle}>
			{
				<div className='flex items-center gap-5'>
					<div>
						<img src={card2} alt='card' />
					</div>
					<div className='text-start'>
						<p className='text-[16px] font-medium'>Неоригинальные запчасти</p>
						<p className='text-[12px] opacity-70'>278 товаров</p>
					</div>
				</div>
			}
		</Card.Grid>
		<Card.Grid
			className='cursor-pointer'
			style={
				(gridStyle, { padding: '0px 0px', margin: '0px 0px', border: 'none' })
			}
		>
			{
				<img
					className='!w-[100%] transform translate-0.5 !h-[100%]'
					src={ctegory}
					alt='ctegory'
				/>
			}
		</Card.Grid>
	</Card>
)
export default AntdCards
