const ModalForm = ({ isOpen, onClose, openModal, ModalFormAlert }) => {
    if (!isOpen) return null;
    const handleShowModalForm = () => {
        onClose();
        openModal(ModalFormAlert);
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
            <div className="bg-white p-5 rounded-lg z-50">
                <div className="flex justify-end">
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
                        X
                    </button>
                </div>
                <div className='flex flex-col p-5'>
                    <h2 className='my-2 flex justify-center font-bold text-lg'>¡Completa el formulario de inscripción!</h2>
                    <input className='border border-gray-800 w-96 rounded-xl p-2 my-2' placeholder='Ingresa tu nombre completo'></input>
                    <input className='border border-gray-800 w-96 rounded-xl p-2 my-2' placeholder='Ingresa tu correo electrónico'></input>
                    <input className='border border-gray-800 w-96 rounded-xl p-2 my-2' placeholder='Ingresa el nombre de tu organización'></input>
                    <h3 className="mt-3 ">Selecciona el horario en el que asistirás</h3>
                    <div className="flex m-5">
                        <input type="checkbox" id="manana" className="mx-2 accent-pink-500" />
                        <label htmlFor="manana" className="mx-2">Mañana</label>
                        <input type="checkbox" id="tarde" className="mx-2 accent-pink-500" />
                        <label htmlFor="tarde" className="mx-2">Tarde</label>
                        <input type="checkbox" id="noche" className="mx-2 accent-pink-500" />
                        <label htmlFor="noche" className="mx-2">Noche</label>
                    </div>

                    <div className="flex justify-center">
                        <button className='flex justify-center bg-[#ccd1e8] p-2 my-2 w-36 rounded-2xl' onClick={handleShowModalForm}>Inscribirse</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalForm;
