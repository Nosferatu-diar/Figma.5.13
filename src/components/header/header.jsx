import { Link } from 'react-router-dom'
import {
	PhoneOutlined,
	SearchOutlined,
	ShoppingCartOutlined,
	UserOutlined,
} from '@ant-design/icons'
import Telegram from '../../assets/telegram.svg'
import Logotype from '../../assets/logotype.svg'
import { Button } from 'antd'
import menu from '../../assets/menu.svg'

const Header = () => {
	return (
		<section className='bg-white '>
			<nav className='border-b border-gray-300 py-2'>
				<div className='flex items-center justify-between w-[80%] m-auto'>
					<div className='flex items-center gap-5'>
						<img src={Telegram} alt='Telegram' />
						<p className='text-sm opacity-80'>
							г. Нижний Новгород, Нижегородская обл.
						</p>
					</div>
					<div className='flex items-center gap-5'>
						<PhoneOutlined />
						<p className='text-lg'>+7 (347) 229-46-45</p>
					</div>
					<div className='flex items-center gap-5'>
						<p className='text-sm opacity-80 cursor-pointer'>Доставка</p>
						<p className='text-sm opacity-80 cursor-pointer'>Оплата</p>
						<p className='text-sm opacity-80 cursor-pointer'>Контакты</p>
					</div>
				</div>
			</nav>
			<nav className='border-b border-gray-300 py-2'>
				<div className='w-[80%] m-auto flex flex-col'>
					{/* Top */}
					<div className='flex items-center justify-between gap-10 py-2'>
						<Link to={'/'}>
							<div>
								<img src={Logotype} alt='Logotype' />
							</div>
						</Link>
						<form className='flex items-center border rounded-lg	border-gray-300 '>
							<input
								type='text'
								placeholder='Введите номер запчасти или VIN'
								className='outline-none px-3 w-120'
							/>
							<button className='flex rounded-r-lg  items-center gap-x-3 py-2.5 px-4 bg-violet-500 text-white cursor-pointer hover:bg-violet-600'>
								<SearchOutlined /> Искать
							</button>
						</form>
						<div className='flex items-center gap-x-2'>
							<UserOutlined className='!text-violet-700 !text-lg cursor-pointer' />
							<p className=' cursor-pointer'>Вход /</p>
							<p className=' cursor-pointer'>Регистрация</p>
						</div>
						<div>
							<Button style={{ padding: '18px 15px' }} className='!gap-x-3 '>
								<ShoppingCartOutlined />
								Корзина
								<div className=' w-5 h-5 bg-amber-400 rounded-sm'>0</div>
							</Button>
						</div>
					</div>
					{/* Bottom */}
					<div className='flex gap-10 py-2'>
						<Button
							size='large'
							className='!bg-violet-500 !text-white !gap-x-2 '
						>
							<img src={menu} alt='menu' /> Все категории
						</Button>
						<Button size='large' className=''>
							Запчасти для ТО
						</Button>
						<Button size='large' className=''>
							Автомасла
						</Button>
						<Button size='large' className=''>
							Неоригинальные запчасти
						</Button>
						<Button size='large' className=''>
							Лампочки
						</Button>{' '}
						<Button size='large' className=''>
							Аккумуляторы
						</Button>
					</div>
				</div>
			</nav>
		</section>
	)
}

export default Header
