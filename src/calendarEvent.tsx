
import PanelSection from "./panelSection";
import FooterPage from "./footerPage";
import { HeaderPage } from './headerPage.tsx';
import imgCalendar from './assets/photo_calendar.png'
import panelUno from './assets/panel-1.png'
import panelDos from './assets/panel-2.png'
import panelTres from './assets/panel-3.png'


const CalendarEvent = ()=> {
    return (
        <div className='bg-[#E5E8F3]'>
             <HeaderPage /> 
            <div className="relative">
                <img src={imgCalendar} className="h-48 w-full object-cover" alt="Salón de eventos"/>
            </div>
            <p className="m-10 flex text-center">
            ¡Prográmate! Este 12, 13 y 14 de abril, únete a los medicos especialistas de talla internacional en un espacio para sumergirte en el conocimiento de esta técnica revolucionaria de hilos tensores. 
            <br /><br />
            ¿Qué te espera? 
            Una atmósfera de aprendizaje y colaboración donde podrás compartir experiencias con otros profesionales de la salud en Colombia. Imagina discutir casos, intercambiar ideas y explorar nuevas oportunidades de crecimiento en un ambiente estimulante y dinámico. 
            <br /><br />
            No dejes pasar esta oportunidad única de formar parte de un evento que cambiará tu perspectiva y transformará tu práctica profesional. 
            <br /><br />
            Inscríbete ahora y únete a nosotros en este emocionante viaje hacia el futuro de la medicina estética en Colombia.
            <br /><br />
            Fecha: 12, 13 y 14 de abril
            Lugar: Salón de eventos Inn, Bogotá
            Hora: 8:30 a.m. - 4:00 p.m.
            <br /><br />
            Cupos limitados. </p>
            <h2 className="mx-16 text-3xl font-bold text-center">CRONOGRAMA</h2>
            <div className="flex justify-center items-center gap-10 mx-16 my-10">
                <img src={panelUno} />
                <img src={panelDos}/>
                <img src={panelTres}/>
            </div>
            <h2 className="mx-16 text-2xl font-bold text-center mt-7">PANELISTAS</h2>
            <PanelSection />
            <FooterPage />
        </div>
    )
}

export default CalendarEvent;