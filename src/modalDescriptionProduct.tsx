import storeuno from './assets/store-1.png'
import star from './assets/star_completed.png'
import metodosDePago from './assets/metodos_de_pago.png'

const ModalDescriptionProduct = ( {isOpen, onClose} )=> {
    if (!isOpen) return null;

    return (
        <div className="fixed justify-center top-12 flex z-50">
            <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
            <div className="bg-white p-3 rounded-lg z-50">
                <div className="flex justify-end">
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
                        X
                    </button>
                </div>
                <div className='flex p-5'>
                    <div className='w-96 mr-10'>
                       <img src={storeuno} className='rounded-xl '/>
                       <h2 className='my-2 font-bold text-xl'>Descripción del producto</h2>
                       <p className='my-2 text-sm'>Estos hilos tensores están fabricados con materiales biocompatibles de última generación para ofrecer un rejuvenecimiento facial no quirúrgico. RevitaThread Pro se utiliza para levantar y redefinir áreas como el mentón, las mejillas y el cuello, proporcionando resultados naturales y de larga duración.</p>
                    </div>
                    <div className='flex flex-col mr-10'>
                        <h2 className='mb-2 flex font-bold text-2xl'>UltraLift Threads</h2>
                        <div className='flex my-2'>
                            <img src={star} className='h-5'/>
                            <img src={star} className='h-5 mx-1'/>
                            <img src={star} className='h-5 mx-1'/>
                            <img src={star} className='h-5 mx-1'/>
                            <img src={star} className='h-5 mx-1'/>
                        </div>
                        <div className='flex'>
                        <h3 className='line-through my-2'>$ 1.586.000</h3>
                        <div className='bg-[#68C560] mx-5 h-7 my-2 px-2 py-1'>
                           <p className='font-bold'>30% OFF</p> 
                        </div>
                        </div>
                        <h2 className='my-2 text-3xl'>$1.110.200</h2>
                        <h2 className='mt-4'>Métodos de pago:</h2>
                        <img src={metodosDePago} className='w-72 my-2'/> 
                        <h2 className='my-2 font-semibold text-[#68C560]'>Envío gratis a todo el país</h2>
                        <button className='bg-[#ccd1e8] p-2 mt-6 w-36 rounded-2xl '>Añadir al carrito</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ModalDescriptionProduct;