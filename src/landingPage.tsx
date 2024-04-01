import user from './assets/avatar_profile.jpg'
import carrito from './assets/Carrito_de_compras.png'
import storeuno from './assets/store-1.png'
import storedos from './assets/store-2.png'
import storetres from './assets/store-3.png'
import storecuatro from './assets/store-4.png'
import star from './assets/star_completed.png'
import logo from './assets/logo.png'
import landinguno from './assets/1.png'
import placeOne from './assets/place-1.png'
import placeTwo from './assets/place-2.jpg'
import landingPhoto from './assets/landing-photo.png'
import panelistaUno from './assets/panelista-1.png'
import { useState } from 'react'
import ModalStore from './modalStore'
import ModalRegister from './modalRegister'
import ModalLogin from './modalLogin'
import ModalForm from './modalForm'
import ModalFormAlert from './modalFormAlert'
import FooterPage from './footerPage'
import PanelSection from './panelSection'
import { Link } from "react-router-dom";
import PhotoSection from './photoSection'
import LandingImages from './landingImages'


const LandingPage = ()=> {
    const [isStoreModalShow, setIsStoreModalShow] = useState(false);
    const [isRegisterModalShow, setIsRegisterModalShow] = useState(false);
    const [isLoginModalShow, setIsLoginModalShow] = useState(false);
    const [isFormModalShow, setIsFormModalShow] = useState(false);
    const [isFormAlertModalShow, setIsFormAlertModalShow] = useState(false);

    const openStoreModal = () => {
        setIsStoreModalShow(true);
    };

    const closeStoreModal = () => {
        setIsStoreModalShow(false);
    };

    const openRegisterModal = () => {
        setIsRegisterModalShow(true);
    };

    const closeRegisterModal = () => {
        setIsRegisterModalShow(false);
    };

    const openLoginModal = () => {
        setIsLoginModalShow(true);
    };

    const closeLoginModal = () => {
        setIsLoginModalShow(false);
    };

    const openFormModal = () => {
        setIsFormModalShow(true);
    };

    const closeFormModal = () => {
        setIsFormModalShow(false);
    };

    const openFormAlertModal = () => {
        setIsFormAlertModalShow(true);
    };

    const closeFormAlertModal = () => {
        setIsFormAlertModalShow(false);
    };

    return (
        <div className='bg-[#E5E8F3]'>
            <div className="bg-[#198f9e] h-16 flex justify-between"> 
                <img src={logo} className='h-9 m-3'/>
                <h2 className='mt-5 text-white'>INICIO</h2>
                <h2 className='mt-5 text-white'>NUESTROS PRODUCTOS</h2>
                <h2 className='mt-5 text-white'>CONÓCENOS</h2>
                <h2 className='mt-5 text-white'>CONTÁCTANOS</h2>
                <div className='flex justify-end'>
                    <img src={carrito} className='h-10 left-2 m-3' onClick={openStoreModal}/>  
                    <ModalStore isOpen={isStoreModalShow} onClose={closeStoreModal} /> 
                    <img src={user} alt="avatar-user" className='h-10 w-10 rounded-full m-3 mr-5 object-cover' onClick={openLoginModal} />  
                    <ModalLogin isOpen={isLoginModalShow} onClose={closeLoginModal} openModal={openRegisterModal} ModalRegister={ModalRegister}/> 
                    {<ModalRegister isOpen={isRegisterModalShow} onClose={closeRegisterModal}/>}


                </div>     
            </div>
            <LandingImages />
            <div className='px-7 pt-5'>
                {/* <Link to={'/calendar_event'}><img src={landinguno} className='w-full rounded-[100px]'/></Link> */}
            </div>
            <h2 className='my-5 mx-16 text-center text-black font-bold text-3xl'>CONOCE MÁS SOBRE NUESTRO EVENTO</h2>
            <div className='flex mx-20'>
                <div>
                    <img src={placeTwo} className='rounded-xl w-96 h-44 object-cover m-3' /> 
                    <img src={placeOne} className='rounded-xl w-96 h-44 object-cover m-3' /> 
                </div>
                <div className='flex flex-col m-10 bg-white rounded-xl h-auto w-[60%]  content-center justify-center items-center shadow-xl'>
                    <p className='p-4 text-center'>Únete a nosotros este 12, 13 y 14 de abril en el Salón de eventos Inn para el evento de talla internacional donde médicos de diferentes especialidades se reunirán en el mismo espacio para compartir experiencias profesionales y descubrir, por medio de Hansbiomed, cuál es la mejor forma de aplicar Hilos Tensores MINT, con resultados efectivos y con procesos correctos de aplicación.</p>
                    <button className=' bg-[#ccd1e8] rounded-3xl p-2 w-24' onClick={openFormModal}>Inscríbete</button>
                    <ModalForm isOpen={isFormModalShow} onClose={closeFormModal} openModal={openFormAlertModal} ModalFormAlert={ModalFormAlert}/> 
                    {<ModalFormAlert isOpen={isFormAlertModalShow} onClose={closeFormAlertModal}/>}
                </div>
            </div>
            <PhotoSection />
            <h2 className='mx-14 my-16 text-black font-bold text-3xl text-center'>CONOCE A NUESTROS PANELISTAS</h2>
            <PanelSection />
            <Link to={'/calendar_event'}>
                <div className='flex justify-center items-center'>
            <button className='flex justify-center bg-white p-2 w-32 rounded-xl'>Ver más</button>
            </div>
            </Link>
            <h2 className='mx-14 my-14 text-black font-bold text-3xl text-center'>PRODUCTOS EXCLUSIVOS EN PREVENTA</h2>
            <div className='flex flex-col justify-center items-center bg-[#ccd1e8] h-auto p-5 mx-20  mb-7 rounded-xl'>
                <div className='flex justify-center gap-14 '>
                <div className='bg-white h-96 w-60 p-4 rounded-xl relative shadow-xl'>
                    <div className='absolute top-4 right-0 w-20 h-8 p-1 bg-[#68C560] text-white flex justify-end items-end'>30% OFF</div>
                    <img src={storeuno} className='rounded-xl'/>
                    <h2 className='mt-4 font-bold'>UltraLift Threads</h2>
                    <h3 className='line-through mt-2'>$ 1.586.000</h3>
                    <h2 className='mt-2 text-xl'>$1.110.200</h2>
                    <h2 className='mt-2'>Envío gratis</h2>
                    <div className='flex mt-2'>
                        <img src={star} className='h-5'/>
                        <img src={star} className='h-5 mx-1'/>
                        <img src={star} className='h-5 mx-1'/>
                        <img src={star} className='h-5 mx-1'/>
                        <img src={star} className='h-5 mx-1'/>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className='rounded-2xl bg-[#ccd1e8] py-2 w-42 my-3 content-center px-4'>Añadir al carrito</button>
                    </div>
                </div>

                    <div className='bg-white h-96 w-60 p-4 rounded-xl relative shadow-xl'>
                    <div className='absolute top-4 right-0 w-20 h-8 p-1 bg-[#68C560] text-white flex justify-end items-end'>30% OFF</div>
                        <img src={storedos} className='rounded-xl'/>
                        <h2 className='mt-4 font-bold'>UltraLift Threads</h2>
                        <h3 className='line-through mt-2'>$ 1.586.000</h3>
                        <h2 className='mt-2 text-xl'>$1.110.200</h2>
                        <h2 className='mt-2'>Envío gratis</h2>
                        <div className='flex mt-2'>
                            <img src={star} className='h-5'/>
                            <img src={star} className='h-5 mx-1'/>
                            <img src={star} className='h-5 mx-1'/>
                            <img src={star} className='h-5 mx-1'/>
                            <img src={star} className='h-5 mx-1'/>
                        </div>
                        <div className='flex justify-center items-center'>
                            <button className='rounded-2xl bg-[#ccd1e8] py-2 w-42 my-3 content-center px-4'>Añadir al carrito</button>
                        </div>
                     </div>
                    <div className='bg-white h-96 w-60 p-4 rounded-xl relative shadow-xl'>
                    <div className='absolute top-4 right-0 w-20 h-8 p-1 bg-[#68C560] text-white flex justify-end items-end'>30% OFF</div>
                        <img src={storetres} className='rounded-xl'/>
                        <h2 className='mt-4 font-bold'>UltraLift Threads</h2>
                        <h3 className='line-through mt-2'>$ 1.586.000</h3>
                        <h2 className='mt-2 text-xl'>$1.110.200</h2>
                        <h2 className='mt-2'>Envío gratis</h2>
                        <div className='flex mt-2'>
                            <img src={star} className='h-5'/>
                            <img src={star} className='h-5 mx-1'/>
                            <img src={star} className='h-5 mx-1'/>
                            <img src={star} className='h-5 mx-1'/>
                            <img src={star} className='h-5 mx-1'/>
                        </div>
                        <div className='flex justify-center items-center'>
                            <button className='rounded-2xl bg-[#ccd1e8] py-2 w-42 my-3 content-center px-4'>Añadir al carrito</button>
                        </div>
                    </div>
                    <div className='bg-white h-96 w-60 p-4 rounded-xl relative shadow-xl'>
                    <div className='absolute top-4 right-0 w-20 h-8 p-1 bg-[#68C560] text-white flex justify-end items-end'>30% OFF</div>
                        <img src={storecuatro} className='rounded-xl'/>
                        <h2 className='mt-4 font-bold'>UltraLift Threads</h2>
                        <h3 className='line-through mt-2'>$ 1.586.000</h3>
                        <h2 className='mt-2 text-xl'>$1.110.200</h2>
                        <h2 className='mt-2'>Envío gratis</h2>
                        <div className='flex mt-2'>
                            <img src={star} className='h-5'/>
                            <img src={star} className='h-5 mx-1'/>
                            <img src={star} className='h-5 mx-1'/>
                            <img src={star} className='h-5 mx-1'/>
                            <img src={star} className='h-5 mx-1'/>
                        </div>
                        <div className='flex justify-center items-center'>
                            <button className='rounded-2xl bg-[#ccd1e8] py-2 w-42 my-3 content-center px-4'>Añadir al carrito</button>
                        </div>
                    </div>
                </div>
                <Link to={'/store'}><button className='flex justify-center items-center bg-white py-2 px-5 rounded-xl mt-3'>Ir a la tienda</button></Link>
            </div>
            <FooterPage />
        </div>
    )
}

export default LandingPage;