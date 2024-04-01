import carritoVacio from './assets/ilustration_carrito.jpg'

const ModalStore = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed top-12 right-24 flex  z-50">
            <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
            <div className="bg-white p-5 rounded-lg z-50">
                <div className="flex justify-end">
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
                        X
                    </button>
                </div>
                <div className='p-5'>
                    <img src={carritoVacio} className='w-96 flex justify-center'/>
                    <h2 className='my-2 flex justify-center font-bold'>¡Tu carrito está vacío!</h2>
                    <h3 className=' flex justify-center'>Explora nuestros productos en nuestra tienda virtual</h3>
                </div>
            </div>
        </div>
    )
}

export default ModalStore;
