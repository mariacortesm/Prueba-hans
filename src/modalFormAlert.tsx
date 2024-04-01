import formRegister from './assets/form_register.jpg'
import { useEffect } from 'react';

const ModalFormAlert = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            const timeoutId = setTimeout(() => {
                onClose();
            }, 2000); 
            return () => clearTimeout(timeoutId);
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;


    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
            <div className="bg-white p-5 rounded-lg z-50">
                <div className="flex justify-end">
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
                        X
                    </button>
                </div>
                <div className='flex flex-col p-5 justify-center items-center'>
                    <h2 className='text-center font-bold'>¡Felicitaciones! Te has inscrito correctamente</h2>
                    <img src={formRegister} className=' w-60 '/>
                    <h3 className='w-96 text-center'>Pronto recibirás un correo electrónico con todos los detalles del evento.  <br /> <br />¡Prepárate para sumergirte en una experiencia inolvidable!</h3>
                </div>
            </div>
        </div>
    )
}

export default ModalFormAlert;