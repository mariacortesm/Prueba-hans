import fotoUno from './assets/photo-1.jpg';
import fotoDos from './assets/photo-5.jpg';
import fotoTres from './assets/photo-3.jpg';
import fotoCuatro from './assets/photo-4.jpg';
import fotoCinco from './assets/photo-6.jpg';

const PhotoSection = () => {
    return (
        <div className="flex my-10 overflow-hidden">
            <div className="group relative opacity-75 hover:opacity-100">
                <img src={fotoUno} className='h-96 w-80 object-cover transition-transform transform group-hover:scale-110'/>
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
            </div>
            <div className="group relative opacity-75 hover:opacity-100">
                <img src={fotoDos} className='h-96 w-80 object-cover transition-transform transform group-hover:scale-110'/>
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
            </div>
            <div className="group relative opacity-75 hover:opacity-100">
                <img src={fotoTres} className='h-96 w-80 object-cover transition-transform transform group-hover:scale-110'/>
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
            </div>
            <div className="group relative opacity-75 hover:opacity-100">
                <img src={fotoCuatro} className='h-96 w-80 object-cover transition-transform transform group-hover:scale-110'/>
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
            </div>
            <div className="group relative opacity-75 hover:opacity-100">
                <img src={fotoCinco} className='h-96 w-80 object-cover transition-transform transform group-hover:scale-110'/>
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
            </div>
        </div>
    )
}

export default PhotoSection;
