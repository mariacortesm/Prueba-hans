import panlistaUno from './assets/panelista-1.png'
import panlistaDos from './assets/panelista-2.png'
import panlistaTres from './assets/panelista-3.png'
import panlistaSeis from './assets/panelista-6.png'


const PanelSection =() =>{
    return (
        <div className='bg-[#E5E8F3] flex flex-col justify-center items-center'>
            <div className='flex justify-center mx-16 gap-7 my-10'>
                <div className='bg-white h-auto w-72 p-5 flex flex-col items-center rounded-xl shadow-xl'>
                    <img src={panlistaUno} className=' h-36 w-36 object-cover rounded-full border border-gray-500'/>
                    <h2 className='font-bold text-center  my-3'>Dr. Luis Hernández, Cirujano Plástico</h2>
                    <p className=' text-center'>Cirujano plástico innovador y visionario con una pasión por la excelencia quirúrgica. Con una amplia experiencia en procedimientos estéticos y reconstructivos, se destaca por su enfoque centrado en el paciente y su compromiso con resultados excepcionales.</p>
                </div>
                <div className='bg-white h-auto w-72 p-5  flex flex-col  items-center rounded-xl shadow-xl'>
                    <img src={panlistaDos} className='h-36 w-36 object-cover rounded-full border border-gray-500'/>
                    <h2 className='font-bold text-center my-3'>Dr. Carlos Pérez, Cirujano Plástico</h2>
                    <p className='text-center'>Cirujano plástico altamente cualificado con una pasión por la excelencia y la atención al detalle. Su experiencia en cirugía estética y reconstructiva le ha permitido lograr resultados sobresalientes para sus pacientes, ganándose el respeto de colegas y pacientes por igual.</p>
                </div>
                <div className='bg-white h-auto w-72 p-5  flex flex-col  items-center rounded-xl shadow-xl'>
                    <img src={panlistaTres} className='h-36 w-36 object-contain rounded-full border border-gray-500'/>
                    <h2 className='font-bold text-center  my-3'>Dra. Marta Rodríguez, Cirujana Plástica</h2>
                    <p className=' text-center'>Es una cirujana plástica dedicada y comprometida con la excelencia en el campo de la cirugía estética. Con un enfoque en la seguridad del paciente y la atención personalizada, es reconocida por su habilidad para lograr resultados naturales y satisfactorios.</p>
                </div>
                <div className='bg-white h-auto w-72 p-5  flex flex-col  items-center rounded-xl shadow-xl'>
                    <img src={panlistaSeis} className='h-36 w-36 object-contain rounded-full border border-gray-500'/>
                    <h2 className='font-bold text-center my-3'>Dra. Ana Martínez, Médico Estético</h2>
                    <p className='text-center'>Reconocida médico estético con una amplia experiencia en procedimientos cosméticos no invasivos. Su enfoque centrado en el paciente y su habilidad para combinar técnicas innovadoras la convierten en una experta en el campo de la medicina estética.</p>
                </div>
            </div>
        </div>
    )
}

export default PanelSection;