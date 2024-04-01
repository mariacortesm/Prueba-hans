
const ModalRegister = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed top-12 right-12 flex  z-50">
            <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
            <div className="bg-white p-5 rounded-lg z-50">
                <div className="flex justify-end">
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
                        X
                    </button>
                </div>
                <div className='flex flex-col justify-center items-center p-5'>
                    <h2 className='my-4 flex justify-center font-bold text-xl '>¡Regístrate!</h2>
                    <input className='border border-gray-800 w-96 rounded-xl p-2 my-2' placeholder='Ingresa tu nombre'></input>
                    <input className='border border-gray-800 w-96 rounded-xl p-2 my-2' placeholder='Ingresa tu correo electrónico'></input>
                    <input className='border border-gray-800 w-96 rounded-xl p-2 my-2' placeholder='Ingresa tu contraseña'></input>
                    <input className='border border-gray-800 w-96 rounded-xl p-2 my-2' placeholder='Confirma tu contraseña'></input>
                    <button className=' bg-primary p-2 my-2 w-36 rounded-2xl '>Registrarse</button>
                </div>
            </div>
        </div>
    )
}

export default ModalRegister;