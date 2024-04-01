import logo from './assets/logo.png'
import user from './assets/avatar_profile.jpg'
import carrito from './assets/Carrito_de_compras.png'
import { Link } from 'react-router-dom'

export const HeaderPage = ()=> {
    return (
        <div className='flex justify-between items-center'>
            <div className="flex justify-start"> 
                <Link to={'/'}>
                <img src={logo} className='h-9 m-5'/>
                </Link>
            </div>  
            <div className="flex justify-end items-end"> 
                <div className="flex items-center">
                    <img src={carrito} className='h-10 m-5'/>
                    <img src={user} alt="avatar-user" className='h-10 w-10 rounded-full m-3 mr-5 object-cover'/>       
                </div>
            </div>
        </div>
    )
}
