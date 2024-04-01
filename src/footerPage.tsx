import iconX from './assets/icon_x.png'
import iconFb from './assets/icon_facebook.png'
import iconInsta from './assets/icon_instagram.png'
import logo from './assets/logo.png'


const FooterPage = ()=> {
    return (
        <div className='flex bg-[#198f9e] h-auto p-4'>
        <div className='block w-60 mr-10 ml-5'>
            <img src={logo} className='h-9 mb-4'/>
            <p className='text-white text-sm '>Hansbiomed es una empresa Líder en desarrollo, fabricación e investigación de productos a la vanguardia de medicina estética en productos de rejuvenecimiento facial y cuidado de la piel.</p>
        </div>
        <div className='block w-60 mx-10 mt-12'>
            <h4 className='text-white mb-4 text-center'>Información de contacto:</h4>
            <p className='text-white text-sm text-center'>Av. 19 #120-71 ofc. 216 Bogotá, <br />
            +(601) 765 5727 <br />
            hanscolombia@hansbiomed.co</p>
        </div>
        <div className='block w-60 mx-10 mt-12'>
            <h4 className='text-white mb-4 text-center'>Síguenos en nuestras redes sociales:</h4>
            <div className='flex justify-center items-center'>
                <img src={iconInsta} className='h-10 mx-4'/>
                <img src={iconFb} className='h-10'/>
                <img src={iconX} className='h-10'/>
            </div>
        </div>
        <div className='block w-60 ml-10 mt-12'>
            <h4 className='text-white mb-4 text-center'>Suscríbete a nuestro Newsletter</h4>
            <input className='w-60 rounded-3xl py-2 px-3' placeholder='Ingresa tu correo electrónico'></input>
        </div>
        <div className='flex ml-5 mt-12'>
            <button className='bg-white px-4 py-2 rounded-2xl h-9 mt-11'>Suscríbete</button>
        </div>
    </div>
    )
}

export default FooterPage;