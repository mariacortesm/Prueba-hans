
import search from './assets/search.png'
import storeuno from './assets/store-1.png'
import storedos from './assets/store-2.png'
import storetres from './assets/store-3.png'
import storecuatro from './assets/store-4.png'
import star from './assets/star_completed.png'
import { useState } from 'react'
import ModalDescriptionProduct from './modalDescriptionProduct'
import { HeaderPage } from './headerPage.tsx'

const Store = ()=> {
    const [isDescriptionStoreModalShow, setIsDescriptionStoreModalShow] = useState(false);

    const openDescriptionStoreModal = () => {
        setIsDescriptionStoreModalShow(true);
    };

    const closeDescriptionStoreModal = () => {
        setIsDescriptionStoreModalShow(false);
    };

    return (
        <div>
            <HeaderPage />
            <div className='flex justify-around'>
                <div className='flex border border-solid rounded-xl border-gray-800 w-[450px] h-9'>
                    <input className='pl-1 m-2 w-96' placeholder='Buscar productos'></input>
                    <img src={search} alt="icon-search" className='h-5 m-2'/>
                </div>
                <div>
                    <label className='mx-3'>Ordenar por</label>
                    <select className='w-52 p-2 border border-solid rounded-xl border-gray-800'>
                        <option>Los más comprados</option>
                        <option>Menor a mayor precio</option>
                        <option>Mayor a menor precio</option>
                    </select>
                </div>
                <div>
                    <label className='mx-3'>Filtrar por</label>
                    <select className='w-52 p-2 border border-solid rounded-xl border-gray-800'>
                        <option>Categorías</option>
                        <option>Menor a mayor precio</option>
                        <option>Mayor a menor precio</option>
                    </select>
                </div>
            </div>
            <div className='flex flex-wrap bg-[#b2badd] h-auto rounded-xl m-7 p-7 justify-around gap-5'>
                <div className='bg-white h-96 w-60 py-4 px-6 rounded-xl relative shadow-xl' onClick={openDescriptionStoreModal}>
                <div className='absolute top-4 right-0 w-20 h-8 p-1 bg-[#68C560] text-white flex justify-end items-end'>30% OFF</div>
                    <img src={storeuno} className='rounded-xl'/>
                    <h2 className='mt-4 font-bold'>UltraLift Threads</h2>
                    <h3 className='line-through mt-2'>$ 1.586.000</h3>
                    <h2 className=' text-2xl'>$1.110.200</h2>
                    <h2 className='mt-2 font-bold'>Envío gratis</h2>
                    <div className='flex mt-2'>
                        <img src={star} className='h-5'/>
                        <img src={star} className='h-5 mx-1'/>
                        <img src={star} className='h-5 mx-1'/>
                        <img src={star} className='h-5 mx-1'/>
                        <img src={star} className='h-5 mx-1'/>
                    </div>
                    <div className='flex justify-center items-center mt-2'>
                        <button className='rounded-2xl bg-[#ccd1e8] px-4 p-2 w-42 my-2'>Añadir al carrito</button>
                    </div>
                </div>
                <ModalDescriptionProduct isOpen={isDescriptionStoreModalShow} onClose={closeDescriptionStoreModal}/>
                <div className='bg-white h-96 w-60 py-4 px-6 rounded-xl relative shadow-xl'>
                    <div className='absolute top-4 right-0 w-20 h-8 p-1 bg-[#68C560] text-white flex justify-end items-end'>30% OFF</div>
                    <img src={storedos} className='rounded-xl'/>
                    <h2 className='mt-4 font-bold'>UltraLift Threads</h2>
                    <h3 className='line-through mt-2'>$ 1.586.000</h3>
                    <h2 className=' text-2xl'>$1.110.200</h2>
                    <h2 className='mt-2 font-bold'>Envío gratis</h2>
                    <div className='flex mt-2'>
                        <img src={star} className='h-5'/>
                        <img src={star} className='h-5 mx-1'/>
                        <img src={star} className='h-5 mx-1'/>
                        <img src={star} className='h-5 mx-1'/>
                        <img src={star} className='h-5 mx-1'/>
                    </div>
                    <div className='flex justify-center items-center mt-2'>
                        <button className='rounded-2xl bg-[#ccd1e8] px-4 p-2 w-42 my-2'>Añadir al carrito</button>
                    </div>
                </div>
                <div className='bg-white h-96 w-60 py-4 px-6 rounded-xl relative shadow-xl'>
                    <div className='absolute top-4 right-0 w-20 h-8 p-1 bg-[#68C560] text-white flex justify-end items-end'>30% OFF</div>
                    <img src={storetres} className='rounded-xl'/>
                    <h2 className='mt-4 font-bold'>UltraLift Threads</h2>
                    <h3 className='line-through mt-2'>$ 1.586.000</h3>
                    <h2 className='text-2xl'>$1.110.200</h2>
                    <h2 className='mt-2 font-bold'>Envío gratis</h2>
                    <div className='flex mt-2'>
                        <img src={star} className='h-5'/>
                        <img src={star} className='h-5 mx-1'/>
                        <img src={star} className='h-5 mx-1'/>
                        <img src={star} className='h-5 mx-1'/>
                        <img src={star} className='h-5 mx-1'/>
                    </div>
                    <div className='flex justify-center items-center mt-2'>
                        <button className='rounded-2xl bg-[#ccd1e8] px-4 p-2 w-42 my-2'>Añadir al carrito</button>
                    </div>
                </div>
                <div className='bg-white h-96 w-60 py-4 px-6 rounded-xl relative shadow-xl'>
                    <div className='absolute top-4 right-0 w-20 h-8 p-1 bg-[#68C560] text-white flex justify-end items-end'>30% OFF</div>
                    <img src={storecuatro} className='rounded-xl'/>
                    <h2 className='mt-4 font-bold'>UltraLift Threads</h2>
                    <h3 className='line-through mt-2'>$ 1.586.000</h3>
                    <h2 className='text-2xl'>$1.110.200</h2>
                    <h2 className='mt-2 font-bold'>Envío gratis</h2>
                    <div className='flex mt-2'>
                        <img src={star} className='h-5'/>
                        <img src={star} className='h-5 mx-1'/>
                        <img src={star} className='h-5 mx-1'/>
                        <img src={star} className='h-5 mx-1'/>
                        <img src={star} className='h-5 mx-1'/>
                    </div>
                    <div className='flex justify-center items-center mt-2'>
                        <button className='rounded-2xl bg-[#ccd1e8] px-4 p-2 w-42 my-2'>Añadir al carrito</button>
                    </div>
                </div>
                <div className='bg-white h-96 w-60 py-4 px-6 rounded-xl relative shadow-xl'>
                    <div className='absolute top-4 right-0 w-20 h-8 p-1 bg-[#68C560] text-white flex justify-end items-end'>30% OFF</div>
                    <img src={storeuno} className='rounded-xl'/>
                    <h2 className='mt-4 font-bold'>UltraLift Threads</h2>
                    <h3 className='line-through mt-2'>$ 1.586.000</h3>
                    <h2 className=' text-2xl'>$1.110.200</h2>
                    <h2 className='mt-2 font-bold'>Envío gratis</h2>
                    <div className='flex mt-2'>
                        <img src={star} className='h-5'/>
                        <img src={star} className='h-5 mx-1'/>
                        <img src={star} className='h-5 mx-1'/>
                        <img src={star} className='h-5 mx-1'/>
                        <img src={star} className='h-5 mx-1'/>
                    </div>
                    <div className='flex justify-center items-center mt-2'>
                        <button className='rounded-2xl bg-[#ccd1e8] px-4 p-2 w-42 my-2'>Añadir al carrito</button>
                    </div>
                </div>
                <div className='bg-white h-96 w-60 py-4 px-6 rounded-xl relative shadow-xl'>
                    <div className='absolute top-4 right-0 w-20 h-8 p-1 bg-[#68C560] text-white flex justify-end items-end'>30% OFF</div>
                    <img src={storedos} className='rounded-xl'/>
                    <h2 className='mt-4 font-bold'>UltraLift Threads</h2>
                    <h3 className='line-through mt-2'>$ 1.586.000</h3>
                    <h2 className=' text-2xl'>$1.110.200</h2>
                    <h2 className='mt-2 font-bold'>Envío gratis</h2>
                    <div className='flex mt-2'>
                        <img src={star} className='h-5'/>
                        <img src={star} className='h-5 mx-1'/>
                        <img src={star} className='h-5 mx-1'/>
                        <img src={star} className='h-5 mx-1'/>
                        <img src={star} className='h-5 mx-1'/>
                    </div>
                    <div className='flex justify-center items-center mt-2'>
                        <button className='rounded-2xl bg-[#ccd1e8] px-4 p-2 w-42 my-2'>Añadir al carrito</button>
                    </div>
                </div>
                <div className='bg-white h-96 w-60 py-4 px-6 rounded-xl relative shadow-xl'>
                    <div className='absolute top-4 right-0 w-20 h-8 p-1 bg-[#68C560] text-white flex justify-end items-end'>30% OFF</div>
                    <img src={storetres} className='rounded-xl'/>
                    <h2 className='mt-4 font-bold'>UltraLift Threads</h2>
                    <h3 className='line-through mt-2'>$ 1.586.000</h3>
                    <h2 className='text-2xl'>$1.110.200</h2>
                    <h2 className='mt-2 font-bold'>Envío gratis</h2>
                    <div className='flex mt-2'>
                        <img src={star} className='h-5'/>
                        <img src={star} className='h-5 mx-1'/>
                        <img src={star} className='h-5 mx-1'/>
                        <img src={star} className='h-5 mx-1'/>
                        <img src={star} className='h-5 mx-1'/>
                    </div>
                    <div className='flex justify-center items-center mt-2'>
                        <button className='rounded-2xl bg-[#ccd1e8] px-4 p-2 w-42 my-2'>Añadir al carrito</button>
                    </div>
                </div>
                <div className='bg-white h-96 w-60 py-4 px-6 rounded-xl relative shadow-xl'>
                    <div className='absolute top-4 right-0 w-20 h-8 p-1 bg-[#68C560] text-white flex justify-end items-end'>30% OFF</div>
                    <img src={storecuatro} className='rounded-xl'/>
                    <h2 className='mt-4 font-bold'>UltraLift Threads</h2>
                    <h3 className='line-through mt-2'>$ 1.586.000</h3>
                    <h2 className='text-2xl'>$1.110.200</h2>
                    <h2 className='mt-2 font-bold'>Envío gratis</h2>
                    <div className='flex mt-2'>
                        <img src={star} className='h-5'/>
                        <img src={star} className='h-5 mx-1'/>
                        <img src={star} className='h-5 mx-1'/>
                        <img src={star} className='h-5 mx-1'/>
                        <img src={star} className='h-5 mx-1'/>
                    </div>
                    <div className='flex justify-center items-center mt-2'>
                        <button className='rounded-2xl bg-[#ccd1e8] p-2 w-42 my-2'>Añadir al carrito</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center m-7'>
                <button className='bg-[#ccd1e8] px-4 rounded-xl p-2 mx-2'>Página anterior</button>
                <textarea className='border border-gray-600 bg-white rounded-lg w-7 h-7 mt-2 text-center mx-2'>1</textarea>
                <button className='bg-[#ccd1e8] px-4 rounded-xl p-2 mx-2'>Página siguiente</button>
            </div>
        </div>

    )
}

export default Store;